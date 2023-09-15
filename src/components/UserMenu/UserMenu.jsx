import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectName } from 'components/redux/auth/authselector';
import { logOut } from 'components/redux/auth/authOperation';
import { NavLink } from 'react-router-dom';
//import { useEffect } from 'react';

const UserMenu = ({name}) => {
  const dispatch = useDispatch();
 const userName = useSelector(selectName)
  
  

  return (
    <div className={css.wrapper}>
          <p className={css.user}>Welcome {userName.name}</p>
      <NavLink
        className={css.username}
         onClick={() => dispatch(logOut())}>
        Logout
       </NavLink>
   
    </div>
  );
};

export default UserMenu;

/* export const selectIsLoggedIn = state => state.auth.isLoggedIn;

  export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;
 */


/* export const selectLoading = state => state.tasks.loading;

export const selectFilter = state => state.tasks.filter;

export const selectAllTasks = state => state.tasks.items;
 */
