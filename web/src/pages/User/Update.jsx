import toast from 'react-hot-toast';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useAuthContext } from '../../context/AuthContext';
import userAPI from '../../api/user';


const Update = () => {
  const { userState } = useAuthContext();

  const update = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password1 = data.get('password1');
    const password2 = data.get('password2');
    const role = data.get('role');

    if (username && password1 && role && password2) {
      if (password1 === password2) {
        userAPI.update(username, password1, role, userState.value.token);
      } else {
        toast.error('密碼不相同');
      }
    }
  }

  return (
    <Box component="form" onSubmit={update} noValidate>
      <Stack spacing={2}>
        <TextField id="username" name="username" label="帳號" variant="outlined" />
        <TextField id="password1" name="password1" label="密碼" variant="outlined" />
        <TextField id="password2" name="password2" label="驗證密碼" variant="outlined" />
        <TextField id="role" name="role" label="職稱" variant="outlined" />
        <Button type="submit" variant="outlined" size="large">編輯使用者</Button>
      </Stack>
    </Box>
  );
}

export default Update;