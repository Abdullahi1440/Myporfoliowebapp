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
      <animated.div style={style}> <h3 className='text-center text-4xl text-purple-600  capitalize'>
        A business has not got a website, which is like a business without dreaming and goals. I advise you to improve using technology to achieve your goals with your business.
         </h3>


      </animated.div>


    </div>
  )
}

export default Home