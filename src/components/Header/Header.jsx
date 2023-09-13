 

import Navigation from "components/Navigation/Navigation";
import css from "./header.module.css"
import AuthNavList from "components/AuthNavList/AuthNavList";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectisIsAuth } from "components/redux/auth/authselector";


const Header = () => {
const isAuth = useSelector(selectisIsAuth)
  return (
    <header className={css.header}>

      <Navigation /> 
      
     {isAuth ? ( <UserMenu />) :
     ( <AuthNavList />)}
    </header> 
  )
};

export default Header;
