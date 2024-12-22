import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const DetailsPost = () => {
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
  } = post || {};
//   console.log(post);

  return (
    <div className="w-[90%] mx-auto py-7 md:py-14">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{postTitle}</h2>
          <p>{description} </p>
          <p>{category} </p>
          <p>{location} </p>
          <p>{volunteersNeeded} </p>
          <p>{deadline} </p>
          <p>{organizer.name} </p>
          <p>{organizer.email} </p>
          <div className="card-actions ">
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              <Link to={`/beAVolunteer/${_id}`}>Be a Voluenteer</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPost;
