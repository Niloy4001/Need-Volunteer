import React from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import background from "../assets/cool-background-small.png"


const DetailsPost = () => {
  const {data} = useLoaderData();
  // (data);
  // (getUser);
  
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
  } = data || {};
  //   (post);

  return (
    <div className="w-[90%] mx-auto py-7 md:py-14">
      <Helmet>
        <title>Details{_id} | NEED VOLUNTEER</title>
      </Helmet>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={thumbnail}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{postTitle}</h2>
          <p>{description} </p>
          <p><span className="font-medium">Category : </span> {category} </p>
          <p><span className="font-medium">Location : </span>{location} </p>
          <p><span className="font-medium">Number of Vol. need : </span>{volunteersNeeded} </p>
          <p><span className="font-medium">Deadline : </span>{deadline} </p>
          <p><span className="font-medium">Organizer Information : </span></p>
          <p><span className="font-medium">Organizer Name : </span>{organizer.name} </p>
          <p><span className="font-medium">Organizer Email : </span>{organizer.email} </p>
          <div className="card-actions ">
            <Link to={`/beAVolunteer/${_id}`}>
              <button className="w-full bg-[#2B3440] text-white btn hover:bg-[#2B3440] transition">
                Be a Voluenteer
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={background} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DetailsPost;
