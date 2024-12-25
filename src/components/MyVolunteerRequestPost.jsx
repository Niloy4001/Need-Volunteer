import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { MdCancel } from "react-icons/md";
import Swal from "sweetalert2";
import axios from "axios";

const MyVolunteerRequestPost = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  // (posts);

  useEffect(() => {
    // fetch(`https://need-volunteer-server.vercel.app/myRequestedPost?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => setPosts(data));

      axios.get(`https://need-volunteer-server.vercel.app/myRequestedPost?email=${user.email}`,{withCredentials:true})
      // axios.get(`https://need-volunteer-server.vercel.app/myRequestedPost?email=introvertpro2@gmail.com`,{withCredentials:true})
      .then(res => setPosts(res.data))
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
          .delete(`https://need-volunteer-server.vercel.app/deleteRequestedPost/${id}`)
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
            (response.data);
          })
          .catch(function (error) {
            (error);
          });

      
      }
    });
  };

  return (
    <div>
      <h1 className="text-left text-xl md:text-2xl lg:text-3xl font-bold mb-6">My Volunteer Request Post</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
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
                    <span className="badge badge-ghost badge-sm">
                      {post.organizer.email}
                    </span>
                  </td>
                  <td>{post.volunteersNeeded}</td>
                  <th className="space-x-1">
                   <button 
                   onClick={() => handleDelete(post._id)}
                   className="btn btn-ghost btn-xs text-xl hover:text-red-500"><MdCancel /></button>
                  </th>
                </tr>
              ))}
            {posts.length < 1 && (
              <tr><td className="col-span-4 text-center font-medium text-lg md:text-2xl lg:text-3xl">You did not request to become a Volunteer</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyVolunteerRequestPost;
