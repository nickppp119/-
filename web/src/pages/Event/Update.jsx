import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useAuthContext } from '../../context/AuthContext';
import eventAPI from '../../api/event';


const Update = () => {
  const { userState } = useAuthContext();

  const setting = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const index = data.get('index');
    const title = data.get('title');
    const content = data.get('content');
    const level = data.get('level');

    if (title && content && level && index) {
      eventAPI.update(index, title, content, level, userState.value.token);
    }
  }

  return (
    <Box component="form" onSubmit={setting} noValidate>
      <Stack spacing={2}>
        <TextField id="index" name="index" label="事件編號" variant="outlined" />
        <TextField id="title" name="title" label="標題" variant="outlined" />
        <TextField id="content" name="content" label="內容" variant="outlined" />
        <TextField id="level" name="level" label="職稱" variant="outlined" />
        <Button type='submit'>送出設定</Button>
      </Stack>
    </Box>
  );
}

export default Update;