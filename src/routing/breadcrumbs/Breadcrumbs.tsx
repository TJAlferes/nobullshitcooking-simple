import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

import './breadcrumbs.css';

const mapStateToProps = state => ({
  breadCrumbsTheme: state.theme.breadCrumbsTheme
});



export const Breadcrumbs = withBreadcrumbs()(
  connect(mapStateToProps)(
    ({ breadCrumbsTheme, breadcrumbs }) => (
      <BreadcrumbsView
        breadCrumbsTheme={breadCrumbsTheme}
        breadcrumbs={breadcrumbs}
      />
    )
  )
);

export const BreadcrumbsView = ({ breadCrumbsTheme, breadcrumbs }) => (
  <div className={`crumbs ${breadCrumbsTheme}`}>
    {breadcrumbs.map((breadcrumb, index) => (
      <span className="crumb" key={breadcrumb.key}>
        <Link className="crumb_link" to={breadcrumb.key}>
          {breadcrumb.breadcrumb}
        </Link>
        {
          (index < breadcrumbs.length - 1) &&
          <i className="crumb_pointer"> > </i>
        }
      </span>
    ))}
  </div>
);



export const RecipeBreadcrumbs = withBreadcrumbs()(
  connect(mapStateToProps)(
    ({ breadCrumbsTheme, breadcrumbs, recipe }) => {
      breadcrumbs.pop();
      return (
        <RecipeBreadcrumbsView
          breadCrumbsTheme={breadCrumbsTheme}
          breadcrumbs={breadcrumbs}
          recipe={recipe}
        />
      );
    }
  )
);

export const RecipeBreadcrumbsView = ({
  breadCrumbsTheme,
  breadcrumbs,
  recipe
}) => (
  <div className={`crumbs ${breadCrumbsTheme}`}>
    {breadcrumbs.map((breadcrumb, index) => (
      <span className="crumb" key={breadcrumb.key}>
        <Link className="crumb_link" to={breadcrumb.key}>
          {breadcrumb.breadcrumb}
        </Link>
        {(index < breadcrumbs.length) && <i className="crumb_pointer"> > </i>}
      </span>
    ))}
    <Link
      className="crumb_link"
      to={`/recipes/${recipe && recipe.recipe[0].recipeId}`}
    >
      {recipe && recipe.recipe[0].title}
    </Link>
  </div>
);



export const IngredientBreadcrumbs = withBreadcrumbs()(
  connect(mapStateToProps)(
    ({ breadCrumbsTheme, breadcrumbs, ingredient }) => {
      breadcrumbs.pop();
      return (
        <IngredientBreadcrumbsView
          breadCrumbsTheme={breadCrumbsTheme}
          breadcrumbs={breadcrumbs}
          ingredient={ingredient}
        />
      );
    }
  )
);

export const IngredientBreadcrumbsView = ({
  breadCrumbsTheme,
  breadcrumbs,
  ingredient
}) => (
  <div className={`crumbs ${breadCrumbsTheme}`}>
    {breadcrumbs.map((breadcrumb, index) => (
      <span className="crumb" key={breadcrumb.key}>
        <Link className="crumb_link" to={breadcrumb.key}>
          {breadcrumb.breadcrumb}
        </Link>
        {(index < breadcrumbs.length) && <i className="crumb_pointer"> > </i>}
      </span>
    ))}
    <Link
      className="crumb_link"
      to={`/ingredients/${ingredient && ingredient.ingredient_id}`}
    >
      {ingredient && ingredient.ingredient_name}
    </Link>
  </div>
);



export const EquipmentBreadcrumbs = withBreadcrumbs()(
  connect(mapStateToProps)(
    ({ breadCrumbsTheme, breadcrumbs, equipment }) => {
      breadcrumbs.pop();
      return (
        <EquipmentBreadcrumbsView
          breadCrumbsTheme={breadCrumbsTheme}
          breadcrumbs={breadcrumbs}
          equipment={equipment}
        />
      );
    }
  )
);

export const EquipmentBreadcrumbsView = ({
  breadCrumbsTheme,
  breadcrumbs,
  equipment
}) => (
  <div className={`crumbs ${breadCrumbsTheme}`}>
    {breadcrumbs.map((breadcrumb, index) => (
      <span className="crumb" key={breadcrumb.key}>
        <Link className="crumb_link" to={breadcrumb.key}>
          {breadcrumb.breadcrumb}
        </Link>
        {(index < breadcrumbs.length) && <i className="crumb_pointer"> > </i>}
      </span>
    ))}
    <Link
      className="crumb_link"
      to={`/equipment/${equipment && equipment.equipment_id}`}
    >
      {equipment && equipment.equipment_name}
    </Link>
  </div>
);



export const CuisineBreadcrumbs = withBreadcrumbs()(
  connect(mapStateToProps)(
    ({ breadCrumbsTheme, breadcrumbs, cuisine }) => {
      breadcrumbs.pop();
      return (
        <CuisineBreadcrumbsView
          breadCrumbsTheme={breadCrumbsTheme}
          breadcrumbs={breadcrumbs}
          cuisine={cuisine}
        />
      );
    }
  )
);

export const CuisineBreadcrumbsView = ({
  breadCrumbsTheme,
  breadcrumbs,
  cuisine
}) => (
  <div className={`crumbs ${breadCrumbsTheme}`}>
    {breadcrumbs.map((breadcrumb, index) => (
      <span className="crumb" key={breadcrumb.key}>
        <Link className="crumb_link" to={breadcrumb.key}>
          {breadcrumb.breadcrumb}
        </Link>
        {(index < breadcrumbs.length) && <i className="crumb_pointer"> > </i>}
      </span>
    ))}
    <Link
      className="crumb_link"
      to={`/food/cuisines/${cuisine && cuisine.cuisine_id}`}
    >
      {cuisine && cuisine.cuisine_name}
    </Link>
  </div>
);