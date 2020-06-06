import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import './dashboard.css';

export function StaffDashboard({ authname }: Props): JSX.Element {
  return (
    <div className="staff-dashboard">
      <p>{authname}</p>
    </div>
  );
}

interface RootState {
  auth: {
    authname: string;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const mapStateToProps = (state: RootState) => ({
  authname: state.auth.authname
});

const connector = connect(mapStateToProps);

export default connector(StaffDashboard);