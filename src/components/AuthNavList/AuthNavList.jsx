import { NavLink } from 'react-router-dom';
import css from './AuthNavList.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from 'components/redux/auth/authOperation';


const AuthNavList = () => {
  const dispatch = useDispatch();
  return (
    <nav>
   
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>

      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
  
 
      <NavLink className={css.link}
        onClick={() => dispatch(logOut())}
      >
          
      Logout
    </NavLink> 
 
</nav>
    
  )


  
};

export default AuthNavList;