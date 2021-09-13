import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const User = () => {
  const userName = useSelector((state) => state.auth.userData.name);
  console.log(userName);
  return (
    <>
      <NavLink
        activeClassName="activeLink"
        className="link"
        to="/user-info"
        exact
      >
        Hello, {userName}!
      </NavLink>
      <NavLink activeClassName="activeLink" className="link" to="/logout" exact>
        LogOut
      </NavLink>
    </>
  );
};

export default User;
