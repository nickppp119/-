import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useAuthContext } from '../../context/AuthContext';
import eventAPI from '../../api/event';


const Create = () => {
  const { userState } = useAuthContext();

  const create = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const title = data.get('title');
    const content = data.get('content');

    if (title && content) {
      eventAPI.create(title, content, userState.value.token);
    }
  }

  return (
    <Box component="form" onSubmit={create} noValidate>
      <Stack spacing={2}>
        <TextField id="title" name="title" label="標題" variant="outlined" />
        <TextField id="content" name="content" label="內容" variant="outlined" />
        <Button type="submit" variant="outlined" size="large">建立事件</Button>
      </Stack>
    </Box>
  );
}

export default Create;