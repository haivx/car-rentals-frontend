
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom'
import { routes } from '../../../constants'
import { TopBar } from './TopBar'

export const PageLayout = ({ children, title }) => {
  const location = useLocation()
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Car rental</title>
        <link rel="canonical" href="http://car-rental.com" />
      </Helmet>
      {location.pathname !== routes.SIGNIN ? (
        <div>
          <TopBar />
          <div>
            <div>{children}</div>
          </div>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  )
}
