import { ComponentType } from "react";

export interface IRoute {
  path: string;
  component: ComponentType<any>;
  isPrivate?: boolean;
  role?: Array<string>;
  exact?: boolean;
  children?: IRoute[];
  match?: boolean;
}
