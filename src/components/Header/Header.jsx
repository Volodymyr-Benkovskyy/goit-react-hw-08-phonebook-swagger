 

import Navigation from "components/Navigation/Navigation";
import css from "./header.module.css"
import AuthNavList from "components/AuthNavList/AuthNavList";

const Header = () => {

  return (
    <header className={css.header}>
       <Navigation />  
      <AuthNavList/>
    </header> 
  )
};

export default Header;