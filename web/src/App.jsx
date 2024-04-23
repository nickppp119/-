import { Toaster } from 'react-hot-toast';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AuthProvider } from './context/AuthContext';
import PageMenu from './components/Layouts/PageMenu';
import PageRoutes from './PageRoutes';


const theme = createTheme({
  typography: {
    fontFamily: [
      'Noto Sans TC',
      'Roboto',
      'sans-serif'
    ].join(',')
  },
  palette: {
    mode: 'dark'
  },
},
);

const App = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <PageMenu>
        <Toaster />
        <PageRoutes />
      </PageMenu>
    </AuthProvider>
  </ThemeProvider>
);

export default App;