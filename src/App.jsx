import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// import Posts from './Component/Posts';
import { Route, Routes } from 'react-router';

import React from 'react'
import axios from 'axios';
import Menu from './Component/Menu';
import Home from './Component/Pages/Home';
import Contacts from './Component/Pages/Contacts';
import About from './Component/Pages/About';
import Blog from './Component/Pages/Blog';
import Service from './Component/Pages/Service';
import Footer from './Component/Footer';

function App() {
  //usestate
  return (

    //fragment
    <>
    <Menu/>
    <div className=' '>
      <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route path='/About' element={<About/>}/>
        <Route path='/Contacts' element={<Contacts/>}/>
        
        <Route path='/Blog' element={<Blog/>}/>
        
        <Route path='/Service' element={<Service/>}/>



      </Routes>
    </div>
   
    <Footer/>
    </>
  )
} 

export default App
