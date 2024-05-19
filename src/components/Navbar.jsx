import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'
import Button2 from './Button2'
import { IoMenu } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`h-20 lg:px-20 sticky top-0 z-[20] ${isOpen? `bg-zinc-900`:`bg-white`} flex w-full mx-auto justify-between items-center`}>
      <h1 className={`font-[700] text-[40px] ml-8 ${isOpen?`text-zinc-100`:`text-zinc-900`}`}>Cowork</h1>
      <div className='hidden lg:block w-1/2'>
        <div className='flex text-md font-light gap-5 justify-between items-center p-2'>
          <NavLink className='hover:underline hover:underline-offset-4' to={'/about'}>
              About
          </NavLink>
          <NavLink className='hover:underline hover:underline-offset-4' to={'/pricing'}>
              Pricing
          </NavLink>
          <NavLink className='hover:underline hover:underline-offset-4' to={'/blog'}>
              Blog
          </NavLink>
          <NavLink className='hover:underline hover:underline-offset-4' to={'/events'}>
              Events
          </NavLink>
          <div className='flex justify-between items-center gap-5'>
              <Button content={'Log in'}/>
              <Button2 content={'Sign up'}/>
          </div>
        </div>
      </div>

      <button onClick={toggleMenu} className='lg:hidden bg-zinc-900 rounded-3xl w-12 h-9 text-white flex items-center justify-center mr-5' >
          {isOpen?<TfiClose size={18}/> : <IoMenu size={22}/>}
      </button>
      <div className={`p-8 h-screen w-screen absolute top-20 ${isOpen?`block`:`hidden`} bg-zinc-900 flex flex-col gap-40`}>
          <div className='flex flex-col gap-5 text-4xl tracking-wider font-semibold text-zinc-100'>
            <a>
                About
            </a>
            <a>
                Pricing
            </a>
            <a>
                Blog
            </a>
            <a>
                Events
            </a>
          </div>
          <div className='flex justify-end gap-3'>
            <Button content={'Sign up'}/>
            <Button2 content={'Log in'}/>
          </div>
      </div>
    </div>
  )
}

export default Navbar
