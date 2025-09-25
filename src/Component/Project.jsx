import React from 'react'

const Project = () => {
  return (
   <div className=" flex  flex-col justify-center items-center mx-auto container mt-10  ">
    <h4 className="  text-center text-4xl  capitalize font-bold mt-3 mb-3 hover:text-amber-400 ">Project features</h4>
    <div className="flex justify-center flex-wrap gap-4 text-wrap ">
        <div className="w-full  lg:w-1/4 x:w-1/4 p-2">
        <div className="flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-lg border shadow-amber-400 overflow-hidden mx-auto  ">
            <div className="flex flex-col items-center py-3 px-4">
                <img src="" alt="" className='w-full h-48 object-cover ' />
                <h5 className="text-xl text-center font-bold capitalize mt-4 mb-4 ">Post managent Wep app </h5>
                <span className='text-center items-center text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, alias dolore! Quaerat labore nihil cupiditate! !</span>

            </div>
        </div>
        </div>
        
      {/*post managent app*/}
        <div className="w-full  lg:w-1/4 x:w-1/4 p-4">
        <div className="flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-lg shadow-amber-400 overflow-hidden mx-auto  ">
            <div className="flex flex-col items-center py-3 px-4">
                <img src="" alt="" className='w-full h-48 object-cover ' />
                <h5 className="text-xl text-center font-bold capitalize mt-4 mb-4">Todo app</h5>
                <span className='text-center items-center text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, alias dolore! Quaerat labore nihil cupiditate! !</span>

            </div>
        </div>
        </div>
      {/*post managent app*/}
        <div className="w-full  lg:w-1/4 x:w-1/4 p-4">
        <div className="flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-lg shadow-amber-400 overflow-hidden mx-auto  ">
            <div className="flex flex-col items-center py-3 px-4">
                <img src="" alt="" className='w-full h-48 object-cover ' />
                <h5 className="text-xl text-center font-bold capitalize mt-4 mb-4">Todo app</h5>
                <span className='text-center items-center text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, alias dolore! Quaerat labore nihil cupiditate! !</span>

            </div>
        </div>
        </div>

    </div>
   </div> 
   
  )
}

export default Project