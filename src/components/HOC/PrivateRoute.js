import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  var login = localStorage.getItem("token");
  const { user } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user?.user?.uid) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/company/signin",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default PrivateRoute