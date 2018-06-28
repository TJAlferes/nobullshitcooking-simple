import React from 'react';

import Styles from './Styles';
import LeftNav from '../../LeftNav/LeftNav';

const Dashboard = props => {
  <Styles>
    <div id="page">
			
      <LeftNav />

			<article>

				<h1>Dashboard (Preview)</h1>

        <p id="preview_note">This is an example. Create an account or sign in to view your own dashboard.</p>

        <div>
          <Profile />

        </div>

      </article>

    </div>
  </Styles>
}

export default Dashboard;