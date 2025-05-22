import React from "react";
import { useLoaderData } from "react-router";
import AllPlantsCard from "./AllPlantsCard";
import SetTitle from "../Utilities/SetTitle";

const AllPlants = () => {
  const plants = useLoaderData();
  // console.log(plants);
  SetTitle("All Plants");

  return (
    <div>
      <div>
        <AllPlantsCard plants={plants}></AllPlantsCard>
      </div>
    </div>
  );
};

export default AllPlants;
