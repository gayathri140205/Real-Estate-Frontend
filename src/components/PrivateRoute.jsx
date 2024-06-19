// components/PrivateRoute.js

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ element, ...rest }) => {
  const { currentUser } = useSelector((state) => state.user); // Replace with your actual selector

  return (
    <Route
      {...rest}
      element={currentUser ? element : <Navigate to="/sign-in" replace />}
    />
  );
};

export default PrivateRoute;
