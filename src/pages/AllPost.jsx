import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { PiTableBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import SkeletonLoader from "../components/SkeletonLoader";

const AllPost = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [grid, setGrid] = useState("grid");
  

  const handleSort = (status) => {
    if (status === "asc") {
      const sorted = [...posts].sort(
        (a, b) => a.volunteersNeeded - b.volunteersNeeded
      );
      setPosts(sorted);
    }
    if (status === "dsc") {
      const sorted = [...posts].sort(
        (a, b) => b.volunteersNeeded - a.volunteersNeeded
      );
      setPosts(sorted);
    }

   
  };

  useEffect(() => {
    fetch(`https://need-volunteer-server.vercel.app/allPost?search=${search}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [search]);
  return (
    <div className="py-8 md:py-16">
      <Helmet>
        <title>All Post | NEED VOLUNTEER</title>
      </Helmet>
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between items-start md:items-center gap-4 flex-col md:flex-row py-6">
          <h1 className=" text-left text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-text">
            All Volunteer Need Post
          </h1>
          {/* sort */}
          {/* <button
            onClick={() => handleSort()}
            className="btn btn-sm bg-blue-600 text-white hover:bg-blue-600"
          >
            Sort By Volunteer Need Number
          </button> */}
          <details className="dropdown">
            <summary className="btn btn-sm bg-blue-600 text-white hover:bg-blue-600 m-1">
              Sort By Volunteer Need Number
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <button onClick={() => handleSort("asc")} className="btn btn-sm">
                <li>(A - Z) /ASC</li>
              </button>
              <button onClick={() => handleSort("dsc")} className="btn btn-sm">
                <li>(Z - A) /DSC</li>
              </button>
            </ul>
          </details>
          {/* search functionality */}
          <div className="flex items-center gap-2">
            <label className="input input-bordered flex items-center gap-2 border border-solid border-text">
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="grow "
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
            <p
              className="text-xl cursor-pointer text-text"
              onClick={() => setGrid("grid")}
            >
              <BsGrid3X3GapFill />
            </p>
            <p
              className="text-2xl cursor-pointer text-text"
              onClick={() => setGrid("table")}
            >
              <PiTableBold />
            </p>
          </div>
        </div>

        {/* all post */}
        {posts.length > 0 &&
          (grid === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="w-full bg-white rounded-xl shadow-lg overflow-hidden"
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
                    <p className="text-secondary text-sm mb-4">
                      {post.description}
                    </p>
                    <p className="text-text">
                      Number of Voulnteer Need: {post.volunteersNeeded}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="ml-3">
                          <p className="text-sm font-medium text-primary">
                            Deadline
                          </p>
                          <p className="text-xs text-primary">
                            {post.deadline}{" "}
                          </p>
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
          ) : (
            <div className="overflow-x-auto bg-white p-5 rounded-lg">
              <table className="table">
                <thead className="bg-blue-600 text-white ">
                  <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Deadline</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {posts.map((post) => (
                    <tr key={post._id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img src={post.thumbnail} alt={post.postTitle} />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold text-text">
                              {post.postTitle}{" "}
                            </div>
                            <div className="text-sm opacity-50">
                              {post.location}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-text">
                        {post.category}
                        <br />
                      </td>
                      <td className="text-text">{post.deadline}</td>
                      <th className="space-x-1">
                        <Link to={`/detailsPost/${post._id}`}>
                          <button className="w-full  btn rounded-lg text-white hover:bg-blue-600 hover:text-accent bg-blue-600 transition">
                            View Details
                          </button>
                        </Link>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        {posts.length < 1 && (
          <div className="w-full h-400px flex justify-center items-center">
            <SkeletonLoader></SkeletonLoader>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPost;
