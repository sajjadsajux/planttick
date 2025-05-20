import React from "react";
import { useLoaderData } from "react-router";

const MyPlants = () => {
  const myplants = useLoaderData();
  console.log(myplants);
  return (
    <div>
      <h2>My Plants</h2>
    </div>
  );
};

export default MyPlants;
