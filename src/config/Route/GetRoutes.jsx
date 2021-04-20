import ProtectedRoute from "@components/ProtectedRoute";
import React, { memo, Suspense } from "react";

import { Switch } from "react-router-dom";

import Routes from "./RouteConfig";

function GetRoutes() {
  return (
    <Suspense
      fallback={
        <div id="loader-wrapper">
          <div id="loader"></div>
        </div>
      }
    >
      <Switch>
        {Routes.map((route, indx) => {
          const {
            path,
            component,
            isPrivate = false,
            role = [],
            exact,
          } = route;
          // return <Route key={indx} path={path} exact={true} component={component} />;
          return (
            <ProtectedRoute
              key={path}
              path={path}
              exact={exact}
              component={component}
              isPrivate={isPrivate}
              accessRole={role}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
}

export default memo(GetRoutes);
