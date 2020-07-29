import { shallow } from 'enzyme';
import React from 'react';

import { Content } from './Content';

const activateModal = jest.fn();
const deactivateModal = jest.fn();
const getApplicationNode = jest.fn();
const handleDeleteContent = jest.fn();
const initialProps = {
  activateModal,
  content,
  creatingContent,
  deactivateModal,
  deleteName,
  editingId,
  getApplicationNode,
  handleDeleteContent,
  modalActive
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