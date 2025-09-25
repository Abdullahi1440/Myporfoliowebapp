import React from 'react'

const Contacts = () => {
  return (

    <>
<h4 className="text-wrap text-center items-center  justify-center  uppercase mx-auto mt-10 mb-3 text-3xl font-bold tracking-wide dark:text-white">
  <span className='border-b-2 border-purple-500 mb-2'>  Contact us</span>
 </h4>
<div className="flex   justify-center items-center  mx-auto max-w-full scroll-auto dark:text-white  ">
                  <div className="flex flex-col flex-wrap text-wrap ">
        <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 gap-6 w-full">
          <div className='rounded-2xl shadow-lg py-5 px-5  '>
            <div className='flex  text-center '>

                <span className='text-center font-light text-2xl capitalize my-5  mb-4'>
                  <span className='text-center block text-2xl font-bold'>    Otherway to Connect </span>
                Choose the method that works best for you. We're here to help!   </span>
            </div>
              
            <div className=' flex justify-center text-center text-2xl  rounded-2xl mb-10 border-2 border-purple-500 mt-5  '>
              <span className='inline  py-3 px-3 '>     <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20  rounded-full my-2  text-purple-600 sm:text-lg  hover:bg-amber-400  " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg></span>
                <span className=' inline  py-5 px-3 mt-5 text-2xl text-center  capitalize font-semibold '>guure1440@gmail </span>
                 
                  
            </div>
            <div className=' flex justify-center text-center text-2xl  rounded-2xl mb-10 border-2 border-purple-500  '>
              <span className='inline  py-3 px-3 '>    
             <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20  rounded-full text-purple-500  hover:bg-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
          </svg>
          </span>
                <span className=' inline  py-5 px-3 mt-5 text-2xl text-center  capitalize font-semibold '>+2525748666647 </span>
                 
                  
            </div>
          

            
          </div>
          
          <div className='rounded-2xl shadow-lg w-full flex-wrap'>
            <div className='border-3 border-purple-400 py-5 px-5 rounded-2xl mt-5 '> 
                <span className='text-center font-light text-2xl capitalize'>
                  <span className='text-center block text-2xl font-bold'>    Send Us a Message</span>
                  Fill out the form below and we'll get back to you as soon as possible.y
                </span>
              <form action=""className='rounded w-full  shadow-lg   '>
              
                  <span className='block text-center text-2xl font-light capitalize mb-2 tracking-wide py-2 px-2  '>firstname</span>

                  <input type="text" className='border-2 border-purple-500 w-full rounded-lg focus:outline-none py-3 px-3' />
                  
                  <span className='block text-center text-2xl font-light capitalize mb-2 tracking-wide py-2 px-2 '>Lastname </span>

                  <input type="text" className='border-2 border-purple-500 w-full rounded-lg focus:outline-none py-3 px-3 ' />
                  
                  <span className='block text-center text-2xl font-light capitalize mb-2 tracking-wide py-3 px-3'>Subject </span>

                  <input type="text" className='border-2 border-purple-500 w-full rounded-lg focus:outline-none p-4' />

             
                  <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                  <textarea id="message" rows="4" cols="4" class="block p-2.5 w-full text-md   rounded-lg border-2 border-purple-500 focus:outline-none   dark:placeholder-gray-400 dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Write your thoughts here..."></textarea>

                    <button type='submit' className='text-center bg-purple-500 rounded-xl py-2 px-2 text-white font-bold text-xl mt-2 mb-3 w-full'>Send </button>
                </form> 
            </div>
            
          </div>

        </div>

        </div>
                  </div>
        
   </>
  )
}

export default Contacts