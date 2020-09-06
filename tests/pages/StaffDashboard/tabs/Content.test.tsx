import { shallow } from 'enzyme';
import React from 'react';

import { Content } from '../../../../src/pages/StaffDashboard/tabs/Content';

const activateModal = jest.fn();
const deactivateModal = jest.fn();
const getApplicationNode = jest.fn();
const handleDeleteContent = jest.fn();

const initialProps = {
  activateModal,
  content: [
    {id: 1, title: "Some Title", author: "Person", image: "some-image"},
    {id: 2, title: "Some Other Title", author: "Person", image: "some-image"}
  ],
  creatingContent: false,  // TO DO: test
  deactivateModal,
  deleteName: "",
  editingId: null,
  getApplicationNode,
  handleDeleteContent,
  modalActive: false  // TO DO: test
};

describe('Content', () => {
  const wrapper = shallow(<Content {...initialProps} />);

  it(`
    displays a h2 element
    with className staff-dashboard-content-heading and
    with text 'Content'
  `, () => {
    expect(wrapper.find('h2.staff-dashboard-content-heading').text())
    .toEqual("Content");
  });

  describe ('when creating content', () => {
    
  });
});