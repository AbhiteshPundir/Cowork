import React from 'react'

const Footer = () => {
  
  return (
    <div className='bg-white w-full h-fit px-8 lg:px-20 py-10'>
        <div className='bg-zinc-900 rounded-[37px] w-full h-fit lg:h-64 py-8 px-9 flex flex-wrap lg:flex-nowrap gap-5'>
          <div className='px-2 flex flex-col lg:w-5/12 gap-2'>
            <h1 className='text-3xl font-bold text-zinc-100'>Cowork</h1>
            <p className='font-light text-xs tracking-wide text-zinc-100 pb-1'>Join our newsletter to stay upto date with deatures and releases.</p>
            <div className='flex gap-5 py-1'>
              <input className='w-2/5 bg-zinc-900 border-b-2 border-zinc-400 font-thin text-xs tracking-wider text-zinc-400' type="text" value={"Enter your email"}/>
              <a className='h-9 text-xs bg-zinc-100 pt-1 font-bold w-24 flex items-center justify-center pb-1 rounded-3xl border-black border-2'>
              Subscribe
              </a>
            </div>
            <p className='font-light text-xs tracking-wide text-zinc-100 py-3'>By submitting you agree with our policy and provide consent to receive updates form our company.</p>
          </div>
          <div className='flex justify-evenly flex-wrap gap-5 w-7/12 text-zinc-100'>
            <div className='flex flex-col lg:gap-4'>
                <h2 className='text-zinc-100 font-bold text-xs w-36'>EXPLORE MORE</h2>
                <h3 className='text-xs font-thin'>Home</h3>
                <h3 className='text-xs font-thin'>About</h3>
                <h3 className='text-xs font-thin'>Pricing</h3>
                <h3 className='text-xs font-thin'>Blog</h3>
                <h3 className='text-xs font-thin'>Events</h3>
            </div>
            <div className='flex flex-col lg:gap-4'>
                <h2 className='text-zinc-100 font-bold text-xs w-36'>STAY CONNECTED</h2>
                <h3 className='text-xs font-thin'>Subscribe</h3>
                <h3 className='text-xs font-thin'>Member Stories</h3>
                <h3 className='text-xs font-thin'>Locations</h3>
                <h3 className='text-xs font-thin'>Write for Us</h3>
            </div>
            <div className='flex flex-col lg:gap-4'>
                <h2 className='text-zinc-100 font-bold text-xs w-36'>FOLLOW US</h2>
                <h3 className='text-xs font-thin'>Facebook</h3>
                <h3 className='text-xs font-thin'>Instagram</h3>
                <h3 className='text-xs font-thin'>X</h3>
                <h3 className='text-xs font-thin'>Linkedin</h3>
                <h3 className='text-xs font-thin'>Youtube</h3>
            </div>
          </div>
        </div>
        <div className='flex justify-between'>
          <p className='text-xs font-light p-4'>@2024 Cowork. All Rights Reserved.</p>
          <div className='flex text-xs font-normal justify-evenly py-4 w-1/4 underline underline-offset-2'>
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
            <a href="">Cookie Settings</a>
          </div>
        </div>
    </div>
  )
}

export default Footer
