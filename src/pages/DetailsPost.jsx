import React from "react";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Details{_id} | NEED VOLUNTEER</title>
      </Helmet>
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
            <Link to={`/beAVolunteer/${_id}`}>
              <button className="w-full bg-blue-500 text-white btn hover:bg-blue-600 transition">
                Be a Voluenteer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPost;
