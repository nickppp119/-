import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';


const EventHome = () => {
  const navigate = useNavigate();

  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" size="large" onClick={() => navigate('/event/create')}>新增事件</Button>
      <Button variant="outlined" size="large" onClick={() => navigate('/event/update')}>編輯事件</Button>
      <Button variant="outlined" size="large" onClick={() => navigate('/event/remove')}>更新事件</Button>
    </Stack>
  );
};

export default EventHome;