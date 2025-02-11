import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyVolunteerNeedPost = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axiosSecure
      .get(`myNeedPost?email=${user.email}`)
      .then((res) => setPosts(res.data));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://need-volunteer-server.vercel.app/delete/${id}`)
          .then(function (response) {
            if (response.data.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = posts.filter((post) => post._id !== id);
              setPosts(remaining);
            }
            response.data;
          })
          .catch(function (error) {
            error;
          });
      }
    });
  };
  return (
    <div className="mb-9 md:mb-14">
      <h1 className="text-left text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-text">
        My Volunteer Need Post
      </h1>
      <div className="overflow-x-auto bg-white p-5">
        <table className="table">
          {/* head */}
          <thead className="bg-blue-600 text-white">
            <tr>
              <th>Title</th>
              <th>Deadline</th>
              <th>Organizer</th>
              <th>Need Volunteer</th>
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
                        <div className="font-bold text-text">{post.postTitle} </div>
                        <div className="text-sm opacity-50">
                          {post.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="text-text">{post.deadline}</p>
                  </td>
                  <td className="text-text">
                    {post.organizer.name}
                    <br />
                    <span className="badge badge-ghost bg-blue-600 text-white badge-sm">
                      {post.organizer.email}
                    </span>
                  </td>
                  <td className="text-text">{post.volunteersNeeded}</td>
                  <th className="space-x-1 text-text">
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="btn btn-ghost btn-xs text-xl hover:text-red-500"
                    >
                      <MdDeleteForever />
                    </button>
                    <Link
                      to={`/updatePost/${post._id}`}
                      className="btn btn-ghost btn-xs text-xl hover:text-blue-700"
                    >
                      <MdEdit />
                    </Link>
                  </th>
                </tr>
              ))}
            {posts.length < 1 && (
              <tr>
                <td className="col-span-4 text-center font-medium text-base md:text-xl lg:text-2xl">
                  No post Added by you
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyVolunteerNeedPost;
