import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router-dom';

import App from './App';

it('displays a HeadRed component', () => {
  const div = document.createElement('div');

  ReactDOM.render(<StaticRouter><App /></StaticRouter>, div);

  console.log(div.innerHTML);
  //expect(div).toEqual;

  ReactDOM.unmountComponentAtNode(div);
});
/*
it('displays a MainWhite component', () => {

});

it('displays a FooterGray component', () => {

});

it('does not display a HeaderRed component when location is user/register', () => {

});

it('does not display a HeaderRed component when location is user/login', () => {

});

it('does not display a FooterGray component when location is user/register', () => {

});

it('does not display a FooterGray component when location is user/login', () => {

});
*/