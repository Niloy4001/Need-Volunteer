import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { PiTableBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const AllPost = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [grid, setGrid] = useState("grid");
  (search);

  useEffect(() => {
    fetch(`http://localhost:4000/allPost?search=${search}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [search]);
  return (
    <div className="py-8 md:py-14">
      <Helmet>
        <title>All Post | NEED VOLUNTEER</title>
      </Helmet>
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between flex-col md:flex-row py-6">
          <h1 className=" text-left text-xl md:text-2xl lg:text-3xl font-bold mb-6">
            All Volunteer Need Post
          </h1>
          {/* search functionality */}
          <div className="flex items-center gap-2">
            <label className="input input-bordered flex items-center gap-2">
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="grow"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <p className="text-xl cursor-pointer" onClick={() => setGrid("grid")}>
              <BsGrid3X3GapFill />
            </p>
            <p className="text-2xl cursor-pointer" onClick={() => setGrid("table")}>
              <PiTableBold />
            </p>
          </div>
        </div>

        {/* all post */}
        {grid === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              posts.length > 0 &&
                posts.map((post) => (
                  <div
                    key={post._id}
                    className="w-full bg-white rounded-xl shadow-lg overflow-hidden"
                  >
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
                            <p className="text-xs text-gray-500">
                              {post.deadline}{" "}
                            </p>
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

              // :
              //  (
              //   <div>
              //     <span className="loading loading-ring loading-lg"></span>
              //   </div>
              // )
            }
          </div>
        ) : (
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Deadline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {posts.length > 0 &&
                posts.map((post) => (
                  <tr key={post._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={post.thumbnail} alt={post.postTitle} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{post.postTitle} </div>
                          <div className="text-sm opacity-50">
                            {post.location}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {post.category}
                      <br />
                    </td>
                    <td>{post.deadline}</td>
                    <th className="space-x-1">
                      <Link to={`/detailsPost/${post._id}`}>
                        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                          View Details
                        </button>
                      </Link>
                    </th>
                  </tr>
                ))}
              {posts.length < 1 && (
                <tr>
                  <td className="col-span-4 text-center font-medium text-lg md:text-2xl lg:text-3xl">
                    You did not request to become a Volunteer
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
        {/* grid */}

        {/* table */}
      </div>
    </div>
  );
};

export default AllPost;
