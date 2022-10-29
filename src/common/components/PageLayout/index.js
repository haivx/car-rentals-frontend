import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { routes } from 'constants';
import { SideBar } from './SideBar';
import { TopBar } from './TopBar';

export const PageLayout = ({ children, title = 'Car rental' }) => {
  const location = useLocation();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href="http://xuanhai.beauty" />
      </Helmet>
      {![routes.SIGNIN, routes.SIGNUP, routes.HOMEPAGE].includes(location.pathname) ? (
        <div>
          <SideBar />
          <div className="main-content">
            <div className="position-relative">
              <TopBar />
            </div>
            <div>
              <div className="mx-20 my-20">{children}</div>
            </div>
          </div>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};
