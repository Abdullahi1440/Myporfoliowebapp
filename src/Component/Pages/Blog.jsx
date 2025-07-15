
// import myimage from ".../assets/";
  // import logo from ".../assets/logo.png";
const Blog = () => {
  return (
    <div className='flex flex-col justify-center  items-center mx-auto mt-2  py-5 px-5 w-full container '>
      <div className='block mb-5 '>
      <h2 className='text-center items-center font-bold text-5xl text-purple-400'>My Journey sofware developer </h2>

      </div>

      
      <div className="flex   flex-wrap mx-auto justify-center items-center w-full ">
        <img src="myimage.jpg" alt="" className='w-60 object-cover h-60 rounded-2xl' />
        <p className=' flex text-center font-light text-2xl mt-4 '>
          My journey into software development began during my  University Of Bosaso (UOB) years.

          where I majored in computer science. What started as curiosity quickly grew into a full-blown passion as I began building small web apps and contributing to open-source projects.

          Since then, I've worked on various freelance and team-based projects, refining my skills in JavaScript, React, and backend technologies like Node.js and Express. Along the way, I discovered the importance of collaboration and continuous learning, which have become integral to my growth as a developer. Each project has presented new challenges, allowing me to adapt and innovate while also deepening my understanding of user experience and software architecture.

        </p>
      </div>
  
    </div>
  )
}

export default Blog