import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { shallow } from 'enzyme';  // remove?

import { checkProps } from '../test/testUtils';

import App, { App as UnconnectedApp } from './App';

const setup = (props = {}, state = null) => shallow(<App {...props} />);

let wrapper;

describe('the App component', () => {
  beforeEach(() => wrapper = shallow(<App />));

  it('displays itself', () => {
    expect(wrapper.find("[data-test='component-App']")).length.toBe(1);
  })

  it('displays a MobileHeaderRed component', () => {
    expect(wrapper.find("[data-test='component-MobileHeaderRed']")).length.toBe(1);
  });

  it('displays a HeaderRed component', () => {
    expect(wrapper.find("[data-test='component-HeaderRed']")).length.toBe(1);
  });

  it('displays a MainWhite component', () => {
    expect(wrapper.find("[data-test='component-MainWhite']")).length.toBe(1);
  });

  it('displays a FooterGray component', () => {
    expect(wrapper.find("[data-test='component-FooterGray']")).length.toBe(1);
  });
  
  /*it('does not display a HeaderRed component when location is user/register', () => {

  });

  it('does not display a HeaderRed component when location is user/login', () => {

  });

  it('does not display a FooterGray component when location is user/register', () => {

  });

  it('does not display a FooterGray component when location is user/login', () => {

  });*/
});