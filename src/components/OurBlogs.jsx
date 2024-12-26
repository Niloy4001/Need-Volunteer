import axios from "axios";
import React, { useEffect, useState } from "react";

const OurBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("https://need-volunteer-server.vercel.app/blogs").then((res) => setBlogs(res.data));
  }, []);
  // console.log(blogs);

  return (
    <div className="w-[90%] mx-auto py-7 md:py-12 lg:py-16">
      <h1 className="text-left text-xl md:text-2xl lg:text-3xl font-bold mb-6">
        Our Blogs
      </h1>
      {blogs.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="w-full bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                className="w-full h-48 object-cover"
                src={blog.thumbnail}
                alt="Post Thumbnail"
              />
              <div className="p-4">
                <h2 className="text-xl text-black font-semibold mb-2">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">{blog.subTitle}</p>
                <p className="text-xs text-gray-500 mb-4">{blog.postedDate}</p>
                {/* button */}
                {/* <button className="px-4 py-2 text-sm text-white bg-gray-800 rounded hover:bg-gray-700">
                    Read...
                  </button> */}
                <div className=" collapse">
                  <input type="checkbox" className="peer min-h-0" />
                  <div className="btn bg-[#2B3440] btn-sm text-white collapse-title  ">
                    Read...
                  </div>
                  <div className="collapse-content  text-black ">
                    <p>{blog.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {blogs.length === 0 && (
        <div className="w-full h-400px flex justify-center items-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default OurBlogs;
