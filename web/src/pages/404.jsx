import { Box, useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';



const ErrorPage= () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      p={4}
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
      <h1
        fontSize={64}
        fontWeight={700}
        color="primary.main"
        mt={3}
      >
        Ooops... 404!
      </h1>
      <p color="text.disabled" fontWeight="500">
        The page you requested could not be found.
      </p>

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
        Back to Home
      </NavLink>
    </Box>
  );
};

export default ErrorPage;