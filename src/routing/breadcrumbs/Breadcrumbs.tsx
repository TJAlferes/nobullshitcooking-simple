import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import withBreadcrumbs, { BreadcrumbsProps, InjectedProps } from 'react-router-breadcrumbs-hoc';

import './breadcrumbs.css';

interface RootState {
  theme: {
    breadCrumbsTheme: string;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

const mapStateToProps = (state: RootState) => ({
  breadCrumbsTheme: state.theme.breadCrumbsTheme
});

const connector = connect(mapStateToProps);



export function BreadcrumbsComponent({
  breadCrumbsTheme,
  breadcrumbs
}: BreadcrumbsComponentProps) {
  return (
    <div className={`crumbs ${breadCrumbsTheme}`}>
      {breadcrumbs.map(
        ({ breadcrumb, match }: BreadcrumbsProps, index: number) => (
        <span className="crumb" key={match.url}>
          <Link className="crumb_link" to={match.url}>
            {breadcrumb}
          </Link>
          {
            (index < breadcrumbs.length - 1) &&
            <i className="crumb_pointer"> > </i>
          }
        </span>
        )
      )}
    </div>
  );
}

type BreadcrumbsComponentProps = PropsFromRedux & {
  breadcrumbs: any;
};

export const Breadcrumbs = withBreadcrumbs()(connector(BreadcrumbsComponent));



export function RecipeBreadcrumbs({
  breadCrumbsTheme,
  recipeId,
  title
}: RecipeBreadcrumbsProps) {
  function RecipeBreadcrumbsComponent({ breadcrumbs }: any) {
    breadcrumbs.pop();
    return (
      <div className={`crumbs ${breadCrumbsTheme}`}>
        {breadcrumbs.map(
          ({ breadcrumb, match }: BreadcrumbsProps, index: number) => (
            <span className="crumb" key={match.url}>
              <Link className="crumb_link" to={match.url}>
                {breadcrumb}
              </Link>
              {(index < breadcrumbs.length) && <i className="crumb_pointer"> > </i>}
            </span>
          )
        )}
        <Link
          className="crumb_link"
          to={`/recipes/${recipeId}`}
        >
          {title}
        </Link>
      </div>
    );
  }

  return withBreadcrumbs()(RecipeBreadcrumbsComponent);
}

type RecipeBreadcrumbsProps = PropsFromRedux & {
  recipeId: number;
  title: string; 
}



export function IngredientBreadcrumbs({
  breadCrumbsTheme,
  ingredientId,
  ingredientName
}: IngredientBreadcrumbsProps) {
  function IngredientBreadcrumbsComponent({ breadcrumbs }: any) {
    breadcrumbs.pop();
    return (
      <div className={`crumbs ${breadCrumbsTheme}`}>
        {breadcrumbs.map(
          ({ breadcrumb, match }: BreadcrumbsProps, index: number) => (
            <span className="crumb" key={match.url}>
              <Link className="crumb_link" to={match.url}>
                {breadcrumb}
              </Link>
              {(index < breadcrumbs.length) && <i className="crumb_pointer"> > </i>}
            </span>
          )
        )}
        <Link
          className="crumb_link"
          to={`/ingredients/${ingredientId}`}
        >
          {ingredientName}
        </Link>
      </div>
    );
  }

  return withBreadcrumbs()(IngredientBreadcrumbsComponent);
}

type IngredientBreadcrumbsProps = PropsFromRedux & {
  ingredientId: number;
  ingredientName: string; 
}



export function EquipmentBreadcrumbs({
  breadCrumbsTheme,
  equipmentId,
  equipmentName
}: EquipmentBreadcrumbsProps) {
  function EquipmentBreadcrumbsComponent({ breadcrumbs }: any) {
    breadcrumbs.pop();
    return (
      <div className={`crumbs ${breadCrumbsTheme}`}>
        {breadcrumbs.map(
          ({ breadcrumb, match }: BreadcrumbsProps, index: number) => (
            <span className="crumb" key={match.url}>
              <Link className="crumb_link" to={match.url}>
                {breadcrumb}
              </Link>
              {(index < breadcrumbs.length) && <i className="crumb_pointer"> > </i>}
            </span>
          )
        )}
        <Link
          className="crumb_link"
          to={`/equipment/${equipmentId}`}
        >
          {equipmentName}
        </Link>
      </div>
    );
  }

  return withBreadcrumbs()(EquipmentBreadcrumbsComponent);
}

type EquipmentBreadcrumbsProps = PropsFromRedux & {
  equipmentId: number;
  equipmentName: string; 
}



export function CuisineBreadcrumbs({
  breadCrumbsTheme,
  cuisineId,
  cuisineName
}: CuisineBreadcrumbsProps) {
  function CuisineBreadcrumbsComponent({ breadcrumbs }: any) {
    breadcrumbs.pop();
    return (
      <div className={`crumbs ${breadCrumbsTheme}`}>
        {breadcrumbs.map(
          ({ breadcrumb, match }: BreadcrumbsProps, index: number) => (
            <span className="crumb" key={match.url}>
              <Link className="crumb_link" to={match.url}>
                {breadcrumb}
              </Link>
              {(index < breadcrumbs.length) && <i className="crumb_pointer"> > </i>}
            </span>
          )
        )}
        <Link
          className="crumb_link"
          to={`/food/cuisines/${cuisineId}`}
        >
          {cuisineName}
        </Link>
      </div>
    );
  }

  return withBreadcrumbs()(CuisineBreadcrumbsComponent);
}

type CuisineBreadcrumbsProps = PropsFromRedux & {
  cuisineId: number;
  cuisineName: string; 
}