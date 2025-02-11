import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SkeletonLoader from "./SkeletonLoader";

const VolunteerNeedsNow = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://need-volunteer-server.vercel.app/needVolunteerPost")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="w-[90%] mx-auto py-7 md:py-12 lg:py-16">
      <h1 className="text-left text-xl md:text-2xl lg:text-3xl text-text font-bold mb-6">
        Volunteer Needs Now
      </h1>
      {posts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="w-full bg-white rounded-xl shadow-lg shadow-[#E3F2FD] overflow-hidden"
            >
              <img
                src={post.thumbnail}
                alt="Tech Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col h-[200px] relative justify-between">
                <span className="absolute -top-44 right-2 px-2 py-1 text-sm font-semibold text-white bg-secondary rounded-full mb-3">
                  {post.category}
                </span>
                <h2 className="text-lg font-bold text-text mb-2">
                  {post.postTitle}
                </h2>
                <p className="text-secondary text-sm mb-4">{post.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="ml-3 text-primary">
                      <p className="text-sm font-medium ">
                        Deadline
                      </p>
                      <p className="text-xs ">{post.deadline} </p>
                    </div>
                  </div>
                  <div>
                    <Link to={`/detailsPost/${post._id}`}>
                      <button className="btn btn-sm text-white hover:bg-blue-600 hover:text-accent bg-blue-600">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {posts.length < 1 && (
        <div className="w-full h-400px flex justify-center items-center">
          {/* <span className="loading loading-bars loading-lg"></span> */}
          <SkeletonLoader></SkeletonLoader>
        </div>
      )}
      <div className="flex justify-center py-6">
        <Link
          to={"/allPost"}
          className="btn btn-md text-white hover:bg-blue-600 hover:text-accent bg-blue-600 mt-7"
        >
          <button>See All</button>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerNeedsNow;
