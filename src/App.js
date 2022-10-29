import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { routes } from './constants';
import { HomePage, ProductPage, UsersPage, SignInPage, SignUpPage } from './containers';
import { PublicRouter, PrivateRouter } from './AuthRouters';

const Router = () => {
  return (
    <Routes>
      {/* Public router */}
      <Route
        path={routes.HOMEPAGE}
        element={
          <PublicRouter title="Home Page">
            <HomePage />
          </PublicRouter>
        }
      />
      <Route
        path={routes.SIGNIN}
        element={
          <PublicRouter title="Sign In">
            <SignInPage />
          </PublicRouter>
        }
      />
      <Route
        path={routes.SIGNUP}
        element={
          <PublicRouter title="Sign Up">
            <SignUpPage />
          </PublicRouter>
        }
      />
      <Route
        path={routes.USERS}
        element={
          <PublicRouter title="Users Page">
            <UsersPage />
          </PublicRouter>
        }
      />
      <Route
        path={routes.PRODUCT}
        element={
          <PrivateRouter title="Products Page">
            <ProductPage />
          </PrivateRouter>
        }
      />
      <Route path="*" element={<Navigate to={routes.NOTFOUND} replace />} />
    </Routes>
  );
};

export const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

export default App;
