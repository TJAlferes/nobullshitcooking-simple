import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import { LoaderSpinner } from '../../../components/LoaderSpinner/LoaderSpinner';
import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';
//import { IWorkProduct } from '../../../store/data/types';
import AddToCartButton from './AddToCartButton/AddToCartButton';  // change?
import { ProductView } from './ProductView';

const endpoint = NOBSCBackendAPIEndpointOne;

export function Product({
  dataProducts,
  message,
  oneColumnATheme,
  userIsAuthenticated
}: Props): JSX.Element {
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();

  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ product, setProduct ] = useState<IProduct>();

  useEffect(() => {
    let isSubscribed = true;

    if (isSubscribed) {
      if (message !== "") window.scrollTo(0, 0);
      setFeedback(message);
      setLoading(false);
    }

    return () => {
      isSubscribed = false;
    };
  }, [message]);

  useEffect(() => {
    if (!id) {
      history.push('/home');
      return;
    }

    const getProduct = async () => {
      const res = await axios.get(`${endpoint}/product/${id}`);
      if (res.data) setProduct(res.data);
    };

    getProduct();
  }, []);

  return !product
  ? <LoaderSpinner />
  : (
    <ProductView
      dataProducts={dataProducts}
      feedback={feedback}
      loading={loading}
      product={product}
      oneColumnATheme={oneColumnATheme}
      userIsAuthenticated={userIsAuthenticated}
    />
  );
}

export interface IProduct {
  id: number;
  product_type_id: number;
  supplier_id: number;
  fullname: string;
};

interface RootState {
  auth: {
    userIsAuthenticated: boolean;
  };
  data: {
    products: IWorkProduct[];
  };
  user: {
    message: string;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  twoColumnBTheme: string;
};

const mapStateToProps = (state: RootState) => ({
  dataProducts: state.data.products,
  message: state.user.message,
  userIsAuthenticated: state.auth.userIsAuthenticated
});

const connector = connect(mapStateToProps, {});

export default connector(Product);