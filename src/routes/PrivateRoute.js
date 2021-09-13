import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, redirectTo = '/login', ...props }) => {
  const isLogedIn = useSelector((state) => state.auth.isLogIn);
  return (
    <Route {...props}>
      {isLogedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};
export default PrivateRoute;
