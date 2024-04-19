import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AuthProvider } from './context/AuthContext';
import PageMenu from './components/Layouts/PageMenu';
import routes from './routers';


const theme = createTheme({
  typography: {
    fontFamily: [
      'Noto Sans TC',
      'Roboto',
      'sans-serif'
    ].join(',')
  }, palette:
  {
    mode: 'dark',
  },
},
);

const App = () => {
  const allPages = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <PageMenu>
          <Toaster />
          {allPages}
        </PageMenu>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;