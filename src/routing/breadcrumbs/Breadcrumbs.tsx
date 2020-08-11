import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { Link } from 'react-router-dom';

import './breadcrumbs.css';

interface RootState {
  theme: {
    breadCrumbsTheme: string;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type CuisineBreadcrumbsProps = PropsFromRedux & {
  id: number;
  name: string; 
};

type EquipmentBreadcrumbsProps = PropsFromRedux & {
  id: number;
  name: string; 
};

type IngredientBreadcrumbsProps = PropsFromRedux & {
  id: number;
  name: string; 
};

type RecipeBreadcrumbsProps = PropsFromRedux & {
  id: number;
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
            <Link className="crumb-link" to={match.url}>{breadcrumb}</Link>
            {
              (index < breadcrumbs.length - 1) &&
              <i className="crumb-pointer">&gt;</i>
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
  id,
  name
}: CuisineBreadcrumbsProps): JSX.Element {
  const CuisineBreadcrumbsDisplay = withBreadcrumbs()(
    ({ breadcrumbs }: any): JSX.Element => (
      <>
        {breadcrumbs.pop().map(
          ({ breadcrumb, match }: any, index: number) => (
            <span className="crumb" key={match.url}>
              <Link className="crumb-link" to={match.url}>
                {breadcrumb}
              </Link>
              {
                (index < breadcrumbs.length) &&
                <i className="crumb-pointer">{`&gt;`}</i>
              }
            </span>
          )
        )}
        <Link
          className="crumb-link"
          to={`/page/guide/food/cuisine/${id}`}
        >
          {name}
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
  id,
  name
}: EquipmentBreadcrumbsProps) {
  const EquipmentBreadcrumbsDisplay = withBreadcrumbs()(
    ({ breadcrumbs }: any): JSX.Element => {
      breadcrumbs.pop();
      return (
        <>
          {breadcrumbs.map(
            ({ breadcrumb, match }: any, index: number) => (
              <span className="crumb" key={match.url}>
                <Link className="crumb-link" to={match.url}>
                  {breadcrumb}
                </Link>
                {
                  (index < breadcrumbs.length) &&
                  <i className="crumb-pointer">{`&gt;`}</i>
                }
              </span>
            )
          )}
          <Link
            className="crumb-link"
            to={`/equipment/${id}`}
          >
            {name}
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
  id,
  name
}: IngredientBreadcrumbsProps) {
  const IngredientBreadcrumbsDisplay = withBreadcrumbs()(
    ({ breadcrumbs }: any): JSX.Element => {
      breadcrumbs.pop();
      return (
        <>
          {breadcrumbs.map(
            ({ breadcrumb, match }: any, index: number) => (
              <span className="crumb" key={match.url}>
                <Link className="crumb-link" to={match.url}>
                  {breadcrumb}
                </Link>
                {
                  (index < breadcrumbs.length) &&
                  <i className="crumb-pointer">{`&gt;`}</i>
                }
              </span>
            )
          )}
          <Link
            className="crumb-link"
            to={`/ingredients/${id}`}
          >
            {name}
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
  id,
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
                <Link className="crumb-link" to={match.url}>
                  {breadcrumb}
                </Link>
                {
                  (index < breadcrumbs.length) &&
                  <i className="crumb-pointer">{`&gt;`}</i>
                }
              </span>
            )
          )}
          <Link
            className="crumb-link"
            to={`/recipes/${id}`}
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