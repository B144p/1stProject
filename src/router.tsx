import { lazy } from "react";
import { Loader } from "./app/Loader";
import {
  CustomRouteObjectTypes,
  RoutesTypes,
} from "./slices/routers/routers.model";
const BaseLayout = Loader(lazy(() => import("./layouts/BaseLayout")));
const Dashboard = Loader(lazy(() => import("./views/Dashboard")));

export const developmentRoutes: RoutesTypes[] = [
  //   {
  //     state: "development",
  //     label: "Development",
  //     icon: BlockOutlined,
  //     levels: [],
  //     isMenu: true,
  //     breadcrumb: false,
  //     children: [
  //       {
  //         state: "development_choice",
  //         label: "Choice",
  //         icon: UnorderedListOutlined,
  //         levels: [],
  //         path: "/development/choice",
  //         component: <DevelopmentChoice />,
  //         isMenu: true,
  //         breadcrumb: false,
  //       },
  //       {
  //         state: "development_loader",
  //         label: "Loader",
  //         icon: LoadingOutlined,
  //         levels: [],
  //         path: "/development/loader",
  //         component: <DevelopmentLoader />,
  //         isMenu: true,
  //         breadcrumb: false,
  //       },
  //     ],
  //   },
  {
    state: "location-device-viewer",
    label: "Device Viewer",
    path: "/",
    component: <Dashboard />,
  },
];

const GenerateTreeToChildren = (treeData: RoutesTypes[]) => {
  if (treeData?.length > 0) {
    let datas: Array<object> = [];
    treeData.forEach((tData: RoutesTypes) => {
      if (tData.children && tData.children?.length > 0) {
        let _datas = GenerateTreeToChildren(tData.children) || [];
        datas = [...datas, ..._datas];
      }

      if (tData.path && tData?.component) {
        datas.push({
          path: tData.path,
          element: tData?.component,
          // levels: tData?.levels,
          // tool: tData?.tool,
        });
      }
    });

    return datas;
  }
};

const publicRouters: CustomRouteObjectTypes[] = [
  // {
  //   path: '/',
  //   element: <BaseLayout />,
  //   children: [
  //     { path: '404', element: <Status404 /> },
  //     { path: '500', element: <Status500 /> },
  //     { path: '*', element: <Status404 /> }
  //   ]
  // }
];

const developmentRouters: CustomRouteObjectTypes = {
  path: "/",
  element: <BaseLayout />,
  children: GenerateTreeToChildren(developmentRoutes),
};

const GenerateRouterScope = () => {
  var response: CustomRouteObjectTypes[] = [...publicRouters];
  var routers: CustomRouteObjectTypes = {};

  routers = developmentRouters;
  response = [routers, ...response];
  // response = verifyRouters(response)

  return response;
};

export default GenerateRouterScope;
