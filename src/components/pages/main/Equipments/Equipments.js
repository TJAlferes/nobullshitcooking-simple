import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './equipments.css';

let endpoint;
if (process.env.NODE_ENV === "production") {
  endpoint = 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com';
} else {
  endpoint = 'http://localhost:3003';
}

const Equipments = props => {
  const [ equipment, setEquipment ] = useState([]);
  const [ dataEquipmentTypes, setDataEquipmentTypes ] = useState([]);
  const [ pages, setPages ] = useState(1);
  const [ starting, setStarting ] = useState(0);
  const [
    checkedEquipmentTypesFilters,
    setCheckedEquipmentTypesFilters
  ] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false
  });

  useEffect(() => {
    const fetchDataEquipmentTypes = async () => {
      const res = await axios.get(`${endpoint}/equipment-type`);
      setDataEquipmentTypes(res.data);
    };
    fetchDataEquipmentTypes();
    if (props.equipmentTypesPreFilter) {
      //setCheckedEquipmentTypesFilters();
    } else {
      getEquipment();
    }
  }, []);

  useEffect(() => {
    getEquipment();
  }, [checkedEquipmentTypesFilters]);

  const getEquipment = async (startingAt = 0) => {
    try {
      const res = await axios.post(`${endpoint}/ingredient`, {
        types: getCheckedEquipmentTypesFilters(),
        start: startingAt
      });
      const { rows, pages, starting } = res.data;
      setEquipment(rows);
      setPages(pages);
      setStarting(starting);
    } catch (err) {
      console.error(err);
    }
  }

  const getCheckedEquipmentTypesFilters = () => {
    let checkedEquipmentTypes = [];
    Object.entries(checkedEquipmentTypesFilters).forEach(([key, value]) => {
      if (value === true) checkedEquipmentTypes.push(Number(key));
    });
    return checkedEquipmentTypes;
  }

  const handleEquipmentTypesFilterChange = async (e) => {
    const id = e.target.id;
    await setCheckedEquipmentTypesFilters(prevState => ({
      ...prevState,
      [id]: !prevState[[id]]
    }));
  }

  const paginationNumbers = () => {
    const display = 25;
    const currentPage = Math.floor((starting / display) + 1);
    let numbers = [];
    for (let i = 1; i <= pages; i++) {
      let startingAt = (display * (i - 1));
      if (i != currentPage) {
        numbers.push(
          <span 
            className="page_number"
            onClick={() => getEquipment(startingAt)}
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

  paginate = () => {
    const display = 25;
    const currentPage = Math.floor((starting / display) + 1);
    const startingAtPrev = (starting == 0) ? starting : (starting - display);
    const startingAtNext = (starting + display);
    const paginationLinks = (
      <div className="page_links">
        {
          <span className="page_numbers">
            {
              (currentPage != 1) &&
              <span
                className="page_nav"
                onClick={() => getEquipment(startingAtPrev)}
              >
                Prev
              </span>
            }
            {paginationNumbers()}
            {
              (currentPage != pages) &&
              <span
                className="page_nav"
                onClick={() => getEquipment(startingAtNext)}
              >
                Next
              </span>
          }
          </span>
        }
      </div>
    );
    return paginationLinks;
  }

  return (
    <div>

      <div id="page">

        <div id="page_col_left">

          <div id="list_header"><h1>Equipment</h1></div>

          <div id="filters">
            <form
              id="itid"
              name="itid"
              onChange={e => handleEquipmentTypesFilterChange(e)}
            >
              <span id="filter_title"><b>Filter by:</b></span>
              <div>
                <p className="filter_type"><b>Equipment type</b></p>
                {dataEquipmentTypes.map(equipmentType => (
                  <span
                    className="filter_span"
                    key={equipmentType.equipment_type_id}
                  >
                    <input
                      type="checkbox"
                      id={equipmentType.equipment_type_id}
                    />
                    <label className="filter_label">
                      {equipmentType.equipment_type_name}
                    </label>
                  </span>
                ))}
              </div>
            </form>
          </div>

          {(pages > 1) && paginate()}

          <div>
            {equipment.map(equipment => (
              <div className="equipment" key={equipment.equipment_id}>
                <Link
                  className="equipment_link"
                  to={`/food/equipment/${equipment.equipment_id}`}
                >
                  <div className="equipment_name">
                    {equipment.equipment_name}
                  </div>
                  {/* TO DO: change to thumbnail image */}
                  <img
                    className="equipment_thumbnail"
                    src={`https://s3.amazonaws.com/nobsc-images-01/equipment/${equipment.equipment_image}.jpg`}
                  />
                </Link>
              </div>
            ))}
          </div>

          {(pages > 1) && paginate()}

        </div>

        <div id="page_col_right">
        </div>

      </div>

    </div>
  );
}

export default Equipments;