import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';


const EventHome = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%'
    }}>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" size="large" onClick={() => navigate('/event/create')}>新增事件</Button>
        <Button variant="outlined" size="large" onClick={() => navigate('/event/update')}>編輯事件</Button>
        <Button variant="outlined" size="large" onClick={() => navigate('/event/remove')}>更新事件</Button>
      </Stack>
    </Box>
  );
};

export default EventHome;