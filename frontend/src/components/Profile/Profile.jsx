import React, { useState } from 'react'
import ProfileNavigation from './ProfileNavigation'
import { Route, Routes } from 'react-router-dom'
import Address from './Address'
import Favorites from './Favorites'
import Event from './Event'
import UserProfile from './UserProfile'
import Orders from './Orders'

const Profile = () => {

    const [openSideBar,setOpenSidebar] = useState(false)
  return (
    <div className='lg:flex justify-between'>
        <div className='sticky h-[80vh] lg:w-[20%]'>
            <ProfileNavigation open={openSideBar}/>
        </div>

        <div className='lg:w-[80%]'>
          <Routes>
            <Route path='/' element={<UserProfile/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/address' element={<Address/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/events' element={<Event/>}/>
          </Routes>
        </div>
    </div>
  )
}

export default Profile