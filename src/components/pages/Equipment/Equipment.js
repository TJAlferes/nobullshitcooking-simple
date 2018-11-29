import React, { Component } from 'react';
import axios from 'axios';

import './equipment.css';

// Location of our backend API
//const endpoint = 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com/equipment';
const endpoint = 'http://localhost:3003/equipment';

/*
  Equipment Component

  Purpose

    The Equipment page/component displays detailed information about an individual kitchen equipment item.

  State (Local)

    The local state holds 1 first-level property:

      equipment -- ? -- Holds data for equipment to be currently rendered
  
  Methods (1)

    async getEquipment(id) -- Fetches data from backend API
  
  Explicit Lifecycle Methods (1)

    componentDidMount()

*/
class Equipment extends Component {
  state = {equipment: null};

  // TODO: Redirect them to equipments if they only navigate to /equipment (if there is no /:id)

  getEquipment = async (id) => {  // move id into equipment.js?
    try {
      const url = `${endpoint}/${id}`;
      const response = await axios.get(url);
      const [ row ] = response.data;
      this.setState({equipment: row});
    } catch (err) {
      console.error(err);
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getEquipment(id);
  }

  render() {
    const { equipment } = this.state;
    return (
      <div>
        <div id="page">
        {
          (equipment) &&
          <div className="equipment">
            <div className="equipment_name">{equipment.equipment_name}</div>
            <img
              className="equipment_image"
              src={`
                https://s3.amazonaws.com/nobsc-images-01/equipment/
                ${equipment.equipment_image}
                .jpg
              `}
            />
            <div className="equipment_name">
              Equipment ID: {equipment.equipment_id}
            </div>
            <div className="equipment_name">
              Equipment Type: {equipment.equipment_type_name}
            </div>
            <p>Specs: Coming soon.</p>
          </div>
        }
        </div>
      </div>
    );
  }
}

export default Equipment;