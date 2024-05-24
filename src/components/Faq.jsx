import React, { useState } from 'react';
import { TbCircleChevronUp } from "react-icons/tb";
import { TbCircleChevronDown } from "react-icons/tb";
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const faqData = [
    {
      question: "How flexible are Cowork's membership plans?",
      answer: "Cowork offers a variety of flexible membership plans tailored to fit different needs, from day passes to monthly memberships."
    },
    {
      question: "What kind of events and networking opportunities does Cowork provide?",
      answer: "Cowork hosts regular networking events, workshops, and seminars to help members connect and grow professionally."
    },
    {
      question: "Can I tour the Cowork space before committing to a membership?",
      answer: "Yes, you can schedule a tour to explore our facilities and see if it's the right fit for you."
    },
    {
      question: "Is Cowork suitable for remote teams and distributed workforces?",
      answer: "Absolutely. Cowork offers amenities and infrastructure to support remote teams and distributed workforces effectively."
    },
    {
      question: "What measures does Cowork take for environmental sustainability?",
      answer: "Cowork is committed to sustainability with measures such as energy-efficient lighting, recycling programs, and more."
    },
    {
      question: "Still have questions?",
      answer: "Contact us at "
    }
  ];

  return (
    <div className='flex flex-col justify-evenly lg:flex-row pt-20 h-fit w-full px-5 lg:px-12'>
        <div className='lg:w-5/12 flex-col text-center lg:text-left px-5'>
          <h1 className='text-xs font-bold mb-3'>FREQUENTLY ASKED QUESTIONS</h1>
          <h1 className='font-bold text-[28px] lg:text-[53px] lg:tracking-wider'>Your Roadmap To Coworking Clarity</h1>
          <p className='text-sm lg:text-[14px] text-center lg:pt-2 leading-6 lg:w-4/5 my-3 lg:text-left'>Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.</p>
        </div>
        <div className="lg:p-6 lg:w-1/2">
        {
            faqData.map((faq, index) => (
            <div key={index} className="mb-4">
            <button 
                onClick={() => toggleFAQ(index)} 
                className="flex justify-between items-center w-full p-4 bg-white rounded-lg focus:outline-none"
            >
                <span className="font-semibold text-sm w-2/3 text-left lg:w-auto">{faq.question}</span>
                <span>{openIndex === index ? <TbCircleChevronUp size={23}/> : <TbCircleChevronDown size={23}/>}</span>
            </button>
            {openIndex === index && (
                <div className="lg:w-1/2 mt-2 px-4 pb-4 text-sm font-thin bg-white rounded-lg">
                {faq.answer}
                </div>
            )}
            </div>
        ))}
        </div>
    </div>
  );
};

export default Faq;
