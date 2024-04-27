import { Box, useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { H1, H3 } from '../components/Typography';



const ErrorPage = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      height="100%"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Box maxWidth={350}>
        <img
          src="/images/illustration/error-page.svg"
          width="100%"
          alt="Error 404"
        />
      </Box>
      <H1
        fontSize={64}
        fontWeight={700}
        color="primary.main"
        mt={3}
      >
        Ooops... 404!
      </H1>
      <H3 color="text.disabled" fontWeight="500" mt={2}>
        無法找到你請求的頁面。
      </H3>

      <NavLink
        to="/"
        style={{
          display: 'block',
          marginTop: '1.5rem',
          fontWeight: 600,
          textDecoration: 'underline',
          color: theme.palette.primary.main
        }}
      >
        返回首頁
      </NavLink>
    </Box>
  );
};

export default ErrorPage;