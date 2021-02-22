import Routes from './Routes'
import {ThemeProvider, createMuiTheme } from '@material-ui/core';

export default function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#074f8c',
      },
      secondary: {
        main: '#ff9208',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
