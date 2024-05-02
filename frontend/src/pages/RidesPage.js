import React from "react";
import Heading from "../components/common/Heading";
import Rides from "../components/home/Rides";

export default function Package() {
  return (
    <>
      <Heading heading="Boat-Rides" title="Home" subtitle="boat-rides" />
      <Rides />
    </>
  );
}
