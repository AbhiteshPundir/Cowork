import React from 'react'
import img from '../assets/greenemb.jpeg'
import Button from './Button'
import big from '../assets/big.jpeg'
const Tour = () => {
  return (
    <div className='bg-white h-fit w-full flex flex-col items-center gap-5 p-5 lg:my-20'>
        <div className='flex flex-col items-center'>
          <h1 className='text-xs font-bold mb-3'>A VIRTUAL TOUR</h1>
          <p className='font-bold text-[23px] lg:text-[53px] lg:tracking-wider'>Explore Cowork Through Our</p>
          <div className='flex items-center'>
              <img className='h-9 w-20 lg:h-14 lg:w-40 rounded-[50px] shadow-md shadow-zinc-400/90' src={img} alt="embeded" />
              <p className='font-bold text-[23px] lg:text-[53px] lg:tracking-wider'>&nbsp;Lens</p>
          </div>
        </div>
        <p className='text-sm lg:text-[12px] text-center lg:pt-2 leading-6 lg:w-1/2 my-3'>Experience the essence of Cowork before setting foot in our dynamic spaces. Our immersive video tour gives you a sneak peek into the vibrant atmosphere, cutting-edge facilities, and collaborative energy that define the Cowork experience.</p>
        <Button content={'Explore Spaces'}/>
        <img className='brightness-[.65] object-cover h-[290px] w-[385px] lg:w-[950px] lg:h-[530px] rounded-[45px] mt-7' src={big} alt="" />
    </div>
  )
}

export default Tour
