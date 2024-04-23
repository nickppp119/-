import { Toaster } from 'react-hot-toast';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { zhHK as pickerZhHK } from '@mui/x-date-pickers/locales';
import { AuthProvider } from './context/AuthContext';
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
  pickerZhHK
},
);

const App = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <Toaster />
      <PageRoutes />
    </AuthProvider>
  </ThemeProvider>
);

export default App;