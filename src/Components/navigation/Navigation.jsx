import { NavLink } from 'react-router-dom';
import { NavigationStyled } from './NavigationStyled';
import Auth from './auth/Auth';
import User from './user/User';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLogedIn = useSelector((state) => state.auth.isLogIn);

  return (
    <NavigationStyled>
      <NavLink activeClassName="activeLink" className="link" to="/" exact>
        Contacts
      </NavLink>
      <div>{isLogedIn ? <User /> : <Auth />}</div>
    </NavigationStyled>
  );
};

export default Navigation;
