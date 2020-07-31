import { shallow } from 'enzyme';
import React from 'react';

import { LoaderButton } from '../LoaderButton/LoaderButton';
import { LoginView } from './LoginView';

const handleEmailChange = jest.fn();
const handleLoginClick = jest.fn();
const handleLoginKeyUp = jest.fn();
const handlePasswordChange = jest.fn();
const validateLoginInfo = jest.fn();

const initialProps = {
  email: "",
  feedback: "Some message.",
  handleEmailChange,
  handleLoginClick,
  handleLoginKeyUp,
  handlePasswordChange,
  loading: false,
  password: "",
  validateLoginInfo
};

describe('LoginView', () => {
  const wrapper = shallow(<LoginView {...initialProps} />);

  it('displays feedback', () => {
    expect(wrapper.find('p.login-feedback').text()).toEqual("Some message.");
  });

  it('displays an email input element', () => {
    expect(wrapper.find('input[name="email"]')).toHaveLength(1);
  });

  it('displays a password input element', () => {
    expect(wrapper.find('input[name="password"]')).toHaveLength(1);
  });

  it('displays a LoaderButton component with text Sign In', () => {
    expect(wrapper.find(LoaderButton).props().text).toEqual("Sign In");
  });
});