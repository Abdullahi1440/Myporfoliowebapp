import React from 'react'
import { format } from 'date-fns';
const Footer = () => {
  const now=new Date();
  const formatt=format(now,'yyyy-MM-dd');
  return (
    <div className=' bg-purple-600 flex justify-center items-center text-2xl text-center font-light w-full py-5 px-5 mt-5 mx-auto mb-0 '>
        <span className='text-center font-light text-3xl tracking-wide py-3 px-3 text-white '>{formatt}  all Right Reserved </span>
        
        </div>
  )
} 

export default Footer