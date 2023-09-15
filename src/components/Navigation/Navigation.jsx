import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { selectisIsAuth } from 'components/redux/auth/authselector';
import { useSelector } from 'react-redux';


export const Navigation = () => {
const isAuth = useSelector(selectisIsAuth);
  return (
    <nav> 
      
       <NavLink className={css.link} to="/">
        Home
      </NavLink> 
      
        {isAuth && <NavLink className={css.link} to="/contacts">
          Contacts Book
        </NavLink>
     }
    </nav>
  );
};

export default Navigation;