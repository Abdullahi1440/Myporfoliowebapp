import React from 'react'
import { motion } from 'framer-motion'
import { useTypewriter } from 'react-simple-typewriter'
const Header = () => {
  const [typeEffect] = useTypewriter({
    words: ['Full stack developer','Web Designing','ODOO Implementation', 'Mobile Developer'],
    loop: {},
    typeSpeed: 100,
    delaySpeed: 40
  })
  return (
    <div className='block bg-purple-900 flex-wrap  shadow py-10 px-5 mx-auto my-5 w-[90%]  rounded-2xl   '>
      <span className='block flex-wrap text-5xl  xl:text-6xl text-amber-400 font-extrabold  capitalize text-center items-center  tracking-wide w-full justify-center hover:text-amber-400 '>
        <motion.div
      initial={{opacity:0, y:-50}}
      animate={{opacity:1, y:0}}
      transition={{duration:2}}
      >
        <h3 className='text-center text-6xl  uppercase'>I am ready to enhance you </h3>

      </motion.div>
          </span>
          <span className=' flex flex-wrap text-wrap text-center text-3xl font-medium py-3 px-3 text-white'>I build websites and web apps using modern technologies and tools, helping businesses and individuals to achieve their dreams.
 
If you need a reliable developer to bring your project to life, I'm here to help you.</span>
      <span className=' block text-5xl flex-wrap text-yellow-600  font-light  capitalize text-center items-center  justify-center mt-3  py-3  '>
          {
            typeEffect
          }
        </span>

    </div>
  )
}

export default Header