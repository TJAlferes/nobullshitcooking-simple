import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

import { ICuisine } from '../../../../store/data/types';
import LoaderSpinner from '../../../LoaderSpinner/LoaderSpinner';
import { CuisineView } from './CuisineView';
import {
  NOBSCBackendAPIEndpointOne
} from '../../../../config/NOBSCBackendAPIEndpointOne';

const endpoint = NOBSCBackendAPIEndpointOne;
const googleMapsAPIKeyTwo = 'AIzaSyA1caERqL2MD4rv2YmbJ139ToyxgT61v6w';

export function Cuisine({ oneColumnATheme, dataCuisines }: Props): JSX.Element {
  const history = useHistory();
  const { id } = useParams();

  const [ cuisine, setCuisine ] = useState<ICuisineDetail>();
  const [ nearbyStoresClicked, setNearbyStoresClicked ] = useState(false);
  const [ address, setAddress ] = useState("");
  const [ latitude, setLatitude ] = useState("");
  const [ longitude, setLongitude ] = useState("");
  const [ tab, setTab ] = useState("intro");

  useEffect(() => {
    if (!id) {
      history.push('/food/cuisines');
      return;
    }

    const isCuisine = dataCuisines
    .find((cui: ICuisine) => cui.cuisine_id === Number(id));

    if (!isCuisine) {
      history.push('/food/cuisines');
      return;
    }

    const getCuisineDetail = async (id: number) => {
      const res = await axios.get(`${endpoint}/cuisine/detail/${id}`);
      if (res.data) setCuisine(res.data);
    };

    if (id && isCuisine) getCuisineDetail(Number(id));
  }, []);

  useEffect(() => {
    const getAddress = async () => {
      if (latitude === "") return;
      if (longitude === "") return;
      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleMapsAPIKeyTwo}`
      );
      if (res.data) setAddress(res.data.results[3].formatted_address);
    };
    getAddress();
  }, [latitude, longitude]);

  const getLocation = async () => {
    const geolocation = navigator.geolocation;
    geolocation.getCurrentPosition(function(position) {
      setLatitude(`${position.coords.latitude}`);
      setLongitude(`${position.coords.longitude}`);
    });
  };

  const handleTabChange = (value: string) => setTab(value);

  const handleShowNearbyStoresClick = () => {
    setNearbyStoresClicked(true);
    getLocation();
  };

  return !cuisine
  ? <LoaderSpinner />
  : (
    <CuisineView
      oneColumnATheme={oneColumnATheme}
      cuisine={cuisine}
      tab={tab}
      nearbyStoresClicked={nearbyStoresClicked}
      address={address}
      latitude={latitude}
      longitude={longitude}
      handleTabChange={handleTabChange}
      handleShowNearbyStoresClick={handleShowNearbyStoresClick}
    />
  );
}

export interface ICuisineDetail {
  cuisine_id: number
  cuisine_name: string
  cuisine_nation: string
  cuisine_wiki: string
  cuisine_intro: string
  cuisine_suppliers: ICuisineSupplier[],
  cuisine_equipment: ICuisineEquipment[],
  cuisine_ingredients: ICuisineIngredient[],
  cuisine_recipes: ICuisineRecipe[]
}

interface ICuisineSupplier {
  supplier_id: number
  supplier_name: string
}

interface ICuisineEquipment {
  equipment_id: number
  equipment_name: string
}

interface ICuisineIngredient {
  ingredient_id: number
  ingredient_name: string
}

interface ICuisineRecipe {
  recipe_id: number
  title: string
}

interface RootState {
  data: {
    cuisines: ICuisine[]
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  oneColumnATheme: string
};

const mapStateToProps = (state: RootState) => ({
  dataCuisines: state.data.cuisines
});

const connector = connect(mapStateToProps);

export default connector(Cuisine);