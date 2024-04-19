import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useAuthContext } from '../../context/AuthContext';
import eventAPI from '../../api/event';


const Delete = () => {
  const { userState } = useAuthContext();
  const remove = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const index = data.get('index');

    eventAPI.remove(index,userState.value.token);
  }

  return (
    <Box component="form" onSubmit={remove} noValidate>
      <Stack spacing={2}>
        <TextField id="index" name="index" label="事件編號" variant="outlined" />
        <Button type='submit'>送出設定</Button>
      </Stack>
    </Box>
  );
}

export default Delete;