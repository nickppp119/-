import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useAuthContext } from '../../context/AuthContext';
import userAPI from '../../api/user';


const Remove = () => {
  const { userState } = useAuthContext();

  const [username, setUsername] = useState('');
  const [userList, setUserList] = useState([]);

  const remove = (event) => {
    event.preventDefault();

    if (username) {
      userAPI.remove(username, userState.value.token);
    }
  }

  useEffect(() => {
    userAPI.search(setUserList, userState.value.username, userState.value.token);
  }, []);

  return (
    <Box component="form" onSubmit={remove} noValidate>
      <Stack spacing={2}>
        <FormControl fullWidth>
          <InputLabel>帳號</InputLabel>
          <Select
            value={username}
            label="帳號"
            onChange={(event) => setUsername(event.target.value)}
          >
            {userList.map((item, index) => (
              <MenuItem key={`user-${index}`} value={item.username}>
                {item.username}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button type="submit" variant="outlined" size="large" fullWidth>刪除使用者</Button>
      </Stack>
    </Box>
  );
}

export default Remove;