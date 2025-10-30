import React from 'react';
import {Modal} from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { style } from '../cart/Cart';
import RegisterFrom from './RegisterFrom';
import LoginFrom from './LoginFrom';

const Auth = () => {

    const  location = useLocation();
    const navigate = useNavigate();
    const handleOnClose = () =>{
        navigate('/')
    }
  return (
    <>
    <Modal onclose= {handleOnClose} open={location.pathname==="/account/register"
        || location.pathname ==="/account/login"
        
    }>
        <Box sx={style}> 
            {
               location.pathname==="/account/register"?<RegisterFrom/> :<LoginFrom/>
            }
        </Box>
    </Modal>
    </>
  )
}

export default Auth