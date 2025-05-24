import React from "react";
import { useLoaderData } from "react-router";
import SetTitle from "../Utilities/SetTitle";

const AllPlantDetails = () => {
  const plant = useLoaderData();
  SetTitle(`Plant Details - ${plant.plantname}`);

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8  container mx-auto lg:h-[100vh] flex items-center justify-center ">
      <div className="max-w-6xl mx-auto bg-base-300 backdrop-blur-md border border-green-200 rounded-3xl shadow-2xl p-8 transition duration-300 hover:shadow-green-200 transform hover:scale-105">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Plant Image */}
          <div className="w-full md:w-80 flex-shrink-0">
            <img src={plant.image} alt={plant.plantname} className="w-full h-80 object-cover rounded-2xl shadow-lg border-4 border-green-300" />
          </div>

          {/* Plant Info */}
          <div className="flex-1 space-y-5 ">
            <h2 className="text-4xl font-bold text-green-700">{plant.plantname}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p>
                  <span className="font-semibold text-green-800">Category:</span> {plant.category}
                </p>
                <p>
                  <span className="font-semibold text-green-800">Care Level:</span> {plant.careLevel}
                </p>
                <p>
                  <span className="font-semibold text-green-800">Watering:</span> Every {plant.wateringFrequency} days
                </p>
                <p>
                  <span className="font-semibold text-green-800">Added Date:</span> {new Date(plant.addedDate).toLocaleDateString()}
                </p>
              </div>

              <div className="space-y-2">
                <p>
                  <span className="font-semibold text-green-800">Last Watered:</span> {new Date(plant.lastWatered).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-semibold text-green-800">Next Watering:</span> {new Date(plant.nextWatering).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-semibold text-green-800">Health Status:</span> {plant.healthStatus}
                </p>
              </div>
            </div>
            <p className="mt-4  leading-relaxed">
              <span className="font-semibold">Description:</span> {plant.description}
            </p>
            <p className="text-sm  mt-3">Added by {plant.name}</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPlantDetails;
