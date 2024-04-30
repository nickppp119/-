import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useAuthContext } from '../../context/AuthContext';
import { H1 } from '../../components/Typography';
import userAPI from '../../api/user';
import roleAPI from '../../api/role';


const Update = () => {
  const { userState } = useAuthContext();

  const [username, setUsername] = useState((userState.value.role < 2) ? userState.value.username : '');
  const [userList, setUserList] = useState([]);
  const [role, setRole] = useState((userState.value.role < 2) ? '教師' : '');
  const [roleList, setRoleList] = useState([]);

  const update = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const password = data.get('password');

    if (username && password && role) {
      const level = (role === '教師' || role === '看護') ? 1 : 2;

      userAPI.update(username, password, level, userState.value.token);
    }
  }

  useEffect(() => {
    userAPI.search(setUserList, userState.value.username, userState.value.token);
    roleAPI.search(setRoleList);
  }, [userState.value.token, userState.value.username]);

  return (
    <Container fixed sx={{ width: '100%', height: '100%' }}>
      <Box component="form" onSubmit={update} noValidate sx={{
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
          <H1>編輯使用者</H1>
          {(userState.value.role < 2) ? (
            <TextField label="帳號" variant="outlined" value={username} disabled />
          ) : (
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
          )}
          <TextField id="password" name="password" label="密碼" variant="outlined" />
          {(userState.value.role < 2) ? (
            <></>
          ) : (
            <FormControl fullWidth>
              <InputLabel>身份別</InputLabel>
              <Select
                value={role}
                label="身份別"
                onChange={(event) => setRole(event.target.value)}
              >
                {(roleList.length === 0) ? (
                  <MenuItem key={`role-0`} value={null}>
                    None
                  </MenuItem>
                ) : (
                  roleList.map((item, index) => (
                    <MenuItem key={`role-${index}`} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))
                )}
              </Select>
            </FormControl>
          )}
          <Button type="submit" variant="outlined" size="large">送出</Button>
        </Stack>
      </Box>
    </Container>
  );
}


export default Update;