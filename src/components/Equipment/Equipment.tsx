import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { IEquipment } from '../../store/data/types';
import { LoaderSpinner } from '../LoaderSpinner/LoaderSpinner';
import { EquipmentView } from './EquipmentView';

export function Equipment({
  breadCrumbsTheme,
  twoColumnBTheme,
  dataEquipment,
  dataMyPrivateEquipment
}: Props): JSX.Element {
  const history = useHistory();
  const { id } = useParams();

  const [ equipment, setEquipment ] = useState<IEquipment>();

  useEffect(() => {
    if (!id) {
      history.push('/home');
      return;
    }

    const localEquipment = (
      dataEquipment
      .find((equ: IEquipment) => equ.equipment_id == Number(id)) ||
      dataMyPrivateEquipment
      .find((equ: IEquipment) => equ.equipment_id == Number(id))
    );

    if (!localEquipment) {
      history.push('/home');
      return;
    }
    
    setEquipment(localEquipment);
  }, []);

  return !equipment
  ? <LoaderSpinner />
  : (
    <EquipmentView
      breadCrumbsTheme={breadCrumbsTheme}
      twoColumnBTheme={twoColumnBTheme}
      equipment={equipment}
      dataMyPrivateEquipment={dataMyPrivateEquipment}
    />
  );
}

interface RootState {
  data: {
    equipment: IEquipment[];
    myPrivateEquipment: IEquipment[];
  }
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  breadCrumbsTheme: string;
  twoColumnBTheme: string;
};

const mapStateToProps = (state: RootState) => ({
  dataEquipment: state.data.equipment,
  dataMyPrivateEquipment: state.data.myPrivateEquipment
});

const connector = connect(mapStateToProps);

export default connector(Equipment);