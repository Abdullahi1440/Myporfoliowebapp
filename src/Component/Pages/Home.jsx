import React from 'react'
import { motion } from 'framer-motion'
import Header from './Hero'
import { useSpring, animated } from '@react-spring/web'
import Skills from '../Skills'
import Project from '../Project'
const Home = () => {
  const style=useSpring({opacity:1, from:{opacity:0}});
  return (
    <div>

      <Header />
      <Skills/>
      <Project/>
      {/* <motion.div
      initial={{opacity:0, y:-50}}
      animate={{opacity:1, y:0}}
      transition={{duration:0.8}}
      >
        <h3 className='text-center text-6xl text-purple-600 uppercase'>I am ready to enhance you </h3>

      </motion.div> */}
      <animated.div style={style}> <section className=' flex flex-wrap    w-full mt-4 mb-4 mx-auto justify-center items-center p-5 text-center text-3xl font-light text-black   '>
        <section className="flex flex-col justify-center rounded-xl py-10 px-10  bg-white dark:bg-gray-900 dark:text-white border-t border-amber-600 shadow-lg shadow-amber-400">
                <span className='text-center font-semibold text-5xl mb-4 text-amber-400   transition duration-100'>Empower your business through the use of technology.</span>
          <p className='text-center'>A business without a website is similar to a business that lacks dreams and goals. I advise you to use  technology to achieve your business objectives. Having a website is essential in today's digital age, as it acts as a platform for showcasing your products and services while reaching a wider audience. Embracing technology not only enhances visibility but also streamlines operations, ultimately leading to greater success.
          </p> 
        </section>
         </section>


      </animated.div>


    </div>
  )
}

export default Home