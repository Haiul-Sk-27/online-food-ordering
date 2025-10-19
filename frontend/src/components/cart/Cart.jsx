import React from 'react'
import CartItem from './CartItem'
import { Divider } from '@mui/material';

const items = [1,1];

const Cart = () => {
  return (
    <div>
      <main className='lg:flex justify-between'>

        <section className='lg:w[30%] space-y-6 lg:min-h-screen pt-10'>
         {items.map((item, index) => (
            <CartItem key={index} />
          ))}
        </section>

        <Divider/>

        <div className='billDetails px-5 text-sm'>
          <p className='font-extralight py-5'>Bill Details</p>
          <div className='flex justify-between text-gray-400'>
            <p>Item Total</p>
            <p>$599</p>
          </div>

          <div className='flex justify-between text-gray-400'>
            <p>Delivery Fee</p>
            <p>$59</p>
          </div>

          <div className='flex justify-between text-gray-400'>
            <p>Platform Fee</p>
            <p>$599</p>
          </div>

           <div className='flex justify-between text-gray-400'>
            <p>GST and Restaurant Charges</p>
            <p>$599</p>
          </div> 

          <Divider/>
        </div>

        <div className='flex justify-between text-gray-400'>
          <p>Total Pay</p>
          <p>$3000</p>
        </div>
      </main>
    </div>
  )
}

export default Cart