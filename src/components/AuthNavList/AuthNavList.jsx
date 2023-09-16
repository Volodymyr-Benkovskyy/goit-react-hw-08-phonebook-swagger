import { NavLink } from 'react-router-dom';
import css from './AuthNavList.module.css';
import clsx from "clsx";

 const getActiveStyle = ({ isActive }) => clsx(css.link, isActive && css.active);
const AuthNavList = () => {
 
  return (
    <nav>
   
      <NavLink className={getActiveStyle} to="/register">
        Register
      </NavLink>

      <NavLink className={getActiveStyle} to="/login">
        Log In
      </NavLink>
  

</nav>
    
  )


  
};

export default AuthNavList;