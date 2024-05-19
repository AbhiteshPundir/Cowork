import React from 'react'
import { NavLink } from 'react-router-dom'

const Button2 = ({content}) => {
  return (
    <a className='h-10 text-zinc-50 text-sm bg-zinc-900 font-semibold w-fit px-6 flex items-center justify-center pb-1 rounded-3xl border-2 border-zinc-900'>
      {content}
    </a>
  )
}

export default Button2
