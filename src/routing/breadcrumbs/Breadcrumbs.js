import React from 'react';
import { Link } from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

// routes for Breadcrumb component
//import Dashboard from '../../components/Dashboard/Dashboard';
//import UserDashboard from '../../containers/user/UserDashboard/UserDashboard';
//import Planner from '../../containers/Planner/Planner';
//import UserPlanner from '../../containers/user/UserPlanner/UserPlanner';
//import Messenger from '../../containers/Messenger/Messenger';
//import UserMessenger from '../../containers/user/UserMessenger/UserMessenger';
//import Friends from '../../components/Friends/Friends';
//import UserFriends from '../../containers/user/UserFriends/UserFriends';

//import Sitemap from '../../components/pages/site/Sitemap/Sitemap';
//import Disclaimer from '../../components/pages/site/Disclaimer/Disclaimer';
//import TermsOfUse from '../../components/pages/site/TermsOfUse/TermsOfUse';
//import PrivacyPolicy from '../../components/pages/site/PrivacyPolicy/PrivacyPolicy';
//import Help from '../../components/pages/site/Help/Help';

//import Equipment from '../../components/pages/Equipment/Equipment';
//import Ingredients from '../../components/pages/Ingredients/Ingredients';
//import Recipes from '../../components/pages/Recipes/Recipes';
//import Food from '../../components/pages/Food/Food';
//import Fitness from '../../components/pages/Fitness/Fitness';

//import Supplements from '../../components/pages/Supplements/Supplements';

//import WaterFiltration from '../../components/pages/WaterFiltration/WaterFiltration';
//import Tea from '../../components/pages/Tea/Tea';
//import Coffee from '../../components/pages/Coffee/Coffee';

//import Outdoors from '../../components/pages/Outdoors/Outdoors';
//import Garden from '../../components/pages/Garden/Garden';
//import Tools from '../../components/pages/Tools/Tools';
//import Weapons from '../../components/pages/Weapons/Weapons';
//import Finances from '../../components/pages/Finances/Finances';
//import Security from '../../components/pages/Security/Security';

//import Contests from '../../components/pages/Contests/Contests';
//import FoodInSeason from '../../components/pages/FoodInSeason/FoodInSeason';
//import RecipeSubmit from '../../components/pages/RecipeSubmit/RecipeSubmit';
//import from '../../components/pages//';

//import Charity from '../../components/pages/Charity/Charity';

//import Home from '../../components/pages/Home/Home';

//import NotFound from '../../components/NotFound/NotFound';

/*
^
remove
you don't need these
*/
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
  
  {path: '/content/food/equipment', breadcrumb: },
  {path: '/content/food/ingredients', breadcrumb: },
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
  <div>
    {
      breadcrumbs.map((breadcrumb, index) => (
        <span key={breadcrumb.key}>
          <Link to={breadcrumb.props.match.url}>{breadcrumb}</Link>
          {(index < breadcrumbs.length - 1) && <i> > </i>}
        </span>
      ))
    }
  </div>
);

export default withBreadcrumbs()(Breadcrumbs);