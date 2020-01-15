import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';

import EquipmentView from './EquipmentView';

export const Equipment = ({
  match,
  twoColumnBTheme,
  dataEquipmentTypes,
  dataEquipment,
  dataMyPrivateEquipment
}) => {
  const history = useHistory();

  const [ equipment, setEquipment ] = useState("");

  useEffect(() => {
    const { id } = match.params;
    if (!id) history.push('/home');
    const localEquipment = (
      dataEquipment.find(equ=> equ.equipment_id == id) ||
      dataMyPrivateEquipment.find(equ=> equ.equipment_id == id)
    );
    if (localEquipment) {
      const localEquipmentType = dataEquipmentTypes.find(
        equ => equ.equipment_type_id == localEquipment.equipment_type_id
      );
      localEquipment.equipment_type_name = localEquipmentType.equipment_type_name;
      setEquipment(localEquipment);
    } else {
      history.push('/equipment');
    }
  }, []);

  return (
    <EquipmentView
      twoColumnBTheme={twoColumnBTheme}
      equipment={equipment}
      dataMyPrivateEquipment={dataMyPrivateEquipment}
    />
  );
}

const mapStateToProps = state => ({
  dataEquipmentTypes: state.data.equipmentTypes,
  dataEquipment: state.data.equipment,
  dataMyPrivateEquipment: state.data.myPrivateEquipment
});

export default withRouter(connect(mapStateToProps)(Equipment));