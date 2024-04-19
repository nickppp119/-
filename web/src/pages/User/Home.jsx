import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const UserHome = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate('/user/create')}>新增使用者</Button>
      <Button onClick={() => navigate('/user/delete')}>刪除使用者</Button>
      <Button onClick={() => navigate('/user/update')}>更新使用者</Button>
    </>
  );
};

export default UserHome;