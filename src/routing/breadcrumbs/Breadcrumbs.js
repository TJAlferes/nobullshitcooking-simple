import React from 'react';
import { Link } from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

import './breadcrumbs.css';
/*
const routes = [
  {path: '/dashboard', breadcrumb: 'Dashboard'},
  {path: '/user/dashboard', breadcrumb: 'Dashboard'},
  {path: '/planner', breadcrumb: 'Planner'},
  {path: '/user/planner', breadcrumb: 'Planner'},
  {path: '/messenger', breadcrumb: 'Messenger'},
  {path: '/user/messenger', breadcrumb: 'Messenger'},
  {path: '/friends', breadcrumb: 'Friends'},
  {path: '/user/friends', breadcrumb: 'Friends'},

  {path: '/site/sitemap', breadcrumb: 'Sitemap'},
  {path: '/site/disclaimer', breadcrumb: 'Disclaimer'},
  {path: '/site/terms', breadcrumb: 'Terms'},
  {path: '/site/privacy', breadcrumb: 'Privacy'},
  {path: '/site/help', breadcrumb: 'Help'},
  
  {path: '/content/food/equipment/X', breadcrumb: },
  {path: '/content/food/equipments', breadcrumb: },
  {path: '/content/food/ingredient/X', breadcrumb: },
  {path: '/content/food/ingredients', breadcrumb: },
  {path: '/content/food/recipe/X', breadcrumb: },
  {path: '/content/food/recipes', breadcrumb: },
  {path: '/content/food', breadcrumb: },
  {path: '/content/fitness', breadcrumb: },
  {path: '/content/supplements', breadcrumb: },

  {path: '/content/water-filtration', breadcrumb: },
  {path: '/content/tea', breadcrumb: },
  {path: '/content/coffee', breadcrumb: },

  {path: '/content/outdoors', breadcrumb: },
  {path: '/content/garden', breadcrumb: },
  {path: '/content/tools', breadcrumb: },
  {path: '/content/weapons', breadcrumb: },
  {path: '/content/finances', breadcrumb: },
  {path: '/content/security', breadcrumb: },

  {path: '/content/contests', breadcrumb: },
  {path: '/content/seasonal', breadcrumb: },
  {path: '/content/', breadcrumb: },

  {path: '/content/charity', breadcrumb: }
  
];
*/
const Breadcrumbs = ({ breadcrumbs }) => (
  <div className="crumbs">
    {
      breadcrumbs.map((breadcrumb, index) => (
        <span className="crumb" key={breadcrumb.key}>
          <Link className="crumb_link" to={breadcrumb.props.match.url}>{breadcrumb}</Link>
          {(index < breadcrumbs.length - 1) && <i className="crumb_pointer"> > </i>}
        </span>
      ))
    }
  </div>
);

export default withBreadcrumbs()(Breadcrumbs);