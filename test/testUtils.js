import checkPropsTypes from 'check-prop-types';
//import { runSaga } from 'redux-saga';

export const checkProps = (component, conformingProps) => {
  const propError = checkPropsTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};

// use this? or use redux-saga-test-plan's expectSaga?
//export const recordSaga = async (saga, initialAction) => {};