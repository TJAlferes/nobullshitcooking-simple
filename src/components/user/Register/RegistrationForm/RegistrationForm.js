import React from 'react';
import { Auth } from 'aws-amplify';
import { Form, Field } from 'react-final-form';

const handleSubmit = () => {
  Auth.signUp({
    username,
    password,
    attributes: {
      email
    }
  })
  .then(data => console.log(data))
  .catch(err => console.log(err));

  Auth.confirmSignUp(username, code)
  .then(data => console.log(data))
  .catch(err => console.log(err));
}

const validate = () => {

}

const RegistrationForm = () => (
  <Form
    onSubmit={handleSubmit}
    validate={validate}
    render={({ handleSubmit, values, pristine, submitting }) => (

      <form onSubmit={handleSubmit}>

        <h1>Create Account</h1>

        <label>Username</label>
        <Field
          component="input"
          type="text"
          name="username"
          id="username"
          size="20"
          maxLength="20"
          autoFocus
        />

        <label>Email</label>
        <Field
          component="input"
          type="email"
          name="email"
          id="email"
          size="20"
          maxLength="50"
        />

        <label>Password</label>
        <Field
          component="input"
          type="password"
          name="password"
          id="password"
          size="20"
          maxLength="20"
        />

        <label>Password Again</label>
        <Field
          component="input"
          type="password"
          name="password2"
          id="password2"
          size="20"
          maxLength="20"
        />

        <button
          type="submit"
          name="submit"
          id="create_account_button"
          disabled={submitting || pristine}
        >
          Create Account
        </button>

      </form>

    )}
  />
);

export default RegistrationForm;