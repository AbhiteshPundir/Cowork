import React from 'react'
import img from '../assets/purpleemb.jpeg'
import Card2 from './Card2'
import img1 from '../assets/c1.jpeg'
import img2 from '../assets/c2.jpeg'
import img3 from '../assets/c3.jpeg'
import Button from './Button'
const Blog = () => {
    const blogs = [
        {
          image: img1,
          title: 'Navigating the Future: Trends in Modern Coworking Spaces',
          readTime: 7,
          genre: 'Trending',
          color: 'blue' 
        },
        {
          image: img2,
          title: 'Mastering Productivity: Tips from Cowork\'s High Achievers',
          readTime: 6,
          genre: 'Productivity',
          color: 'red'
        },
        {
          image: img3,
          title: 'Tech Talk: The Backbone of Cowork\'s Seamless Experience',
          readTime: 10,
          genre: 'Talk',
          color: 'green'
        }
      ];
  return (
    <div className='bg-white h-fit w-full flex flex-col items-center p-3 lg:p-7 my-10'>
        <div className='flex flex-col items-center'>
            <h1 className='text-xs font-bold'>COWORK CHRONICLES</h1>
            <p className='font-bold text-[28px] lg:text-[53px] lg:tracking-wider'>Insights, Innovation, and</p>
            <div className='flex items-center'>
                <img className='h-9 w-20 lg:h-14 lg:w-40 rounded-[50px] shadow-md shadow-zinc-400/90' src={img} alt="embeded" />
                <p className='font-bold text-[28px] lg:text-[53px] lg:tracking-wider'>&nbsp;Inspiration</p>
            </div>
        </div>
        <div className='text-sm lg:text-[12px] text-center lg:pt-2 leading-6 lg:w-1/2 mb-8'>Stay updated on the latest trends in coworking, productivity tips, and success stories that define the Cowork experience.</div>
        <div className='flex flex-col lg:flex-row gap-7 lg:gap-0 justify-evenly lg:w-4/5 lg:py-4 my-5 lg:pb-7'>
        {blogs.map((blog, index) => (
          <Card2 key={index} blog={blog} />
        ))}
        </div>
        <Button content={'View All'}/>
    </div>
  )
}

export default Blog
