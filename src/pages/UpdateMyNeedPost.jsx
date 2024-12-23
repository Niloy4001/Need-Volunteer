import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { format } from "date-fns";

const UpdateMyNeedPost = () => {
  const { user } = useContext(AuthContext);
  const post = useLoaderData();
  const {
    _id,
    thumbnail,
    postTitle,
    description,
    category,
    location,
    volunteersNeeded,
    deadline,
    organizer,
    status,
  } = post || {};
  // console.log(postTitle);

  const [selectedDate, setSelectedDate] = useState(deadline);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    obj.deadline = format(new Date(selectedDate), "P");
    obj.status = status;
    obj.organizer = { name: user.displayName, email: user.email };
    console.log(obj);

    axios
    .put(`http://localhost:4000/update/${_id}`, obj)
    .then(function (response) {
      Swal.fire({
        title: "Your post Updated",
        icon: "success",
      });
      e.target.reset();
    })
    .catch(function (error) {
      console.log(error);
    });

    // console.log(newObj);
  };

  return (
    <div className="py-7 md:py-14">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-4 border border-gray-200 shadow rounded"
      >
        <h2 className="text-xl font-bold mb-4">Update Your Post</h2>

        {/* Thumbnail */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Thumbnail URL</label>
          <input
            type="text"
            name="thumbnail"
            placeholder="Enter thumbnail URL"
            className="w-full border border-gray-300 rounded px-3 py-2"
            defaultValue={thumbnail}
          />
        </div>

        {/* Post Title */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Post Title</label>
          <input
            type="text"
            name="postTitle"
            placeholder="Enter post title"
            className="w-full border border-gray-300 rounded px-3 py-2"
            defaultValue={postTitle}
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Description</label>
          <textarea
            name="description"
            placeholder="Enter description"
            className="w-full border border-gray-300 rounded px-3 py-2"
            defaultValue={description}
          ></textarea>
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Category</label>
          <select
            name="category"
            className="w-full border border-gray-300 rounded px-3 py-2"
            defaultValue={category}
          >
            <option value="">Select a category</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="social-service">Social Service</option>
            <option value="animal-welfare">Animal Welfare</option>
          </select>
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            className="w-full border border-gray-300 rounded px-3 py-2"
            defaultValue={location}
          />
        </div>

        {/* Number of Volunteers Needed */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            No. of Volunteers Needed
          </label>
          <input
            type="number"
            name="volunteersNeeded"
            placeholder="Enter number of volunteers needed"
            className="w-full border border-gray-300 rounded px-3 py-2"
            defaultValue={volunteersNeeded}
          />
        </div>

        {/* Deadline */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Deadline</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            dateFormat="yyyy-MM-dd"
            defaultValue={deadline}
          />
        </div>

        {/* Organizer Name and Email (Read-Only) */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Organizer Name</label>
          <input
            type="text"
            defaultValue={user.displayName}
            readOnly
            className="w-full border border-gray-300 bg-gray-100 rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Organizer Email</label>
          <input
            type="email"
            defaultValue={user.email}
            readOnly
            className="w-full border border-gray-300 bg-gray-100 rounded px-3 py-2"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Update Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMyNeedPost;
