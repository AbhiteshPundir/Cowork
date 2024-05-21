import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({content}) => {
  return (
    <NavLink className='h-11 bg-white text-sm font-semibold w-fit px-6 flex items-center justify-center pt-1 pb-2 rounded-3xl border-black border-2'>
      {content}
    </NavLink>
  )
}

export default Button
