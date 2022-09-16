import React from 'react';
import { CircularProgress } from '@mui/material';

import {
    Route, Redirect
  } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {user, isLoading, isAdmin} = useAuth();

    if(isLoading) {
        return <CircularProgress />
    }

    return (
        <Route
      {...rest}
      render={({ location }) =>
        user?.email &&  isAdmin? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default AdminRoute;