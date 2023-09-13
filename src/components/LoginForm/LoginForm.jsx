import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import { logInOperation } from "components/redux/auth/authOperation";
import { useState } from "react";


const LoginForm = () => {
  const dispatch = useDispatch();
 const [form, setForm] = useState({
     email: "",
     password: "",
   });

   const handleChange = (event) => {
     const { name, value } = event.target;
     setForm((prev) => ({ ...prev, [name]: value }))
    
   };

   const handleSubmit = (event) => {
     event.preventDefault();
     console.log(form);
     dispatch(logInOperation(form))
    
    };

     return (
    <form className={css.form} onSubmit={handleSubmit} >
      <label className={css.label}>
        Email
           <input
             type="email"
             name="email"
             value={form.email}
             onChange={handleChange}
            required
           />
      </label>
      <label className={css.label}>
        Password
           <input
             type="password"
             name="password"
               value={form.password}
             onChange={handleChange}
            required
           />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
    

export default LoginForm;