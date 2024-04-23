import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';


const UserHome = () => {
  const navigate = useNavigate();

  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" size="large" onClick={() => navigate('/user/create')}>創建使用者</Button>
      <Button variant="outlined" size="large" onClick={() => navigate('/user/remove')}>刪除使用者</Button>
      <Button variant="outlined" size="large" onClick={() => navigate('/user/update')}>編輯使用者</Button>
    </Stack>
  );
};

export default UserHome;