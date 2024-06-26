import React from 'react'

const Footer = () => {
  
  return (
    <div className='bg-white w-full h-fit px-5 lg:px-20 pt-6'>
        <div className='bg-zinc-900 rounded-[37px] w-full h-fit lg:h-64 py-8 px-7 lg:px-9 flex flex-col items-center lg:flex-row lg:items-start gap-5'>
          <div className='px-2 flex flex-col items-center lg:items-start lg:w-5/12 gap-2'>
            <h1 className='text-4xl lg:text-3xl font-bold text-zinc-100 pb-2'>Cowork</h1>
            <p className='font-light text-sm tracking-wide text-zinc-100 text-center lg:text-left leading-5 pb-1'>Join our newsletter to stay upto date with features and releases.</p>
            <div className='py-2 flex flex-col lg:flex-row items-center lg:items-start gap-5 lg:py-1'>
              <input className='w-full lg:w-2/5 bg-zinc-900 border-b-2 border-zinc-400 font-thin text-xs tracking-wider text-zinc-400 p-1' type="text" value={"Enter your email"}/>
              <a className='h-9 text-xs bg-zinc-100 pt-1 font-bold w-24 flex items-center justify-center pb-1 rounded-3xl border-black border-2'>
              Subscribe
              </a>
            </div>
            <p className='font-light text-sm tracking-wide text-zinc-100 text-center lg:text-left leading-5 pb-3 lg:pb-1'>By submitting you agree with our policy and provide consent to receive updates form our company.</p>
          </div>
          <div className='flex flex-col lg:flex-row justify-evenly gap-5 w-7/12 text-zinc-100 text-center lg:text-left'>
            <div className='flex gap-2 flex-col lg:gap-4 items-center lg:items-start'>
                <h2 className='text-zinc-100 font-bold text-xs w-36'>EXPLORE MORE</h2>
                <h3 className='text-xs font-thin'>Home</h3>
                <h3 className='text-xs font-thin'>About</h3>
                <h3 className='text-xs font-thin'>Pricing</h3>
                <h3 className='text-xs font-thin'>Blog</h3>
                <h3 className='text-xs font-thin'>Events</h3>
            </div>
            <div className='flex gap-2 flex-col lg:gap-4 items-center lg:items-start'>
                <h2 className='text-zinc-100 font-bold text-xs w-36'>STAY CONNECTED</h2>
                <h3 className='text-xs font-thin'>Subscribe</h3>
                <h3 className='text-xs font-thin'>Member Stories</h3>
                <h3 className='text-xs font-thin'>Locations</h3>
                <h3 className='text-xs font-thin'>Write for Us</h3>
            </div>
            <div className='flex gap-2 flex-col lg:gap-4 items-center lg:items-start'>
                <h2 className='text-zinc-100 font-bold text-xs w-36'>FOLLOW US</h2>
                <h3 className='text-xs font-thin'>Facebook</h3>
                <h3 className='text-xs font-thin'>Instagram</h3>
                <h3 className='text-xs font-thin'>X</h3>
                <h3 className='text-xs font-thin'>Linkedin</h3>
                <h3 className='text-xs font-thin'>Youtube</h3>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start'>
          <p className='text-xs font-light pt-4 pb-1 lg:p-4'>@2024 Cowork. All Rights Reserved.</p>
          <div className='flex text-xs font-normal w-full justify-evenly py-4 lg:w-1/4 underline underline-offset-2'>
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
            <a href="">Cookie Settings</a>
          </div>
        </div>
    </div>
  )
}

export default Footer
