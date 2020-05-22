import React, { lazy } from 'react';

const Navigation = lazy(() => import('../components/cms/Navigation/Navigation'));
import { IContentType } from '../store/data/types';
import AppliedRoute from './AppliedRoute';

const appRoute = (
  path: string,
  component: any,
  childProps: any = null
) =>
  <AppliedRoute
    path={path}
    component={component}
    childProps={childProps}
  />;

export function unflattenPageTypes(pageTypes: IContentType[]) {
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
        path: current.path
      });
    }

    let route = appRoute(
      currentPageType.path,
      Navigation,
      childProps
    );
    
    routes.push(route)
  }

  return routes;
}

/*{
    content_type_id: 1,
    parent_id: 0,
    content_type_name: "Page",
    //path: "/",
    //content_type_image: "",
    children: [
      {
        content_type_id: 3,
        parent_id: 1,
        content_type_name: "Guide",
        //path: "/",
        //content_type_image: "",
        children: [
          {
            content_type_id: 6,
            parent_id: 3,
            content_type_name: "Fitness",
            //path: "/",
            //content_type_image: "",
            children: [
              {
                content_type_id: 8,
                parent_id: 6,
                content_type_name: "Exercises",
                //path: "/",
                //content_type_image: "",
                children: []
              },
              {
                content_type_id: 9,
                parent_id: 6,
                content_type_name: "Principles",
                //path: "/",
                //content_type_image: "",
                children: []
              }
            ]
          },
          {
            content_type_id: 7,
            parent_id: 3,
            content_type_name: "Food",
            //path: "/",
            //content_type_image: "",
            children: [
              {
                content_type_id: 10,
                parent_id: 7,
                content_type_name: "Recipes",
                //path: "/",
                //content_type_image: "",
                children: []
              },
              {
                content_type_id: 11,
                parent_id: 7,
                content_type_name: "Cuisines",
                //path: "/",
                //content_type_image: "",
                children: []
              },
              {
                content_type_id: 12,
                parent_id: 7,
                content_type_name: "Ingredients",
                //path: "/",
                //content_type_image: "",
                children: []
              },
              {
                content_type_id: 13,
                parent_id: 7,
                content_type_name: "Nutrition",
                //path: "/",
                //content_type_image: "",
                children: []
              },
              {
                content_type_id: 14,
                parent_id: 7,
                content_type_name: "Equipment",
                //path: "/",
                //content_type_image: "",
                children: []
              },
              {
                content_type_id: 15,
                parent_id: 7,
                content_type_name: "Methods",
                //path: "/",
                //content_type_image: "",
                children: []
              },
            ]
          }
        ]
      },
      {
        content_type_id: 4,
        parent_id: 1,
        content_type_name: "Promo",
        //path: "/",
        //content_type_image: "",
        children: []
      },
      {
        content_type_id: 5,
        parent_id: 1,
        content_type_name: "Site",
        //path: "/",
        //content_type_image: "",
        children: []
      }
    ]
  };*/