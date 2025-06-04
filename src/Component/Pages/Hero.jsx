import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
const Header = () => {
  const [typeEffect] = useTypewriter({
    words: ['Full stack developer', 'Mobile Developer'],
    loop: {},
    typeSpeed: 100,
    delaySpeed: 40
  })
  return (
    <div className='block bg-purple-900 flex-wrap  shadow py-10 px-5 mx-auto my-5 w-[90%]  rounded-2xl   '>
      <span className='block flex-wrap text-3xl  xl:text-5xl text-white font-extrabold  capitalize text-center items-center  tracking-wide w-full justify-center hover:text-amber-400 '>
        Eng Abdullahi  
          </span>
      <span className=' block text-5xl flex-wrap text-yellow-600  font-light  capitalize text-center items-center  justify-center mt-3  py-3  '>
          {
            typeEffect
          }
        </span>

    </div>
  )
}

export default Header