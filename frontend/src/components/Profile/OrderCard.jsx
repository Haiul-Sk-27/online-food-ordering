import { Button } from '@mui/material'
import React from 'react'
import { Card } from '@mui/material';

const OrderCard = () => {
    return (
        <Card className="flex justify-between items-center p-5">
            <div className='flex items-center space-x-5'>
                <img className='h-16 w-16'
                    src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg"
                    alt=""
                />

                <div>
                    <p>Biryani</p>
                    <p>$399</p>
                </div>               
            </div>
           <div>
             <Button desabled className='cursor-not-allowed '>
                Completed
            </Button>

           </div>
        </Card>
    )
}

export default OrderCard