import ProtectedRoute from "@components/ProtectedRoute";
import React, { memo, Suspense, lazy } from "react";

import { Route, Routes, useRoutes } from "react-router";

import { PacmanLoader } from "react-spinners";

import DecalreRoutes from "./index";
const NotFound = lazy(() => import("@components/NotFound"));
function GetRoutes() {
  const routing = useRoutes(
    DecalreRoutes.map((route, indx) => {
      const {
        path,
        component: Component,
        isPrivate = false,
        role,
        exact,
        children,
        match,
      } = route;
      // return <Route key={indx} path={path} exact={true} component={component} />;
      return {
        element: (
          <ProtectedRoute
            key={path}
            path={path}
            exact={exact}
            // component={component}
            isPrivate={isPrivate}
            accessRole={role}
            match={match}
          >
            <Component />
          </ProtectedRoute>
        ),
        path: path,
        children: children || [],
      };
    })
  );
  return (
    <div className="h-full">
      <Suspense
        fallback={
          <div className="flex items-center justify-center max-w-lg min-h-full mx-auto">
            <PacmanLoader loading={true} size={60} />
          </div>
        }
      >
        {routing}
      </Suspense>
    </div>
  );
}

export default memo(GetRoutes);
