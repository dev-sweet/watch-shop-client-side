import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';
const PrivateRoute = ({ children, ...rest }) => {
  const { user, isAdmin, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div style={{ paddingTop: '300px', textAlign: 'center' }}>...Loading</div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && isAdmin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
