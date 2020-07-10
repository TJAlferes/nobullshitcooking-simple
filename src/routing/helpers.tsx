import React from 'react';

import { IContentType } from '../store/data/types';
import AppliedRoute from './components/AppliedRoute';
import AuthenticatedStaffRoute from './components/AuthenticatedStaffRoute';
import AuthenticatedUserRoute from './components/AuthenticatedUserRoute';
import UnauthenticatedStaffRoute from './components/UnauthenticatedStaffRoute';
import UnauthenticatedUserRoute from './components/UnauthenticatedUserRoute';

function unflattenPageTypes(pageTypes: IContentType[]) {
  let nodes: any = [...pageTypes];
  let map: any = {};
  let node;
  let roots = [];

  for (let i = 0; i < nodes.length; i += 1) {
    node = nodes[i];
    node.children = [];
    map[node.content_type_id] = i;

    if (
      node.parent_id !== 0 &&
      nodes[map[node.parent_id]].children !== undefined
    ) {
      nodes[map[node.parent_id]].children.push(node);
    } else {
      roots.push(node);
    }
  }

  return roots[0];
}

export function makeRoutesFromContentTypes(contentTypes: IContentType[]) {
  const pageTypes = contentTypes
  .filter(contentType => contentType.content_type_id !== 2);

  const unflattenedPageTypes = unflattenPageTypes(pageTypes);

  let routes = [];
  let arr = [unflattenedPageTypes];

  while (arr.length) {
    let currentPageType = arr.shift();

    arr.unshift(...currentPageType.children);

    let path = currentPageType.path;
    let name = currentPageType.content_type_name;
    let childProps: any = {name, path, links: []};

    while (currentPageType.children.length) {
      let current = currentPageType.children.shift();
      
      childProps.links.push({
        name: current.content_type_name,
        path: current.content_type_path
      });
    }

    let route = {
      path: currentPageType.content_type_path,
      childProps
    };
    
    routes.push(route)
  }

  return routes.reverse();
}

export const appRoute = (
  path: string,
  component: any,
  childProps: any = null
) =>
  <AppliedRoute
    key={path}
    path={path}
    component={component}
    childProps={childProps}
  />;

export const authStaffRoute = (
  path: string,
  component: any,
  childProps: any = null
) =>
  <AuthenticatedStaffRoute
    path={path}
    component={component}
    childProps={childProps}
  />;

export const authUserRoute = (
  path: string,
  component: any,
  childProps: any = null
) =>
  <AuthenticatedUserRoute
    path={path}
    component={component}
    childProps={childProps}
  />;

export const unauthStaffRoute = (
  path: string,
  component: any,
  childProps: any = null
) =>
  <UnauthenticatedStaffRoute
    path={path}
    component={component}
    childProps={childProps}
  />;

export const unauthUserRoute = (
  path: string,
  component: any,
  childProps: any = null
) =>
  <UnauthenticatedUserRoute
    path={path}
    component={component}
    childProps={childProps}
  />;