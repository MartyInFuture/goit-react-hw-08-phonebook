import { NavLink } from 'react-router-dom';

const User = () => {
  return (
    <>
      <NavLink
        activeClassName="activeLink"
        className="link"
        to="/user-info"
        exact
      >
        User info
      </NavLink>
      <NavLink activeClassName="activeLink" className="link" to="/logout" exact>
        LogOut
      </NavLink>
    </>
  );
};

export default User;
