import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PageLayout } from './common/components';
// import { LAYOUT } from './constants'
import { useAuth } from './common/hooks';

export const PublicRouter = ({ children, title }) => {
  const auth = useAuth();
  if (auth.user) return <Navigate to="/admin" replace={true} />;

  return <PageLayout title={title}>{children}</PageLayout>;
};

export const PrivateRouter = ({ title, children, layout = 'PAGE_LAYOUT', permission, action = 'ACTIONS.VIEW' }) => {
  const auth = useAuth();
  const location = useLocation();
  if (!auth.user) return <Navigate to="/sign-in" state={{ from: location }} />;

  let RenderLayout = <div />;
  switch (layout) {
    case 'PAGE_LAYOUT':
      RenderLayout = <PageLayout title={title}>{children}</PageLayout>;
      break;
    default:
      RenderLayout = <PageLayout title={title}>{children}</PageLayout>;
      break;
  }

  return RenderLayout;
};
