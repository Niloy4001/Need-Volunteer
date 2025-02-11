import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../context/AuthProvider";
import { format } from "date-fns";
import axios from "axios";
import Swal from "sweetalert2";

import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const AddPost = () => {
  const { user } = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();

  const handleAdd = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // (formData);
    const obj = Object.fromEntries(formData.entries());
    obj.deadline = format(new Date(selectedDate), "P");
    obj.organizer = {
      name: user?.displayName,
      email: user?.email,
    };

    axiosSecure
      .post(`addPost?email=${user.email}`, obj)
      .then(function (response) {
        if (response.data.acknowledged) {
          Swal.fire({
            title: "Post Added Successfully",
            icon: "success",
            confirmButtonColor: "#2196F3",
          });
        }
        e.target.reset();
      })
      .catch(function (error) {});
  };
  return (
    <div className="py-7 md:py-16">
      <Helmet>
        <title>Add Post | NEED VOLUNTEER</title>
      </Helmet>
      <form
        onSubmit={handleAdd}
        className="max-w-lg mx-auto p-4 border border-gray-200 shadow rounded"
      >
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-text">
          Add Volunteer Post
        </h2>

        {/* Thumbnail */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-text">Thumbnail URL</label>
          <input
            type="text"
            name="thumbnail"
            placeholder="Enter thumbnail URL"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Post Title */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-text">Post Title</label>
          <input
            type="text"
            name="postTitle"
            placeholder="Enter post title"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-text">Description</label>
          <textarea
            name="description"
            placeholder="Enter description"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          ></textarea>
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-text">Category</label>
          <select
            name="category"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
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
          <label className="block mb-2 font-medium text-text">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Number of Volunteers Needed */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-text">
            No. of Volunteers Needed
          </label>
          <input
            type="number"
            name="volunteersNeeded"
            placeholder="Enter number of volunteers needed"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Deadline */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-text">Deadline</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            dateFormat="yyyy-MM-dd"
            required
          />
        </div>

        {/* Organizer Name and Email (Read-Only) */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-text">Organizer Name</label>
          <input
            type="text"
            defaultValue={user?.displayName}
            readOnly
            className="w-full border border-gray-300 bg-gray-100 rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-text">Organizer Email</label>
          <input
            type="email"
            defaultValue={user?.email}
            readOnly
            className="w-full border border-gray-300 bg-gray-100 rounded px-3 py-2"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 rounded-lgtext-white hover:bg-blue-600 hover:text-accent bg-blue-600 text-white transition"
          >
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
