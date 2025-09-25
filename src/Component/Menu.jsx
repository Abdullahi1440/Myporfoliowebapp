import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";

import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router'
import { FaWindowClose } from "react-icons/fa";
import logo from'../assets/logo.png';
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from './Conprovider';
import { useContext } from 'react';
const Menu = () => {
const {darkMode,setDarkMode}=useContext(ThemeContext);
  const [ismenuopen,setmenuopen]=useState(false);
  return (
    <div className=' flex  dark:bg-gray-900 dark:text-white  mx-auto py-10 sm:px-6 justify-around items-center  text-black  w-full bg-white shadow-lg '>
      <Link to="/" className='flex flex-wrap  text-wrap text-3xl uppercase text-purple-700  transition-colors hover:text-amber-600'>
        <img src={logo} alt="" className='w-20 h-20' />
      </Link>
      <div className=' hidden sm:flex '>
        <ul className='flex gap-4 text-2xl'>
            <span className='  py-2 px-2 rounded-full border mb-2 mx-2 shadow-sm  hover:bg-purple-500 hover:text-white transition-all '>
              {
                darkMode ? <FaSun onClick={()=>setDarkMode(!darkMode)} className='text-yellow-500 w-10 h-10'/> : <FaSun onClick={()=>setDarkMode(!darkMode)} className='w-10 h-10 text-gray-800'/>
              }
            </span>
            < Link to="/" className='px-3 py-1.5 hover:bg-purple-500 hover:text-white transition-all cursor-pointer '>Home</ Link>
          < Link to="/Blog" className='px-3 py-1.5 hover:bg-purple-500 hover:text-white transition-all cursor-pointer '>Blog</ Link>
          < Link to="/About" className='px-3 py-1.5 hover:bg-purple-500 hover:text-white  '>About</ Link>      
          <Link to="/contacts" className='px-3 py-1.5 hover:bg-purple-500 hover:text-white '> Contact</Link>
          <Link to="/Service" className='px-3 py-1.5 hover:bg-purple-500 hover:text-white '> Service</Link>
          <Link to="https://github.com/Abdullahi1440" className='px-3 py-1.5 hover:bg-purple-500 hover:text-white '> Github</Link>
          


        </ul>
      </div>

        <div  className='block sm:hidden '>
          
        {
          ismenuopen ?

            <FaWindowClose onClick={()=>setmenuopen(!ismenuopen)} className=' cursor-pointer text-xl'/>
          // <IoMdClose  onClick={()=>setmenuopen(!ismenuopen)} className='cursor-pointer'  />
          :
          <CiMenuBurger onClick={()=>setmenuopen(!ismenuopen)} className=' cursor-pointer text-xl' /> 
          
        }
        </div>

        {
          ismenuopen && <div className=' absolute xl:hidden w-full top-25 mt-2 bg-white shadow-lg font-semibold  dark:bg-gray-900 dark:text-white  left-0 right-0 z-50 p-5   '>
            <div className='flex'>
              <ul className='flex flex-col gap-2  capitalize'>
              {
                darkMode ? <FaSun onClick={()=>setDarkMode(!darkMode)} className='text-yellow-500 w-10 h-10 py-2 px-4'/> : <FaSun onClick={()=>setDarkMode(!darkMode)} className='w-10 h-10 text-gray-800 px-3 py-2'/>
              }
                 < Link to="/"  onClick={()=>setmenuopen(false)} className='  px-3 py-2 hover:text-purple-800  '>Home</ Link>
                < Link to="/Blog"  onClick={()=>setmenuopen(false)} className='  px-3 py-2 hover:text-purple-800  '>Blog</ Link>
          < Link to="/About"onClick={()=>setmenuopen(false)} className='  px-3 py-2 hover:text-purple-800   text-sm '>About</ Link>  
              
          < Link to="/Service"onClick={()=>setmenuopen(false)} className='  px-3 py-2 hover:text-purple-800   text-sm '>Service</ Link>  

          <Link to="/contacts" onClick={()=>setmenuopen(false)} className='  px-3 py-2 hover:text-purple-800   text-sm'> contacts</Link>
          <Link to="https://github.com/Abdullahi1440" onClick={()=>setmenuopen(false)} className='  px-3 py-2 hover:text-purple-800   text-sm'> Github </Link>
             
              </ul>
            </div>
          </div>
        }

     
    </div>
  )
}

export default Menu