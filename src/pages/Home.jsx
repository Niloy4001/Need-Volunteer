import React from "react";
import Slider from "../components/Slider";
import VolunteerNeedsNow from "../components/VolunteerNeedsNow";
import { Helmet } from "react-helmet-async";
import OurBlogs from "../components/OurBlogs";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | NEED VOLUNTEER</title>
      </Helmet>
      <Slider></Slider>
      <VolunteerNeedsNow></VolunteerNeedsNow>
      <OurBlogs></OurBlogs>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
