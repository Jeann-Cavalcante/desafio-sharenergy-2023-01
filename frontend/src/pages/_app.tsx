import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#00A2A2",
    },
    secondary: {
      main: "#161C2D",
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
      <ToastContainer />
      <Component {...pageProps} />

      </ThemeProvider>
    </AuthProvider>
  );
}
