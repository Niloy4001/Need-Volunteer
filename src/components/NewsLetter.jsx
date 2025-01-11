import React from "react";
import newsletter from '../assets/newsletter.png'

const NewsLetter = () => {
  return (
    <div className="flex items-center justify-center py-7 md:py-14 w-[90%] mx-auto">
      <div className="bg-white p-6  w-full grid grid-cols-1 items-center md:grid-cols-2 py-10">
        {/* left */}
        {/* Icon/Image */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 rounded-full p-6">
            <img src={newsletter} className="w-[200px] h-[200px]" alt="" />
          </div>
        </div>

        {/* right side */}
        <div>
          

          {/* Heading and Text */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold  text-text text-left">
            Subscribe to our Newsletter!
          </h2>
          <p className=" text-left mt-2 text-secondary">
            Subscribe to our newsletter and stay updated.
          </p>

          {/* Form */}
          <form className="mt-6">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <span className="px-3 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12H8m0 0L5 9m3 3l-3 3"
                  />
                </svg>
              </span>
              <input
                type="email"
                className="w-full px-4 py-2 text-gray-700 focus:outline-none"
                placeholder="Your email"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-lg mt-4 hover:bg-primary-dark"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
