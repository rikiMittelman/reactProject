import { useState } from 'react'
import GlobalState from '../store/GlobalState';
import { observer } from "mobx-react";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

//login 
const Login = (observer(() => {
  //useStates
  const [showPassword, setShowPassword] = React.useState(false);
  const [name, setUserName] = useState('admin');
  const [password, setPasword] = useState('123456');

//functions

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const passwordChange = (e) => {

    setPasword(e.target.value);
  };

  const useNameChange = (e) => {

    setUserName(e.target.value);
  };
  const handeleLogin = (e) => {
  
    GlobalState.saveIsLogin(name, password);
    if (GlobalState.error) {
      setPasword('123456');
      setUserName('admin');
    }
    // GlobalState.setError(false);
  }
  //
  return (
    <>

      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          onChange={passwordChange}
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end" >
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}

                // onMouseDown={handleMouseDownPassword}
                edge="end"
                value={password}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      />

      <TextField
        id="outlined-multiline-flexible"
        label="Admin"
        multiline
        maxRows={4}
        onChange={useNameChange}
        value={name}
      />
      <br />
      <br />
      {/* {} */}
      {GlobalState.error?<Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">This is an error alert — check the password and the userName</Alert>
      </Stack>:<></>}
      <br />
      <br />
      <button onClick={handeleLogin}>login</button>
    </>
  )
}))

export default Login