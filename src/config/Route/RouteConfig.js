import { lazy } from "react";

const Home = lazy(() => import("@pages/Home"));

const Routes = [
  { path: "/", exact: true, component: Home },
  // { path: "/login", exact: true, component: Login },
  // { path: "/signup", exact: true, component: SignUp },
  // {
  //   path: "/agency-dashboard",
  //   exact: true,
  //   component: AgencyDashBoard,
  //   isPrivate: true,
  //   role: [1, 2, 3, 4],
  // },
  // {
  //   path: "/getting-report",
  //   exact: true,
  //   component: GettingReport,
  //   isPrivate: true,
  //   role: [0, 1, 2, 3, 4],
  // },
  // {
  //   path: "/agency-policy",
  //   exact: true,
  //   component: AgencyPolicy,
  //   role: [0, 1, 2, 3, 4],
  // },
  // { path: "/blogs", exact: true, component: Blogs },
  // { path: "/blog/:slug", exact: true, component: BlogDetail },
  // {
  //   path: "/user",
  //   exact: false,
  //   component: UserManagement,
  //   isPrivate: true,
  //   role: [0, 1, 2, 3, 4],
  // },
];

export default Routes;
