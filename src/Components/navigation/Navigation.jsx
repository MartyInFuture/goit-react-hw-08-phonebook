import { NavLink } from 'react-router-dom';
import { NavigationStyled } from './NavigationStyled';
import Auth from './auth/Auth';
import User from './user/User';

const Navigation = () => {
  return (
    <NavigationStyled>
      <NavLink activeClassName="activeLink" className="link" to="/" exact>
        Contacts
      </NavLink>
      <div>
        <Auth />
        <User />
      </div>
    </NavigationStyled>
  );
};

export default Navigation;
