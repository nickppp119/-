import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useAuthContext } from '../../context/AuthContext';
import { H1 } from '../../components/Typography';
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
          <H1>建立事件</H1>
          <TextField id="title" name="title" label="標題" variant="outlined" />
          <TextField id="content" name="content" label="內容" variant="outlined" />
          <Button type="submit" variant="outlined" size="large">送出</Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default Create;