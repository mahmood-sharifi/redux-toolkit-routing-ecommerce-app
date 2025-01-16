import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { GlobalStyles } from './styles';
import { lightTheme, darkTheme } from './styles/themes';
import Routes from './routes';
import { Navbar } from './components/organisms';

const App: React.FC = () => {
  const isDarkMode = useSelector((state: RootState) => state.user.isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
