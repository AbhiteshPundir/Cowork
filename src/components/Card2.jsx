import React from 'react';

const CourseCard = ({ blog }) => {
  return (
    <div className="w-[330px] lg:w-[350px] overflow-hidden bg-white">
      <img className="shadow-lg w-full rounded-3xl h-60 object-cover" src={blog.image} alt={blog.title} />
      <div className="flex items-center mt-4">
          <span className={`inline-block bg-${blog.color}-400/60 text-zinc-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-lg`}>{blog.genre}</span>
          <span className="text-gray-600 text-sm">{blog.readTime} min read</span>
      </div>
      <div className="lg:pt-4">
        <div className="font-bold text-2xl lg:text-xl lg:mb-2 pr-5">{blog.title}</div>
      </div>
      <a className="text-sm pb-3 lg:pb-3">
        {'Read more >'}
      </a>
    </div>
  );
};

export default CourseCard;
