import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

const PublicRoute = ({ children, restricted = false, ...props }) => {
  const isLogedIn = useSelector((state) => state.auth.isLogIn);
  const shouldRedirect = isLogedIn && restricted;
  return (
    <Route {...props}>{shouldRedirect ? <Redirect to="/" /> : children}</Route>
  );
};

export default PublicRoute;
