import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { MdCancel } from "react-icons/md";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyVolunteerRequestPost = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axiosSecure
      .get(`myRequestedPost?email=${user.email}`)
      .then((res) => setPosts(res.data));
  }, []);

  const handleDelete = (id, postId) => {
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
          .delete(
            `https://need-volunteer-server.vercel.app/deleteRequestedPost/${id}?postId=${postId}`
          )
          .then(function (response) {
            if (response.data.deletedCount === 1) {
              Swal.fire({
                title: "Cancelled!",
                text: "Your file has been canceled.",
                icon: "success",
              });
              const remaining = posts.filter((post) => post._id !== id);
              setPosts(remaining);
            }
            response.data;
          })
          .catch(function (error) {});
      }
    });
  };

  return (
    <div>
      <h1 className="text-left text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-text">
        My Volunteer Request Post
      </h1>
      <div className="overflow-x-auto bg-white p-5">
        <table className="table">
          {/* head */}
          <thead className="bg-blue-600 text-white">
            <tr>
              <th>Title</th>
              <th>Organizer</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-text">
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
                    {post.organizer.name}
                    <br />
                    <span className="badge badge-ghost bg-blue-600 text-white badge-sm">
                      {post.organizer.email}
                    </span>
                  </td>
                  <td>{post.status}</td>
                  <th className="space-x-1">
                    <button
                      onClick={() => handleDelete(post._id, post.postId)}
                      className="btn btn-ghost btn-xs text-xl hover:text-red-500"
                    >
                      <MdCancel />
                    </button>
                  </th>
                </tr>
              ))}
            {posts.length < 1 && (
              <tr>
                <td className="col-span-4 text-center font-medium text-base md:text-xl lg:text-2xl">
                  You did not request to become a Volunteer
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyVolunteerRequestPost;
