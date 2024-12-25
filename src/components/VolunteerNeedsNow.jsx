import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VolunteerNeedsNow = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/needVolunteerPost")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="w-[90%] mx-auto py-7 md:py-12 lg:py-16">
      <h1 className="text-left text-xl md:text-2xl lg:text-3xl font-bold mb-6">
        Volunteer Needs Now
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={post.thumbnail}
                alt="Tech Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full mb-3">
                  {post.category}
                </span>
                <h2 className="text-lg font-bold text-gray-800 mb-2">
                  {post.postTitle}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-800">
                        Deadline
                      </p>
                      <p className="text-xs text-gray-500">{post.deadline} </p>
                    </div>
                  </div>
                  <div>
                    <Link to={`/detailsPost/${post._id}`}>
                      <button className="btn btn-sm text-white hover:bg-[#2B3440] bg-[#2B3440]">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="min-h-40 flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
      </div>
      <div className="flex justify-center py-6">
        <Link to={"/allPost"} className="btn btn-md bg-[#2B3440] hover:bg-[#2B3440] text-white mt-7">
          <button>See All</button>
        </Link>
      </div>

    </div>
  );
};

export default VolunteerNeedsNow;
