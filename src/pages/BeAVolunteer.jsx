import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import DatePicker from "react-datepicker";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const BeAVolunteer = () => {
  const { user } = useContext(AuthContext);
const {data} = useLoaderData();


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
  } = data || {};
    // console.log(post);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    const volunteerName = e.target.volunteerName.value;
    const volunteerEmail = e.target.volunteerEmail.value;
    const suggestion = e.target.suggestion.value;

    
    const newObj = {...data}
    delete newObj._id
    newObj.postId = _id
    newObj.suggestion = suggestion
    newObj.volunteer = {name:volunteerName, email:volunteerEmail}


    axios
    .post("http://localhost:4000/addVolunteer", newObj)
    .then(function (response) {
      Swal.fire({
        title: "Request Submitted",
        icon: "success",
      });
      e.target.reset();
    })
    .catch(function (error) {
      console.log(error);
    });

    console.log(newObj);
    
    
  };

  return (
    <div className="py-7 md:py-14">
      <Helmet>
        <title>Be a volunteer | NEED VOLUNTEER</title>
      </Helmet>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-4 border border-gray-200 shadow rounded"
      >
        <h2 className="text-xl font-bold mb-4">Add Volunteer Post</h2>

        {/* Thumbnail */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Thumbnail URL</label>
          <input
            type="text"
            name="thumbnail"
            placeholder="Enter thumbnail URL"
            className="w-full border border-gray-300 rounded px-3 py-2"
            defaultValue={thumbnail}
            readOnly
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
            readOnly
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
            readOnly
            defaultValue={description}
          ></textarea>
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Category</label>
          <select
            name="category"
            className="w-full border border-gray-300 rounded px-3 py-2"
            readOnly
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
            readOnly
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
            readOnly
            defaultValue={volunteersNeeded}
          />
        </div>

        {/* Deadline */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Deadline</label>
          <DatePicker
            selected={deadline}
            // onChange={(date) => setSelectedDate(date)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            dateFormat="yyyy-MM-dd"
            readOnly
            defaultValue={deadline}
          />
        </div>

        {/* Organizer Name and Email (Read-Only) */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Organizer Name</label>
          <input
            type="text"
            defaultValue={organizer.name}
            readOnly
            className="w-full border border-gray-300 bg-gray-100 rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Organizer Email</label>
          <input
            type="email"
            defaultValue={organizer.email}
            readOnly
            className="w-full border border-gray-300 bg-gray-100 rounded px-3 py-2"
          />
        </div>
        {/* Volunteer Name and Email (Read-Only) */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Volunteer Name</label>
          <input
            name="volunteerName"
            type="text"
            defaultValue={user?.displayName}
            readOnly
            className="w-full border border-gray-300 bg-gray-100 rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Volunteer Email</label>
          <input
            name="volunteerEmail"
            type="email"
            defaultValue={user?.email}
            readOnly
            className="w-full border border-gray-300 bg-gray-100 rounded px-3 py-2"
          />
        </div>
        {/* Suggestion */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Suggestion</label>
          <textarea
            name="suggestion"
            placeholder="Suggestion"
            className="w-full border border-gray-300 rounded px-3 py-2"
          ></textarea>
        </div>
        <div>status : {status}</div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default BeAVolunteer;
