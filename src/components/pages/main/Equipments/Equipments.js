import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './equipments.css';
import { viewGetEquipment } from '../../../../store/actions/index';

// if double renders, fix
const Equipments = props => {
  const [
    checkedEquipmentTypesFilters,
    setCheckedEquipmentTypesFilters
  ] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  });
  const [ checkedDisplay, setCheckedDisplay ] = useState(25);

  // be sure they are not used anywhere else
  // search page..?
  // use querystring/qs to pre-apply filters? or props?

  useEffect(() => {
    if (props.match.params.type == "cleaning") setCheckedEquipmentTypesFilters(prevState => ({...prevState, 1: true}));
    if (props.match.params.type == "preparing") setCheckedEquipmentTypesFilters(prevState => ({...prevState, 2: true}));
    if (props.match.params.type == "cooking") setCheckedEquipmentTypesFilters(prevState => ({...prevState, 3: true}));
    if (props.match.params.type == "dining") setCheckedEquipmentTypesFilters(prevState => ({...prevState, 4: true}));
    if (props.match.params.type == "storage") setCheckedEquipmentTypesFilters(prevState => ({...prevState, 5: true}));
  }, []);

  useEffect(() => {
    getEquipmentView();
  }, [props.dataEquipment, checkedEquipmentTypesFilters, checkedDisplay]);

  const getEquipmentView = (startingAt = 0) =>
    props.viewGetEquipment(getCheckedEquipmentTypesFilters(), checkedDisplay, startingAt);

  const getCheckedEquipmentTypesFilters = () => {
    let checkedEquipmentTypes = [];
    Object.entries(checkedEquipmentTypesFilters).forEach(([key, value]) => {
      if (value === true) checkedEquipmentTypes.push(Number(key));
    });
    return checkedEquipmentTypes;
  };

  const handleEquipmentTypesFilterChange = e => {
    const id = e.target.id;
    setCheckedEquipmentTypesFilters(prevState => ({
      ...prevState,
      [id]: !prevState[[id]]
    }));
  };

  const handleDisplayChange = e => setCheckedDisplay(e.target.value);

  // move pagination to own function/hook/module
  // limit pagination numbers
  const paginationNumbers = () => {
    const currentPage = Math.floor((props.viewStarting / props.viewDisplay) + 1);
    let numbers = [];
    for (let i = 1; i <= props.viewPages; i++) {
      let startingAt = (props.viewDisplay * (i - 1));
      if (i != currentPage) {
        numbers.push(
          <span
            className="page_number"
            onClick={() => getEquipmentView(startingAt)}
            key={i}
          >
            {i}
          </span>
        );
      } else {
        numbers.push(<span className="current_page_number" key={i}>{i}</span>);
      }
    }
    return numbers;
  }

  const paginate = () => {
    const currentPage = Math.floor((props.viewStarting / props.viewDisplay) + 1);
    const startingAtPrev = (props.viewStarting == 0) ? props.viewStarting : (props.viewStarting - props.viewDisplay);
    const startingAtNext = (props.viewStarting + props.viewDisplay);
    const paginationLinks = (
      <div className="page_links">
        <span className="page_numbers">
          {
            (currentPage != 1) &&
            <span
              className="page_nav"
              onClick={() => getEquipmentView(startingAtPrev)}
            >
              Prev
            </span>
          }
          {paginationNumbers()}
          {
            (currentPage != props.viewPages) &&
            <span
              className="page_nav"
              onClick={() => getEquipmentView(startingAtNext)}
            >
              Next
            </span>
          }
        </span>
      </div>
    );
    return paginationLinks;
  }

  return (
    <div className={`equipments two-column-b ${props.twoColumnBTheme}`}>

        <div className="left-column">

          <div><h1>Equipment</h1></div>

          <div className="equipments-list-filters">
            <form
              className="equipments-list-filters-form"
              name="itid"
              onChange={e => handleEquipmentTypesFilterChange(e)}
            >
              <span className="equipments-filter-title">Filter by:</span>
              <div>
                <p className="equipments-filter-type">Equipment type</p>
                {props.dataEquipmentTypes.map(equipmentType => (
                  <span
                    className="equipments-filter-span"
                    key={equipmentType.equipment_type_id}
                  >
                    <input
                      type="checkbox"
                      id={equipmentType.equipment_type_id}
                      checked={checkedEquipmentTypesFilters[equipmentType.equipment_type_id] == true}
                    />
                    <label className="equipments-filter-label">
                      {equipmentType.equipment_type_name}
                    </label>
                  </span>
                ))}
              </div>
            </form>
          </div>

          <div className="equipments-list-display">
            <form className="equipments-list-filters-form">
              <span className="equipments-filter-title">Results per page:</span>
              <div>
                <span className="equipments-filter-span">
                  <input
                    type="radio"
                    checked={props.viewDisplay == 25}
                    onChange={handleDisplayChange}
                    value="25"
                  />
                  <label className="equipments-filter-label">25</label>
                </span>
                <span className="equipments-filter-span">
                  <input
                    type="radio"
                    checked={props.viewDisplay == 50}
                    onChange={handleDisplayChange}
                    value="50"
                  />
                  <label className="equipments-filter-label">50</label>
                </span>
                <span className="equipments-filter-span">
                  <input
                    type="radio"
                    checked={props.viewDisplay == 100}
                    onChange={handleDisplayChange}
                    value="100"
                  />
                  <label className="equipments-filter-label">100</label>
                </span>
              </div>
            </form>
          </div>

          {(props.viewPages > 1) && paginate()}

          <div className="equipments-list">
            {props.viewEquipment.map(equipment => (
              <div className="equipments-list-item" key={equipment.equipment_id}>
                <Link
                  className="equipment-link"
                  to={`/food/equipment/${equipment.equipment_id}`}
                >
                  <div className="equipment-name">{equipment.equipment_name}</div>
                  <img
                    className="equipment-thumbnail"
                    src={`https://s3.amazonaws.com/nobsc-images-01/equipment/${equipment.equipment_image}.jpg`}
                  />
                </Link>
              </div>
            ))}
          </div>

          {(props.viewPages > 1) && paginate()}

        </div>

        <div className="right-column">
        </div>

    </div>
  );
}

const mapStateToProps = state => ({
  viewEquipment: state.data.viewMainEquipment,
  viewDisplay: state.data.viewMainEquipmentDisplay,
  viewPages: state.data.viewMainEquipmentPages,
  viewStarting: state.data.viewMainEquipmentStarting,
  dataEquipment: state.data.equipment,
  dataEquipmentTypes: state.data.equipmentTypes
});

const mapDispatchToProps = dispatch => ({
  viewGetEquipment: (types, display, start) => dispatch(viewGetEquipment(types, display, start))
});

export default connect(mapStateToProps, mapDispatchToProps)(Equipments);