import Routes from './Routes'
import {ThemeProvider, createMuiTheme } from '@material-ui/core';

export default function App() {
  const theme = createMuiTheme({
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
