import React from "react";
import { useLoaderData } from "react-router";
import AllPlantsCard from "./AllPlantsCard";

const AllPlants = () => {
  const plants = useLoaderData();
  console.log(plants);
  return (
    <div>
      <h2>AllPlants</h2>
      <div>
        <AllPlantsCard plants={plants}></AllPlantsCard>
      </div>
    </div>
  );
};

export default AllPlants;
