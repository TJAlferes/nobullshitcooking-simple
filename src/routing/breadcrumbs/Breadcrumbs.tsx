import React from 'react';
import { Link } from 'react-router-dom';
import withBreadcrumbs, { BreadcrumbsProps } from 'react-router-breadcrumbs-hoc';

import './breadcrumbs.css';

export function Breadcrumbs({ breadCrumbsTheme }: Props) {
  function BreadcrumbsComponent({ breadcrumbs }: any) {
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

  return withBreadcrumbs()(BreadcrumbsComponent);
}

interface Props {
  breadCrumbsTheme: string;
}



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

interface RecipeBreadcrumbsProps {
  breadCrumbsTheme: string;
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

interface IngredientBreadcrumbsProps {
  breadCrumbsTheme: string;
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

interface EquipmentBreadcrumbsProps {
  breadCrumbsTheme: string;
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

interface CuisineBreadcrumbsProps {
  breadCrumbsTheme: string;
  cuisineId: number;
  cuisineName: string; 
}