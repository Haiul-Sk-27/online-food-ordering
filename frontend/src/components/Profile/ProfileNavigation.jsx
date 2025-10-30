import { Divider, Drawer, Icon, useMediaQuery } from '@mui/material'
import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { useNavigate } from "react-router-dom";

const menu = [
    { title: "orders", icon: <ShoppingBagIcon /> },
    { title: "Favorites", icon: <FavoriteIcon /> },
    { title: "Address", icon: <AddReactionIcon /> },
    { title: "Payment", icon: <AccountBalanceWalletIcon /> },
    { title: "Notifaction", icon: <NotificationsActiveIcon /> },
    { title: "Events", icon: <EventIcon /> },
    { title: "Logout", icon: <LogoutIcon /> }
]
const ProfileNavigation = (open, handleClose) => {

    const isSmallScreen = useMediaQuery("(max-width:900)");
    const navigate =useNavigate();

    const handleNavigate = (item)=>{
        navigate(`/my-profile/${item.title.toLowerCase()}`)
    }

    return (
        <div>
            <Drawer
                variant={isSmallScreen ? "temporary" : "permanent"}
                onClose={handleClose}
                open={isSmallScreen ? open : true}
                anchor='left'
                sx={{ zIndex: 1,position:"sticky" }}>
                <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-2xl gap-8 pt-16'>
                    {menu.map((item, i) => (
                        <React.Fragment key={i}>
                            <div onClick={()=>handleNavigate(item)} className='px-5 flex items-center space-x-5 cursor-pointer'>
                                {item.icon}
                                <span>{item.title}</span>
                            </div>
                            {i !== menu.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </div>
            </Drawer>
        </div>
    )
}

export default ProfileNavigation