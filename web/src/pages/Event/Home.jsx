import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const EventHome = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={() => navigate('/event/create')}>新增事件</Button>
      <Button onClick={() => navigate('/event/delete')}>刪除事件</Button>
      <Button onClick={() => navigate('/event/update')}>更新事件</Button>
    </>
  );
};

export default EventHome;