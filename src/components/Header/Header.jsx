 

import Navigation from "components/Navigation/Navigation";
import css from "./header.module.css"
import AuthNavList from "components/AuthNavList/AuthNavList";
import  UserMenu  from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectisIsAuth } from "components/redux/auth/authselector";
import Loader from "components/Loader/Loader";


const Header = () => {
  const isAuth = useSelector(selectisIsAuth);
  const isLoggedIn = useSelector(selectIsLoggedIn);
 
  return (
    <header className={css.header}>
       
        <Navigation /> 
        <Loader loading={isLoggedIn }>
        
        {isAuth ? (<UserMenu  />) :
     ( <AuthNavList />)}
      </Loader>
      
    </header> 
  )
};

export default Header;
