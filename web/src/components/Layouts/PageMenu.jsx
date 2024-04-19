import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaX, FaHouseChimney, FaUserGear, FaFolder, FaRightFromBracket } from 'react-icons/fa6';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Stack from '@mui/material/Stack';
import { useAuthContext } from '../../context/AuthContext';


const PageMenu = ({ children }) => {
  const navigate = useNavigate();
  const { handleLogout } = useAuthContext();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const pages = [{
    icon: <FaHouseChimney />,
    name: '首頁',
    path: '/'
  }, {
    icon: <FaUserGear />,
    name: '使用者管理',
    path: '/user'
  }, {
    icon: <FaFolder />,
    name: '事件管理',
    path: '/event'
  }, {
    icon: <FaRightFromBracket />,
    name: '登出',
    path: '/login'
  }].reverse();

  return (
    <Box sx={{
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transform: 'translateZ(0px)',
      flexGrow: 1
    }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        p={4}
      >
        <SpeedDial
          ariaLabel="PageMenu"
          sx={{ position: 'absolute', bottom: 16, right: 16, }}
          icon={
            <SpeedDialIcon
              icon={<FaBars style={{  fontSize: '24px' }} />}
              openIcon={<FaX style={{  fontSize: '24px' }} />}
            />
          }
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {pages.map((page) => (
            <SpeedDialAction
              key={page.name}
              icon={page.icon}
              tooltipTitle={page.name}
              sx={{ fontSize: '28px' }}
              onClick={() => {
                if (page === '登出') {
                  handleLogout();
                  navigate(page.path);
                  handleClose();
                } else {
                  navigate(page.path);
                  handleClose();
                }
              }}
            />
          ))}
        </SpeedDial>
        <Box>
          {children}
        </Box>
      </Stack>
    </Box>
  );
}

export default PageMenu;