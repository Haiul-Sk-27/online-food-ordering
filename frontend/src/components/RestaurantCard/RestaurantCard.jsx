import { Card, Chip, IconButton } from '@mui/material'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const RestaurantCard = () => {
  return (
    <Card className='m-5 w-[18rem]'>
        <div className={`${true?"cursor-pointer":"cursor-not-allowed"}`}>
            <img className='w-full h-[10rem] rounded-t-md object-cover' src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg" alt="" />

            <Chip 
            size='small'
            className='absolute top-2 left-2'
            color={`${true?"success":"error"}`}
            label={`${true?"open":"closed"}`}/>
        
        </div>

        <div className='p-4 textPart lg:flex w-full justify-between'>
            <div className='space-y-1'>
                <p className='font-semibold text-lg'></p>
                <p className='text-gray-500 text-sm'>
                    Craving it all? Drivve into our global fla...
                </p>
            </div>

            <div>
                <IconButton>
                    {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
                </IconButton>
            </div>
        </div>
    </Card>
  )
}

export default RestaurantCard