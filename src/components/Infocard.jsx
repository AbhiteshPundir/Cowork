import React from 'react'

const Infocard = ({icon,col,content,title}) => {
  return (
    <div className='w-96 h-fit lg:h-64 rounded-2xl flex flex-col items-center gap-3 p-3 m-2'>
        <div className={`w-7 h-7 pr-3 bg-${col}-400/80 rounded-full`}>
            {icon}
        </div>
        <h1 className='font-semibold text-lg lg:text-xl pt-1 lg:pt-0'>
            {title}
        </h1>
        <p className='text-sm lg:text-[12px] text-center lg:pt-2 text leading-6'>{content}</p>
    </div>
  )
}

export default Infocard
