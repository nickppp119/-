import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useAuthContext } from '../context/AuthContext';
import userAPI from '../api/user';


const Login = () => {
  const navigate = useNavigate();
  const { userState } = useAuthContext();

  const login = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password = data.get('password');

    if (username && password) {
      userAPI.login(username, password, userState, navigate);
    }
  }

  return (
    <Box component="form" onSubmit={login} noValidate>
      <Stack spacing={2}>
        <TextField id="username" name="username" label="帳號(職稱)" variant="outlined" />
        <TextField id="password" name="password" label="密碼" variant="outlined" />
        <Button type='submit' variant="Login">登入</Button>
      </Stack>
    </Box>
  );
}


export default Login;