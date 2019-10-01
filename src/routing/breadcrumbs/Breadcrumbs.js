import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

import './breadcrumbs.css';

const mapStateToProps = state => ({
  breadCrumbsTheme: state.theme.breadCrumbsTheme
});

export const Breadcrumbs = withBreadcrumbs()(
  connect(mapStateToProps)(
    ({ breadCrumbsTheme, breadcrumbs }) => (
      <div className={`crumbs ${breadCrumbsTheme}`}>
        {breadcrumbs.map((breadcrumb, index) => {
          let { pathname } = useLocation();
          return (
            <span className="crumb" key={breadcrumb.key}>
              <Link className="crumb_link" to={pathname}>
                {breadcrumb.breadcrumb}
              </Link>
              {
                (index < breadcrumbs.length - 1) &&
                <i className="crumb_pointer"> > </i>
              }
            </span>
          );
        })}
      </div>
    )
  )
);

export const RecipeBreadcrumbs = withBreadcrumbs()(
  connect(mapStateToProps)(
    ({ breadCrumbsTheme, breadcrumbs, recipe }) => {
      breadcrumbs.pop();
      return (
        <div className={`crumbs ${breadCrumbsTheme}`}>
          {breadcrumbs.map((breadcrumb, index) => (
            <span className="crumb" key={breadcrumb.key}>
              <Link className="crumb_link" to={breadcrumb.props.match.url}>
                {breadcrumb}
              </Link>
              {
                (index < breadcrumbs.length) &&
                <i className="crumb_pointer"> > </i>
              }
            </span>
          ))}
          <Link
            className="crumb_link"
            to={`/food/recipe/${recipe && recipe.recipe_id}`}
          >
            {recipe && recipe.title}
          </Link>
        </div>
      );
    }
  )
);

export const IngredientBreadcrumbs = withBreadcrumbs()(
  connect(mapStateToProps)(
    ({ breadCrumbsTheme, breadcrumbs, ingredient }) => {
      breadcrumbs.pop();
      return (
        <div className={`crumbs ${breadCrumbsTheme}`}>
          {breadcrumbs.map((breadcrumb, index) => (
            <span className="crumb" key={breadcrumb.key}>
              <Link className="crumb_link" to={breadcrumb.props.match.url}>
                {breadcrumb}
              </Link>
              {
                (index < breadcrumbs.length) &&
                <i className="crumb_pointer"> > </i>
              }
            </span>
          ))}
          <Link
            className="crumb_link"
            to={`/food/ingredient/${ingredient && ingredient.ingredient_id}`}
          >
            {ingredient && ingredient.title}
          </Link>
        </div>
      );
    }
  )
);

export const EquipmentBreadcrumbs = withBreadcrumbs()(
  connect(mapStateToProps)(
    ({ breadCrumbsTheme, breadcrumbs, equipment }) => {
      breadcrumbs.pop();
      return (
        <div className={`crumbs ${breadCrumbsTheme}`}>
          {breadcrumbs.map((breadcrumb, index) => (
            <span className="crumb" key={breadcrumb.key}>
              <Link className="crumb_link" to={breadcrumb.props.match.url}>
                {breadcrumb}
              </Link>
              {
                (index < breadcrumbs.length) &&
                <i className="crumb_pointer"> > </i>
              }
            </span>
          ))}
          <Link
            className="crumb_link"
            to={`/food/equipment/${equipment && equipment.equipment_id}`}
          >
            {equipment && equipment.title}
          </Link>
        </div>
      );
    }
  )
);