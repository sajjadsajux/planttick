import React from "react";
import NewPlantCard from "../Components/NewPlantCard";
import { useLoaderData } from "react-router";
import SetTitle from "../Utilities/SetTitle";

const NewPlantDetails = () => {
  const newPlant = useLoaderData();
  // console.log(newPlant);
  SetTitle(`Plant Details - ${newPlant.plantname}`);

  return (
    <section className="py-12  min-h-screen">
      <div className="container mx-auto px-4  max-w-5xl">
        <h2 className="text-3xl font-bold text-green-700  text-center mb-8">Plant Details</h2>
        <NewPlantCard key={newPlant._id} plant={newPlant} />
      </div>
    </section>
  );
};

export default NewPlantDetails;
