import { NavLink } from 'react-router-dom';

const Auth = () => {
  return (
    <>
      <NavLink activeClassName="activeLink" className="link" to="/login" exact>
        LogIn
      </NavLink>
      <NavLink
        activeClassName="activeLink"
        className="link"
        to="/register"
        exact
      >
        Register
      </NavLink>
    </>
  );
};

export default Auth;
