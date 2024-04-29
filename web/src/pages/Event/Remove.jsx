import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useAuthContext } from '../../context/AuthContext';
import { H1 } from '../../components/Typography';
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
          <H1>刪除事件</H1>
          <TextField id="id" name="id" label="事件編號" variant="outlined" />
          <Button type="submit" variant="outlined" size="large">送出</Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default Remove;