import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useAuthContext } from '../../context/AuthContext';
import userAPI from '../../api/user';


const Remove = () => {
  const { userState } = useAuthContext();

  const remove = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const username = data.get("username");

    if (username) {
      userAPI.remove(username, userState.value.token);
    }
  }

  return (
    <Box component="form" onSubmit={remove} noValidate>
      <Stack spacing={2}>
        <TextField id="username" name="username" label="帳號" variant="outlined" />
        <Button type="submit" variant="outlined" size="large">刪除使用者</Button>
      </Stack>
    </Box>
  );
}

export default Remove;