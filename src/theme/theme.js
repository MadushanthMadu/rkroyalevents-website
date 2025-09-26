import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#341010",
      contrastText: "#f8f8f6"
    },
    secondary: {
      main: "#D3AF37"
    },
    background: {
      default: "#ffffff",
      paper: "#f8f8f6"
    },
    text: {
      primary: '#341010',
      secondary: '#D3AF37'
    }
  },
  typography: {
    fontFamily: [
      'Poppins'
    ].join(','),
  }
});

export default lightTheme;