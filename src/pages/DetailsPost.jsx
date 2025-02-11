import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";
import background from "../assets/cool-background-small.png";
import useAxiosSecure from "../hooks/useAxiosSecure";

const DetailsPost = () => {
  const axiosSecure = useAxiosSecure();
  const params = useParams();
  // const {data} = useLoaderData();
  const [data, setData] = useState();

  useEffect(() => {
    axiosSecure
      .get(`https://need-volunteer-server.vercel.app/post/${params.id}`)
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="w-[90%] mx-auto py-7 md:py-14 text-text">
      <Helmet>
        <title>Details | NEED VOLUNTEER</title>
      </Helmet>
      {data && (
        <div className="card lg:card-side bg-white grid grid-cols-1 lg:grid-cols-3 shadow-xl">
          <figure>
            <img src={data?.thumbnail} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data.postTitle}</h2>
            <p>{data.description} </p>
            <p>
              <span className="font-medium">Category : </span> {data.category}{" "}
            </p>
            <p>
              <span className="font-medium">Location : </span>
              {data.location}{" "}
            </p>
            <p>
              <span className="font-medium">Number of Vol. need : </span>
              {data.volunteersNeeded}{" "}
            </p>
            <p>
              <span className="font-medium">Deadline : </span>
              {data.deadline}{" "}
            </p>
            <p>
              <span className="font-medium">Organizer Information : </span>
            </p>
            <p>
              <span className="font-medium">Organizer Name : </span>
              {data.organizer.name}{" "}
            </p>
            <p>
              <span className="font-medium">Organizer Email : </span>
              {data.organizer.email}{" "}
            </p>
            <div className="card-actions ">
              <Link to={`/beAVolunteer/${data._id}`}>
                <button className="w-full btn text-white hover:bg-blue-600 hover:text-accent bg-blue-600 transition">
                  Be a Voluenteer
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img src={background} alt="" className="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPost;
