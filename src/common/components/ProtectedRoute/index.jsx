import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const ProtectedRoute = ({ path, component: Component, exact, isPrivate, accessRole, ...rest }) => {
  const auth = useSelector((state) => state.userStatus.auth, shallowEqual);
  const role = useSelector((state) => state.userStatus?.userInfo?.user?.role, shallowEqual);
  return (
    <Route
      render={(props) => {
        if (!isPrivate) return <Component {...props} />;
        if (!auth) return <Redirect to="/login" />;
        if (!accessRole.includes(role)) return <Redirect to="/" />;
        return <Component {...props} />;
      }}
      {...rest}
    />
  );
};

export default memo(ProtectedRoute);
