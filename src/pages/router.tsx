import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import GlobalContainer from '../components/common/GlobalContainer';
import AuthScreen from './Auth/Auth';

const RootRouter = () => {
  return (
    <BrowserRouter>
      <GlobalContainer>
        <Routes>
          <Route path="/" element={<Navigate to={'auth/login'} replace />} />
          <Route path="auth">
            <Route path=":type" element={<AuthScreen />} />
          </Route>
        </Routes>
      </GlobalContainer>
    </BrowserRouter>
  );
};

export default RootRouter;
