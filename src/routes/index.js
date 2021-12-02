// import { activityRoutes } from "@modules/activity/routes";
import authRoute from "@modules/auth/routes";
import chatRoutes from "@modules/chat/routes";
// import feedbackRoute from "@modules/feedback/routes";
// import profileRoute from "@modules/profile/route";
// import projectRoutes from "@modules/project/routes";
// import tasktRoutes from "@modules/task/routes";
// import othersRoutes from "@modules/upgrade/routes";
// import friendRoute from "@modules/firebase/routes";

const routes = [
  ...authRoute,
  ...chatRoutes,
  // ...projectRoutes,
  // ...tasktRoutes,
  // ...feedbackRoute,
  // ...profileRoute,
  // ...activityRoutes,
  // ...othersRoutes,
  // ...friendRoute,
];
export default routes;
