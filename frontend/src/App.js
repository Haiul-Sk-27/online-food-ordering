import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import {darkTheme} from './theme/DarkTheme'
import Home from './components/Home/Home';
import RestaurantDetails from './components/RestaurantCard/RestaurantDetails';
import CartItem from './components/cart/CartItem';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Navbar/>
      {/* <Home/> */}
  {/* <RestaurantDetails/> */}
  <CartItem/>
    </ThemeProvider>
  );
}

export default App;
