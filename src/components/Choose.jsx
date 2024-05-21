import React from 'react'
import img from '../assets/emb.jpeg'
import { BiSolidPlanet } from "react-icons/bi";
import { PiCreditCardFill } from "react-icons/pi";
import { PiUserListFill } from "react-icons/pi";

import Infocard from './Infocard'

const Choose = () => {
  const icon1 = (
    <BiSolidPlanet size={37}/>
  );
  const icon2 = (
    <PiCreditCardFill size={37}/>
  );
  const icon3 = <PiUserListFill size={37}/>;

  return (
    <div className='bg-white w-full h-fit flex flex-col items-center gap-10 p-5 lg:my-10'>
        <div className='flex flex-col gap-2 lg:gap-0 lg:flex-row items-center flex-wrap lg:p-5'>
            <div className='flex items-center'> 
              <p className='font-bold text-3xl lg:text-[53px] lg:tracking-wider'>Why Choose&nbsp;</p>
              <img className='h-9 w-20 lg:h-14 lg:w-40 rounded-[50px] shadow-md shadow-zinc-400/90' src={img} alt="embeded" />
            </div>
            <p className='font-bold text-3xl lg:text-[50px] lg:tracking-wider'>&nbsp;Cowork?</p>
        </div>
        <div className='flex flex-col lg:flex-row px-5 lg:gap-7'>
          <Infocard icon={icon1} title={'Flexible Spaces'} col={'green'} content={'Whether you\'re a solopreneur, startup, or an established enterprise, our flexible office solutions cater to your evolving needs.'}/>
          <Infocard icon={icon2} title={'Transparent Pricing'} col={'blue'} content={'Choose a plan that suits your budget and business objectives, and experience the value of a premium coworking space without breaking the bank.'}/>
          <Infocard icon={icon3} title={'Tailored Membership'} col={'red'} content={'Whether you prefer the flexibility of a hot desk or the exclusivity of a private office, Cowork offers tailored solutions to suit every working style.'}/>

        </div>
    </div>
  )
}

export default Choose
