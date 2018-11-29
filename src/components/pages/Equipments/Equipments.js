import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './equipments.css';

// Location of our backend API
//const endpoint = 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com/equipment';
const endpoint = 'http://localhost:3003/equipment';

/*
  Equipments Component

  Purpose

    The Equipments page/component lists thumbnail preview links to individual Equipment pages/components.

  Features

    Filter

      It includes filter options. Multiple filters may be applied simultaneously.

    Pagination

      It also includes pagination, performed on the backend.

      If more than 25 equipments are returned from the database,
      then the backend API only returns the first 25 rows,
      but also returns a notification to the frontend that it should render page links,
      as well as instructions on how to do so.

      Those page links, when clicked, will then call the appropriate next or previous 25 equipments.

  Props

  State (Local)

    The local state holds 5 first-level properties:

      equipments -- Array -- Holds data for equipments to be currently rendered
      equipmentTypes -- Array -- Holds data to send along on call to backend API
      pages -- Number -- 
      starting -- Number --
      checkedFilters -- Object -- Keeps track of which filters are currently unchecked/checked
  
  Methods (6)

    async getAllEquipmentTypes() -- Fetches data from backend API

    async getEquipments(startingAt = 0) -- Fetches data from backend API

    getCheckedEquipmentTypes() -- Helper function for DRY code

    handleFilterChange(e) -- Event listener function for when user selects or unselects any filters,
                             invokes getEquipments again, with filters updated

    paginationNumbers() -- Helper function for paginate()

    paginate() -- Creates pagination, invoked when result count higher than 25
  
  Explicit Lifecycle Methods (1)

    componentDidMount()

*/
class Equipments extends Component {
  state = {
    equipment: [],
    equipmentTypes: [],
    pages: 1,
    starting: 0,
    checkedFilters: {
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
    }
  };

  getAllEquipmentTypes = async () => {
    // TO DO: on backend API, make types like equipments
    try {
      const url = `${endpoint}/types/all`;
      const response = await axios.get(url);
      const equipmentTypes = response.data;
      this.setState({equipmentTypes});
    } catch (err) {
      console.log(err);
    }
  }

  getEquipments = async (startingAt = 0) => {
    try {
      const url = `${endpoint}`;
      const response = await axios.post(
        url,
        {types: this.getCheckedEquipmentTypes(), start: startingAt}
      );
      const { rows, pages, starting } = response.data;
      this.setState({equipment: rows, pages, starting});
    } catch (err) {
      console.error(err);
    }
  }

  getCheckedEquipmentTypes = () => {
    let checkedEquipmentTypes = [];
    Object.entries(this.state.checkedFilters).forEach(([key, value]) => {
      if (value === true) checkedEquipmentTypes.push(Number(key));
    });
    return checkedEquipmentTypes;
  }

  handleFilterChange = async (e) => {
    try {
      const id = e.target.id;
      // use 'immutability-helper' for state nested much deeper than this
      // no, use 'flat' or your own utility function to keep state flat!!!
      await this.setState(prevState => ({
        ...prevState, checkedFilters: {
          ...prevState.checkedFilters, [id]: !prevState.checkedFilters[[id]]
        }
      }));
      this.getEquipments();
    } catch (err) {
      console.error(err);
    }
  }

  paginationNumbers = () => {
    const display = 25;
    const { pages, starting } = this.state;
    const currentPage = Math.floor((starting / display) + 1);
    let numbers = [];
    for (let i = 1; i <= pages; i++) {
      let startingAt = (display * (i - 1));
      if (i != currentPage) {
        numbers.push(
          <span 
            className="page_number"
            onClick={() => this.getEquipments(startingAt)}
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
    const { pages, starting } = this.state;
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
                onClick={() => this.getEquipments(startingAtPrev)}
              >
                Prev
              </span>
            }
            {this.paginationNumbers()}
            {
              (currentPage != pages) &&
              <span
                className="page_nav"
                onClick={() => this.getEquipments(startingAtNext)}
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

  // use SSR here...
  componentDidMount() {
    this.getAllEquipmentTypes();
    this.getEquipments();
  }

  render() {
    const { pages } = this.state;
    return(
      <div>
        <div id="page">
          <div id="page_col_left">
            <div id="list_header">
              <h1>Equipment</h1>
            </div>
            <div id="filters">
              <form
                id="itid"
                name="itid"
                onChange={e => this.handleFilterChange(e)}
              >
                <span id="filter_title"><b>Filter by:</b></span>
                <div>
                  <p className="filter_type"><b>Equipment type</b></p>
                  {
                    this.state.equipmentTypes.map((equipmentType, index) => (
                      <span className="filter_span" key={index}>
                        <input
                          type="checkbox"
                          id={equipmentType.equipment_type_id}
                        />
                        <label className="filter_label">
                          {equipmentType.equipment_type_name}
                        </label>
                      </span>
                    ))
                  }
                </div>
              </form>
            </div>
            {(pages > 1) && this.paginate()}
            <div>
              {this.state.equipment.map(equipment => (
                <div className="equipment" key={equipment.equipment_id}>
                  <Link
                    className="equipment_link"
                    to={`/food/equipment/${equipment.equipment_id}`}
                  >
                    {/* TO DO: change to thumbnail image */}
                    <div className="equipment_name">
                      {equipment.equipment_name}
                    </div>
                    <img
                      className="equipment_thumbnail"
                      src={`
                        https://s3.amazonaws.com/nobsc-images-01/equipment/
                        ${equipment.equipment_image}
                        .jpg
                      `}
                    />
                  </Link>
                </div>
              ))}
            </div>
            {(pages > 1) && this.paginate()}
          </div>
          <div id="page_col_right">
          </div>
        </div>
      </div>
    );
  }
}

export default Equipments;