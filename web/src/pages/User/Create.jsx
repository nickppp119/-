import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useAuthContext } from '../../context/AuthContext';
import { H1 } from '../../components/Typography';
import userAPI from '../../api/user';
import roleAPI from '../../api/role';


const Create = () => {
  const { userState } = useAuthContext();

  const [role, setRole] = useState('');
  const [roleList, setRoleList] = useState([]);

  const create = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password = data.get('password');

    if (username && password && role) {
      const level = (role === '教師' || role === '看護') ? 1 : 2;

      userAPI.create(username, password, level, userState.value.token);
    }
  }

  useEffect(() => {
    roleAPI.search(setRoleList);
  }, []);

  return (
    <Container fixed sx={{ width: '100%', height: '100%' }}>
      <Box component="form" onSubmit={create} noValidate sx={{
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
          <H1>創建使用者</H1>
          <TextField id="username" name="username" label="帳號" variant="outlined" />
          <TextField id="password" name="password" label="密碼" variant="outlined" />
          <FormControl fullWidth>
            <InputLabel>身份別</InputLabel>
            <Select
              value={role}
              label="身份別"
              onChange={(event) => setRole(event.target.value)}
            >
              {roleList.map((item, index) => (
                <MenuItem key={`role-${index}`} value={item.username}>
                  {item.username}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button type="submit" variant="outlined" size="large">送出</Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default Create;