import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb, DiWordpress } from "react-icons/di";
import { DiFirebase } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
const Skills = () => {
  return (
<>
  <div className="container mx-auto justify-center items-center ">
        <h2 className="text-5xl font-bold mb-6 mt-6  text-center uppercase "> Technology I use</h2>

        <div className="flex flex-wrap justify-center gap-10  ">
            <div className="w-full   lg:w-1/4 xl:w-1/4 p-4 overflow-hidden ">
              <h4 className='text-center font-semibold capitalize text-3xl mb-2'><span className='border-b-2 border-amber-500'>Front End </span></h4>
            <div className="flex-row ">
              <div className="rounded-lg shadow-lg items-center bg-white dark:bg-gray-900  shadow-amber-500 py-3 px-3  ">
                <div className=' flex  mb-4 w-[90%] py-3 px-3 items-center  rounded-xl border border-amber-400  hover:text-amber-400'><FaHtml5 className='text-center h-14 w-14' /> <span className='inline text-xl uppercase  pl-10'> HTML </span> </div>
                <div className=' flex mb-4  w-[90%] py-3 px-3 items-center  rounded-xl border border-amber-400  hover:text-amber-400'><FaReact className='text-center h-14 w-14' /> <span className='inline text-xl uppercase pl-10'> React js </span> </div>
                <div className=' flex mb-4  w-[90%] py-3 px-3 items-center  rounded-xl border border-amber-400  hover:text-amber-400'><FaJs className='text-center h-14 w-14' /> <span className='inline text-xl uppercase pl-10'> React js </span> </div>

                <div className=' flex  mb-4  w-[90%]  py-3 px-3 items-center  rounded-xl border border-amber-400  hover:text-amber-400'><RiTailwindCssFill className='text-center h-14 w-14' /> <span className='inline text-xl uppercase pl-10'> Tailwind </span> </div>
                <div className=' flex   mb-4  w-[90%]  py-3 px-3 items-center  rounded-xl border border-amber-400  hover:text-amber-400'><FaBootstrap className='text-center h-14 w-14' /> <span className='inline text-xl uppercase pl-10'> Bootstrap </span> </div>


              </div>
              
              </div>
            </div>
            <div className="w-full  lg:w-1/4 xl:w-1/4 p-4 overflow-hidden ">
              <h4 className='text-center font-semibold capitalize text-3xl mb-2'><span className='border-b-2 border-amber-500'>Back end  </span></h4>
            <div className="flex-row ">
              <div className="rounded-lg shadow-lg items-center bg-white dark:bg-gray-900  shadow-amber-500 py-3 px-3  ">
                <div className=' flex mb-4 w-[90%] py-3 px-3 items-center  rounded-xl border border-amber-400  hover:text-amber-400'><FaNodeJs className='text-center h-14 w-14' /> <span className='inline text-xl uppercase pl-10'> Node js </span> </div>
                <div className=' flex mb-4  w-[90%] py-3 px-3 items-center  rounded-xl border border-amber-400  hover:text-amber-400'><DiMongodb className='text-center h-14 w-14' /> <span className='inline text-xl uppercase pl-10'> Mongo DB </span> </div>
                <div className=' flex mb-4  w-[90%] py-3 px-3 items-center  rounded-xl border border-amber-400  hover:text-amber-400'><DiFirebase className='text-center h-14 w-14' /> <span className='inline text-xl uppercase pl-10'> Fire Base </span> </div>

                <div className=' flex  mb-4  w-[90%]  py-3 px-3 items-center  rounded-xl border border-amber-400  hover:text-amber-400'><DiMysql className='text-center h-14 w-14' /> <span className='inline text-xl uppercase pl-10'> MYSQL </span> </div>
                <div className=' flex   mb-4  w-[90%]  py-3 px-3 items-center  rounded-xl border border-amber-400  hover:text-amber-400'><DiPostgresql className='text-center h-14 w-14' /> <span className='inline text-xl uppercase pl-10'> POSTRESQL</span> </div>


              </div>
              
              </div>
            </div>
            <div className="w-full  lg:w-1/4 xl:w-1/4 p-4 overflow-hidden ">
              <h4 className='text-center font-semibold capitalize text-2xl mb-2'><span className='border-b-2 border-amber-500 uppercase '>Additional Tech   </span></h4>
            <div className="flex-row ">
              <div className="rounded-lg shadow-lg items-center bg-whitedark:bg-gray-900  shadow-amber-500 py-3 px-3  ">
                <div className=' flex mb-4 w-[90%] py-3 px-3 items-center  rounded-xl border border-amber-400  hover:text-amber-400'><FaGithub className='text-center h-14 w-14' /> <span className='inline text-xl uppercase pl-10'> GITHUB </span> </div>
                <div className=' flex mb-4  w-[90%] py-3 px-3 items-center  rounded-xl border border-amber-400  hover:text-amber-400'><FaAws className='text-center h-14 w-14' /> <span className='inline text-xl uppercase pl-10'> AWS CLOUD </span> </div>
                <div className=' flex mb-4  w-[90%] py-3 px-3 items-center  rounded-xl border border-amber-400  hover:text-amber-400'><DiWordpress className='text-center h-14 w-14' /> <span className='inline text-xl uppercase pl-10'> WORDPRESS </span> </div>



              </div>
              
              </div>
            </div>

            <div/>
            </div>
            </div>
</>
  )
}

export default Skills;