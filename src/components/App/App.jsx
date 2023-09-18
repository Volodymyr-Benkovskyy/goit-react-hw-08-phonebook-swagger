
import {  Route, Routes , Navigate} from "react-router-dom";

import MainLayout from "components/MainLayout/MainLayout";
import HomePage from "components/pages/HomePage";
import LoginPage from "components/pages/LoginPage";
import RegisterPage from "components/pages/RegisterPage";
import ContactsBookPage from "components/pages/ContactsBookPage";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { refreshUserOperation } from "components/redux/auth/authOperation";

import PrivateRoute from "components/PrivateRoute/PrivetRoute";
import PublicRoute from "components/PublicRoute/PublicRoute";



const App = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(refreshUserOperation())
  },[dispatch])

  return (
    <>
   
 <Routes>
        <Route path="/" element={<MainLayout />}>
          
          <Route index  element={< HomePage/>} />
          
          <Route path="/contacts" element={<PrivateRoute component={<ContactsBookPage />} />} />
          
          <Route path="/register" element={<PublicRoute component={<RegisterPage />} /> } />
          
           <Route path="/login" element={<PublicRoute component={< LoginPage/>} /> } />
     </Route>
  <Route path="*" element={<Navigate to="/" />} /> 
</Routes>
    </>
  );
};

export default App;
  

      

       
        


     