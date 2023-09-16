import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { selectisIsAuth } from 'components/redux/auth/authselector';
import { useSelector } from 'react-redux';
import clsx from "clsx";

const getActiveStyle = ({ isActive }) => clsx(css.link, isActive && css.active);

export const Navigation = () => {
const isAuth = useSelector(selectisIsAuth);
  return (
    <nav> 
      
       <NavLink className={getActiveStyle} to="/">
        Home
      </NavLink> 
      
        {isAuth && <NavLink className={getActiveStyle} to="/contacts">
          Contacts Book
        </NavLink>
     }
    </nav>
  );
};

export default Navigation;