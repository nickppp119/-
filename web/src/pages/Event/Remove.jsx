import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useAuthContext } from '../../context/AuthContext';
import eventAPI from '../../api/event';


const Remove = () => {
  const { userState } = useAuthContext();

  const remove = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const id = data.get('id');

    if (id) {
      eventAPI.remove(id, userState.value.token);
    }
  }

  return (
    <Box component="form" onSubmit={remove} noValidate>
      <Stack spacing={2}>
        <TextField id="id" name="id" label="事件編號" variant="outlined" />
        <Button type="submit" variant="outlined" size="large">刪除事件</Button>
      </Stack>
    </Box>
  );
}

export default Remove;