import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuthContext } from '../../context/AuthContext';
import PageMenu from '../Layouts/PageMenu';


const UserGuard = ({ children }) => {
  const { userState } = useAuthContext();

  if (userState.value.role) {
    return (
      <PageMenu>
        {children}
      </PageMenu>
    );
  } else {
    toast.error('請先登入帳號!');

    return (
      <Navigate to="/login" />
    );
  }
};

export default UserGuard;