//import { selectorIsLoading } from "components/redux/contacts/selectors";
//import { useSelector } from "react-redux";
import css from "./Loader.module.css"

import logo from "./logo512.png"
//import { selectIsLoggedIn } from "components/redux/auth/authselector";

const Loader = ({ children , loading}) => {
 
  
  return (
    <>
      {loading && (
        <div className={css.loader}
        >      
          <img src={logo} alt="logo" className={css.loaderimg}></img>
        </div>
      )}
      {children}
    </>
  );
};

export default Loader;
