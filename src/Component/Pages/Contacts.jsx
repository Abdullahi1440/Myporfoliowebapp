import { useState } from 'react'

const Contacts = () => {
    const [formdata ,setFormdata]=useState({fullname:"", email:"", message:""})
    const [Error ,setError]=useState({});

    const handlechange=(e)=>{
      setFormdata({...formdata ,[e.target.name]:e.target.value});
    };
       const Validation=()=>{
      let Newerrors={};
      if(!formdata.fullname.trim()){
        Newerrors.fullname=("full name is required");
      };
      if(!formdata.email.trim()){
        Newerrors.email=("email  name is required");
      }
      if(!formdata.message.trim()){
        Newerrors.message=("message  can not empty ");
      };

      setError(Newerrors);

    
      
     };
    const handlesubmit=(e)=>{
      e.preventDefault();
      setFormdata("")
      if(!Validation()){
        return;//stop submit if the exist
      }
     

      console.log("form data is ", formdata)
    }
          alert("message successfully sent")

     console.log("form data is ", formdata);
  
  return (

    <>
    
<section className="min-h-screen flex  flex-col items-center justify-center bg-gray-100 p-6 dark:bg-gray-900 ">
    <h1 className="font-bold uppercase text-4xl">GET IN TOUCH </h1>
  <div className='flex  justify-center   flex-wrap text-wrap     items-center px-5 py-5 m  mb-3 rounded-lg  w-full '>
    
    <span className='text-lg font-bold uppercase  border border-purple-400 p-5 mx-2 my-2  rounded-lg dark:text-white hover:bg-amber-500  '>
           <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14  mx-3 rounded-full my-2 items-center   inline-block text-purple-400  " fill="none" viewBox="0 0 24 24" strokeLinecap="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
              guure1440@gmail.com 
       </span>
    <span className='text-lg font-bold  uppercase  border border-purple-400  p-5 mx-2 my-2 rounded-lg dark:text-white hover:bg-amber-500  '> 
       <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20   inline-block rounded-full text-purple-500  hover:bg-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
             </svg>+255748666647
       </span>
    <span className='text-lg font-bold   uppercase  border border-purple-400  p-5 mx-2 my-2 rounded-lg dark:text-white hover:bg-amber-500  '> 
       <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20   inline-block rounded-full text-purple-500  hover:bg-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
             </svg> Dar Es salaam
       </span>

  </div>
  <div className="w-full max-w-lg bg-white  dark:bg-gray-900 dark:text-white shadow-xl rounded-2xl p-8">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center dark:text-white">
      Contact Us
    </h2>
    <form  onSubmit={handlesubmit} className="space-y-5">
              {Error.fullname && (<span className='text-lg text-red-400 font-medium'>{Error.fullname }</span>)}
      <div>

        <label className="text-sm font-medium text-gray-700 dark:text-white">Full Name</label>

        <input
        name='fullname' 
          type="text"  value={formdata.fullname}
          placeholder="Enter your name"
          onChange={handlechange}
          className="w-full mt-2 px-4 py-3 rounded-xl border border-purple-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
                {Error.email && (<span className='text-lg text-red-400 font-medium'>{Error.email }</span>)}
      <div>
        <label className="text-sm font-medium text-gray-700 dark:text-white">Email Address</label>
        <input
          type="email"  name='email'  value={formdata.email} onChange={handlechange}
          placeholder="Enter your email"
          className="w-full mt-2 px-4 py-3 rounded-xl border border-purple-400  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
        {Error.message && (<span className='text-lg text-red-400 font-medium'>{Error.message }</span>)}

      <div>
        <label className="text-sm font-medium text-gray-700 dark:text-white">Message</label>
        <textarea name='message'
          rows="4" color='50' value={formdata.message}
          placeholder="Type your message..." onChange={handlechange}
          className="w-full mt-2 px-4 py-3 rounded-xl border border-purple-400  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-blue-700 transition duration-300"
      >
        Send Message
      </button>
    </form>
  </div>
</section>
</>

  

  )
}

export default Contacts