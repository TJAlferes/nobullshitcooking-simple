import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router-dom';
import { shallow } from 'enzyme';  // remove?

import App, { App as UnconnectedApp } from './App';

const setup = (props = {}, state = null) => shallow(<App {...props} />);

//const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

it('displays itself', () => {
  const wrapper = shallow(<App />);
  const componentApp = wrapper.find("[data-test='component-App']");
  expect(componentApp).length.toBe(1);
})

it('displays a MobileHeaderRed component', () => {
  const wrapper = shallow(<App />);
  const componentMobileHeaderRed = wrapper
  .find("[data-test='component-MobileHeaderRed']");
  expect(componentMobileHeaderRed).length.toBe(1);
});

it('displays a HeaderRed component', () => {
  /*const div = document.createElement('div');
  const blah = (
    <StaticRouter>
      <UnconnectedApp location={{pathname: "/"}} />
    </StaticRouter>
  );
  ReactDOM.render(blah, div);
  console.log(div.innerHTML);
  expect(div).toEqual;
  ReactDOM.unmountComponentAtNode(div);*/
  const wrapper = shallow(<App />);
  const componentHeaderRed = wrapper.find("[data-test='component-HeaderRed']");
  expect(componentHeaderRed).length.toBe(1);
});

it('displays a MainWhite component', () => {
  const wrapper = shallow(<App />);
  const componentMainWhite = wrapper.find("[data-test='component-MainWhite']");
  expect(componentMainWhite).length.toBe(1);
});

it('displays a FooterGray component', () => {
  const wrapper = shallow(<App />);
  const componentFooterGray = wrapper.find("[data-test='component-FooterGray']");
  expect(componentFooterGray).length.toBe(1);
});
/*
it('does not display a HeaderRed component when location is user/register', () => {

});

it('does not display a HeaderRed component when location is user/login', () => {

});

it('does not display a FooterGray component when location is user/register', () => {

});

it('does not display a FooterGray component when location is user/login', () => {

});
*/