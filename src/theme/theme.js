import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0A66C1",
      contrastText: "#f8f8f6"
    },
    secondary: {
      main: "#f8f8f6"
    },
    background: {
      default: "#ffffff",
      paper: "#f8f8f6"
    },
    text: {
      primary: '#28282b',
      secondary: '#6c6e6d'
    }
  },
  typography: {
    fontFamily: [
      'Poppins'
    ].join(','),
  }
});

export default lightTheme;