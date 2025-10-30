import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import {darkTheme} from './theme/DarkTheme'
import Home from './components/Home/Home';
import Cart from './components/cart/Cart';
import Profile from './components/Profile/Profile';
import CustomerRoute from './Routes/CustomerRoute';
import { useEffect } from 'react';
import { getUser } from './components/State/Authentication/Action';
import { useDispatch, useSelector } from 'react-redux';


function App() {

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const auth = useSelector(store => store.auth);

  useEffect(() => {
    if (jwt || auth?.jwt) {
      dispatch(getUser(jwt || auth.jwt));
    }
  }, [auth?.jwt, dispatch, jwt]);


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Navbar/>
      {/* <Home/> */}
  {/* <RestaurantDetails/> */}
    {/* <Cart/> */}

    {/* <Profile/> */}

    <CustomerRoute/>
    </ThemeProvider>
  );
}

export default App;
