import * as React from 'react';
import toast from 'react-hot-toast';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useAuthContext } from '../../context/AuthContext';
import userAPI from '../../api/user';


const Update = () => {
  const { userState } = useAuthContext();

  const setting = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password1 = data.get('password1');
    const password2 = data.get('password2');
    const level = data.get('level');

    if (username && password1 && level && password2) {
      if (password1 === password2) {
        userAPI.update(username, password1, level, userState.value.token);
      } else {
        toast.error('密碼不相同');
      }
    }
  }

  return (
    <Box component="form" onSubmit={setting} noValidate>
      <Stack spacing={2}>
        <TextField id="username" name="username" label="帳號(職稱)" variant="outlined" />
        <TextField id="password1" name="password1" label="密碼" variant="outlined" />
        <TextField id="password2" name="password2" label="驗證密碼" variant="outlined" />
        <TextField id="level" name="level" label="職稱" variant="outlined" />
        <Button type='submit'>送出設定</Button>
      </Stack>
    </Box>
  );
}

export default Update;