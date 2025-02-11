import axios from "axios";
import React, { useEffect, useState } from "react";
import SkeletonLoader from "./SkeletonLoader";

const OurBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("https://need-volunteer-server.vercel.app/blogs")
      .then((res) => setBlogs(res.data));
  }, []);

  return (
    <div className="w-[90%] mx-auto py-7 md:py-12 lg:py-16">
      <h1 className="text-left text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-text">
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
                <h2 className="text-xl text-primary font-semibold mb-2">
                  {blog.title}
                </h2>
                <p className="text-sm  mb-4 text-secondary">{blog.subTitle}</p>
                <p className="text-xs text-primary mb-4">{blog.postedDate}</p>

                <div className=" collapse">
                  <input type="checkbox" className="peer min-h-0" />
                  <div className="btn text-white hover:bg-blue-600 hover:text-accent bg-blue-600 btn-sm  collapse-title  ">
                    Read...
                  </div>
                  <div className="collapse-content  text-primary ">
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
          <SkeletonLoader></SkeletonLoader>
        </div>
      )}
    </div>
  );
};

export default OurBlogs;
