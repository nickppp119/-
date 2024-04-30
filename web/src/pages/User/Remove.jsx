import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useAuthContext } from '../../context/AuthContext';
import { H1 } from '../../components/Typography';
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
  }, [userState.value.token, userState.value.username]);

  return (
    <Container fixed sx={{ width: '100%', height: '100%' }}>
      <Box component="form" onSubmit={remove} noValidate sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
      }}>
        <Stack spacing={2} sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <H1>刪除使用者</H1>
          <FormControl fullWidth>
            <InputLabel>帳號</InputLabel>
            <Select
              value={username}
              label="帳號"
              onChange={(event) => setUsername(event.target.value)}
            >
              {(userList.length === 0) ? (
                <MenuItem key={`user-0`} value={null}>
                  None
                </MenuItem>
              ) : (
                userList.map((item, index) => (
                  <MenuItem key={`user-${index}`} value={item.username}>
                    {item.username}
                  </MenuItem>
                ))
              )}
            </Select>
          </FormControl>
          <Button type="submit" variant="outlined" size="large">送出</Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default Remove;