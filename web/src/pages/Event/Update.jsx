import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useAuthContext } from '../../context/AuthContext';
import { H1 } from '../../components/Typography';
import eventAPI from '../../api/event';


const Update = () => {
  const { userState } = useAuthContext();

  const update = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const id = data.get('id');
    const title = data.get('title');
    const content = data.get('content');

    if (title && content && id) {
      eventAPI.update(id, title, content, userState.value.token);
    }
  }

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
          <H1>更新事件</H1>
          <TextField id="id" name="id" label="事件編號" variant="outlined" />
          <TextField id="title" name="title" label="標題" variant="outlined" />
          <TextField id="content" name="content" label="內容" variant="outlined" />
          <Button type="submit" variant="outlined" size="large">送出</Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default Update;