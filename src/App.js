import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { routes } from "./constants";
import { HomePage } from "./containers";
import { PublicRouter } from "./AuthRouters";


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
      {/* <Route
        path={routes.SIGNIN}
        element={
          <PublicRouter title="Sign in">
            <LoginPage />
          </PublicRouter>
        }
      /> */}
      <Route path="*" element={<Navigate to={routes.NOTFOUND} replace />} />
    </Routes>
  )
}


export const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)

export default App;
