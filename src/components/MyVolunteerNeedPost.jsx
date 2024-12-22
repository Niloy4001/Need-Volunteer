import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const MyVolunteerNeedPost = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    fetch(`http://localhost:4000/myNeedPost?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      MyVolunteerNeedPost
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              {/* <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th> */}
              <th>Title</th>
              <th>Organizer</th>
              <th>Need Volunteer</th>
              <th></th>
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
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyVolunteerNeedPost;
