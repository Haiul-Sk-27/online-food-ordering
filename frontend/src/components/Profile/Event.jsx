import React from 'react'
import EnventCard from './EnventCard'

const Event = () => {
  return (
    <div className='mt-5 px-5 flex flex-wrap gap-5'>
        {[1,1,1,].map((item )=><EnventCard/>)}
    </div>
  )
}

export default Event