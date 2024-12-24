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
  console.log(search);

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
        <h1 className="text-center">All Post</h1>
        {/* search functionality */}
        <div>
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
          <p onClick={() => setGrid("grid")}><BsGrid3X3GapFill /></p>
          <p onClick={() => setGrid("table")}><PiTableBold /></p>
        </div>
        {/* all post */}
        {grid === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              posts.length > 0 &&
                posts.map((post) => (
                  <div
                    key={post._id}
                    className="w-full rounded overflow-hidden shadow-lg border border-gray-200"
                  >
                    <img
                      className="w-full h-48 object-cover"
                      src={post.thumbnail}
                      alt={post.postTitle}
                    />
                    <div className="px-6 py-4">
                      <h3 className="text-xl font-bold text-gray-800">
                        {post.postTitle}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">
                        Category:{" "}
                        <span className="font-semibold">{post.category}</span>
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        Deadline:{" "}
                        <span className="font-semibold">{post.deadline}</span>
                      </p>
                    </div>
                    <div className="px-6 py-4">
                      <Link to={`/detailsPost/${post._id}`}>
                        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                          View Details
                        </button>
                      </Link>
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
