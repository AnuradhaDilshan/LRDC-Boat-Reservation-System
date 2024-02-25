import React from "react";
import Layout from "../components/Layout/Layout";
import Slider from "../components/Layout/Slider.js";
import Body from "../components/Layout/Body.js";

const HomePage = () => {
  return (
    <Layout title={"LRDC Boat Reservation System | Home Page"}>
      <Slider />
      <Body />
    </Layout>
  );
};

export default HomePage;
