import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useAuthContext } from '../../context/AuthContext';
import userAPI from '../../api/user';


const Create = () => {
  const { userState } = useAuthContext();

  const create = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password = data.get('password');
    const role = data.get('role');

    if (username && password && role) {
      userAPI.create(username, password, role, userState.value.token);
    }
  }

  return (
    <Box component="form" onSubmit={create} noValidate>
      <Stack spacing={2}>
        <TextField id="username" name="username" label="帳號" variant="outlined" />
        <TextField id="password" name="password" label="密碼" variant="outlined" />
        <TextField id="role" name="role" label="職稱" variant="outlined" />
        <Button type="submit" variant="outlined" size="large">創建使用者</Button>
      </Stack>
    </Box>
  );
}

export default Create;