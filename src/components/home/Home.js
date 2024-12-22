import React from "react";
import Carousel from "./Carousel";
import About from "./About";
import Services from "./Service";
import Rides from "./Rides";
import Sliders from "./Slider";
import Posters from "./Posters";

export default function Home() {
  return (
    <>
      <Carousel />
      <About />
      <Rides />
      <Services />
      <Posters />
      <Sliders />
    </>
  );
}
