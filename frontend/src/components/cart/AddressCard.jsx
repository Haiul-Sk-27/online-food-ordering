import { Button, Card } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';

const AddressCard = ({ item, showButton, handleSelectAddress }) => {

    return (
        <Card className='flex gap-5 w-64 p-5'>
            <HomeIcon />
            <div className='sapce-y-3 flex-wrap text-gray-500'>
                <h1 className='font-semibold  text-lg text-white'>Home</h1>
                <p>Mumbainnew shibam building,gokuldham market, India</p>
                {
                    showButton && (
                        <Button variant='contained' fullwidth onClick={() => handleSelectAddress(item)}>Select</Button>
                    )
                }
            </div>
        </Card>
    )
}

export default AddressCard