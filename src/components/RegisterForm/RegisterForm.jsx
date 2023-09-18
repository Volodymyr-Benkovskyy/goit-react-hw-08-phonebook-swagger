import css from './RegisterForm.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { registerOperation } from 'components/redux/auth/authOperation';


const RegisterForm = () => {
  const dispatch = useDispatch();
 
  const [showPassword, setShowPassword] = React.useState(false);

  const [form, setForm] = useState({
    name:"",
     email: "",
     password: "",
 });
   
     const handleChange = (event) => {
     const { name, value } = event.target;
     setForm((prev) => ({ ...prev, [name]: value }))
   };

const handleSubmit = (event) => {
  event.preventDefault();

  dispatch(registerOperation(form));
    
    setForm({
      name: "",
      email: "",
      password: "",
    });
};
   
  
  // Функція для відображення/приховування пароля
  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = ( event ) => {
    event.preventDefault();
  };

 
  return (
    <form className={css.container} action="" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Name"
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter your name..."
        required
        className={css.textfield}
      />
      <TextField
        fullWidth
        label="Email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter your email..."
        required
         className={css.textfield}
      />
      <FormControl fullWidth required variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
           className={css.textfield}
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
               
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                 
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password..."
        />
      </FormControl>
      <Button
         className={css.textfield}
        variant="outlined" type="submit">
        Register
      </Button> 
    </form>
  );
}
export default RegisterForm;


