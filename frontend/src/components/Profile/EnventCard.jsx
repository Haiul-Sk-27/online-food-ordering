import {Card,CardContent,CardActions, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'

import DeleteIcon from '@mui/icons-material/Delete';

const EnventCard = () => {
  return (
    <div>
        <Card sx={{width:345}}>
            <CardMedia 
            sx={{height:345}}
            image='https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg'/>

            <CardContent>
                <Typography variant='h5'>
                    India Fast Food
                </Typography>

                <Typography variant='body2'>
                    50"% off on  your first order
                </Typography>

                <div className='py-2 space-y-2'>
                    <p>{"mumbai"}</p>
                    <p className='text-sm text-blue-500'>Fabuary 14 2024 12:00 AM</p>
                    <p className='text-sm text-red-500'>Fabuary 14 2024 12:00 AM</p>
                </div>
            </CardContent>

            {false && <CardActions>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>}
        
        </Card>
    </div>
  )
}

export default EnventCard