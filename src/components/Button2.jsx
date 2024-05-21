import React from 'react'
import { NavLink } from 'react-router-dom'

const Button2 = ({content}) => {
  return (
    <NavLink className='h-11 text-zinc-50 text-sm bg-zinc-900 font-semibold w-fit px-6 flex items-center justify-center pt-1 pb-2 rounded-3xl border-2 border-zinc-900'>
      {content}
    </NavLink>
  )
}

export default Button2
