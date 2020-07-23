import React from 'react';
import { Link } from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { connect, ConnectedProps } from 'react-redux';

import './breadcrumbs.css';

// TO DO: split this file up

interface RootState {
  theme: {
    breadCrumbsTheme: string;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type CuisineBreadcrumbsProps = PropsFromRedux & {
  cuisineId: number;
  cuisineName: string; 
};

type EquipmentBreadcrumbsProps = PropsFromRedux & {
  equipmentId: number;
  equipmentName: string; 
};

type IngredientBreadcrumbsProps = PropsFromRedux & {
  ingredientId: number;
  ingredientName: string; 
};

type RecipeBreadcrumbsProps = PropsFromRedux & {
  recipeId: number;
  title: string; 
};

const mapStateToProps = (state: RootState) => ({
  breadCrumbsTheme: state.theme.breadCrumbsTheme
});

const connector = connect(mapStateToProps, {});

function BreadcrumbsComponent({
  breadCrumbsTheme
}: PropsFromRedux): JSX.Element {
  const BreadcrumbsDisplay = withBreadcrumbs()(
    ({ breadcrumbs }: any): JSX.Element => (
      <>
        {breadcrumbs.map((
          { breadcrumb, match }: any,
          index: number
        ) => (
          <span className="crumb" key={match.url}>
            <Link className="crumb_link" to={match.url}>{breadcrumb}</Link>
            {
              (index < breadcrumbs.length - 1) &&
              <i className="crumb_pointer">&gt;</i>
            }
          </span>
        ))}
      </>
    )
  );

  return (
    <div className={`crumbs ${breadCrumbsTheme}`}>
      <BreadcrumbsDisplay />
    </div>
  );
}

function CuisineBreadcrumbsComponent({
  breadCrumbsTheme,
  cuisineId,
  cuisineName
}: CuisineBreadcrumbsProps): JSX.Element {
  const CuisineBreadcrumbsDisplay = withBreadcrumbs()(
    ({ breadcrumbs }: any): JSX.Element => (
      <>
        {breadcrumbs.pop().map(
          ({ breadcrumb, match }: any, index: number) => (
            <span className="crumb" key={match.url}>
              <Link className="crumb_link" to={match.url}>
                {breadcrumb}
              </Link>
              {
                (index < breadcrumbs.length) &&
                <i className="crumb_pointer">{`&gt;`}</i>
              }
            </span>
          )
        )}
        <Link
          className="crumb_link"
          to={`/page/guide/food/cuisine/${cuisineId}`}
        >
          {cuisineName}
        </Link>
      </>
    )
  );

  return (
    <div className={`crumbs ${breadCrumbsTheme}`}>
      <CuisineBreadcrumbsDisplay />
    </div>
  );
}

function EquipmentBreadcrumbsComponent({
  breadCrumbsTheme,
  equipmentId,
  equipmentName
}: EquipmentBreadcrumbsProps) {
  const EquipmentBreadcrumbsDisplay = withBreadcrumbs()(
    ({ breadcrumbs }: any): JSX.Element => {
      breadcrumbs.pop();
      return (
        <>
          {breadcrumbs.map(
            ({ breadcrumb, match }: any, index: number) => (
              <span className="crumb" key={match.url}>
                <Link className="crumb_link" to={match.url}>
                  {breadcrumb}
                </Link>
                {
                  (index < breadcrumbs.length) &&
                  <i className="crumb_pointer">{`&gt;`}</i>
                }
              </span>
            )
          )}
          <Link
            className="crumb_link"
            to={`/equipment/${equipmentId}`}
          >
            {equipmentName}
          </Link>
        </>
      );
    }
  );

  return (
    <div className={`crumbs ${breadCrumbsTheme}`}>
      <EquipmentBreadcrumbsDisplay />
    </div>
  );
}

function IngredientBreadcrumbsComponent({
  breadCrumbsTheme,
  ingredientId,
  ingredientName
}: IngredientBreadcrumbsProps) {
  const IngredientBreadcrumbsDisplay = withBreadcrumbs()(
    ({ breadcrumbs }: any): JSX.Element => {
      breadcrumbs.pop();
      return (
        <>
          {breadcrumbs.map(
            ({ breadcrumb, match }: any, index: number) => (
              <span className="crumb" key={match.url}>
                <Link className="crumb_link" to={match.url}>
                  {breadcrumb}
                </Link>
                {
                  (index < breadcrumbs.length) &&
                  <i className="crumb_pointer">{`&gt;`}</i>
                }
              </span>
            )
          )}
          <Link
            className="crumb_link"
            to={`/ingredients/${ingredientId}`}
          >
            {ingredientName}
          </Link>
        </>
      );
    }
  );

  return (
    <div className={`crumbs ${breadCrumbsTheme}`}>
      <IngredientBreadcrumbsDisplay />
    </div>
  );
}

function RecipeBreadcrumbsComponent({
  breadCrumbsTheme,
  recipeId,
  title
}: RecipeBreadcrumbsProps) {
  const RecipeBreadcrumbsDisplay = withBreadcrumbs()(
    ({ breadcrumbs }: any): JSX.Element => {
      breadcrumbs.pop();
      return (
        <div className={`crumbs ${breadCrumbsTheme}`}>
          {breadcrumbs.map(
            ({ breadcrumb, match }: any, index: number) => (
              <span className="crumb" key={match.url}>
                <Link className="crumb_link" to={match.url}>
                  {breadcrumb}
                </Link>
                {
                  (index < breadcrumbs.length) &&
                  <i className="crumb_pointer">{`&gt;`}</i>
                }
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
  );

  return (
    <div className={`crumbs ${breadCrumbsTheme}`}>
      <RecipeBreadcrumbsDisplay />
    </div>
  );
}

export const Breadcrumbs = connector(BreadcrumbsComponent);
export const CuisineBreadcrumbs = connector(CuisineBreadcrumbsComponent);
export const EquipmentBreadcrumbs = connector(EquipmentBreadcrumbsComponent);
export const IngredientBreadcrumbs = connector(IngredientBreadcrumbsComponent);
export const RecipeBreadcrumbs = connector(RecipeBreadcrumbsComponent);