import React from 'react';

import './welcome.css';

const Welcome = props => (
  <div className={`welcome one-column-a ${props.oneColumnATheme}`}>

    <h1>Welcome</h1>

    <div className="welcome-block">
      <h2 className="welcome-block-statement">Learn To Cook</h2>
      <h3 className="welcome-block-detail">- Quickly level up your cooking skill</h3>
      <h3 className="welcome-block-detail">- Impress your family and friends, and even yourself</h3>
      <h3 className="welcome-block-detail">- Save time, money, and energy</h3>
      <h3 className="welcome-block-detail">- Take control of your health and fitness</h3>
    </div>

    <div className="welcome-block">
      <h2 className="welcome-block-statement">Execute Your Plan</h2>
      <h3 className="welcome-block-detail">- Reach your goals faster with the NOBSC Planner</h3>
      <h3 className="welcome-block-detail">- Use official NOBSC recipes</h3>
      <h3 className="welcome-block-detail">- Create, edit, and use your very own recipes</h3>
      <h3 className="welcome-block-detail">- Save and Favorite recipes</h3>
    </div>

    <div className="welcome-block">
      <h2 className="welcome-block-statement">Contribute To the World</h2>
      <h3 className="welcome-block-detail">- Submit any of your own recipes to NOBSC</h3>
      <h3 className="welcome-block-detail">- Submit anonymously or enjoy the spotlight</h3>
      {/* "Recipe created by YourUserName" <img /> */}
      <h3 className="welcome-block-detail">- Feel proud as others Favorite your creations</h3>
    </div>

    <div className="welcome-block">
      <h2 className="welcome-block-statement">Celebrate With Others</h2>
      <h3 className="welcome-block-detail">- Build up your NOBSC Friends list</h3>
      <h3 className="welcome-block-detail">- Chat with others one-on-one or in groups through the NOBSC Messenger</h3>
    </div>

  </div>
);

export default Welcome;