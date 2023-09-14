import { selectorIsLoading } from "components/redux/contacts/selectors";
import { useSelector } from "react-redux";
import css from "./Loader.module.css"

import logo from "./logo512.png"
const Loader = ({ children }) => {
  const isLoading = useSelector(selectorIsLoading);

  return (
    <>
      {isLoading && (
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
