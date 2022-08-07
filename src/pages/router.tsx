import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthScreen from './Auth';

const RootRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate
            to={'auth/login'}
            replace
          />
        }
      />
      <Route path="auth">
        <Route
          path=""
          element={
            <Navigate
              to={'login'}
              replace
            />
          }
        />
        <Route
          path=":type"
          element={<AuthScreen />}
        />
      </Route>
    </Routes>
  );
};

export default RootRouter;
