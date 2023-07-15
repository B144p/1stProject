import { RouteObject, To } from "react-router-dom";

export interface RoutesTypes {
  state: string;
  label: string;
  // icon: any,
  // levels: Array<number>,
  // breadcrumb?: boolean,
  path?: To;
  // isMenu?: boolean,
  component?: JSX.Element;
  children?: RoutesTypes[];
  // tool?: ToolTypes
}

// Custom Routes Type
export type CustomRouteObjectTypes = RouteObject & {
  // tool?: ToolTypes
  // levels?: number[]
  // type?: RouteGroupTypes
};
