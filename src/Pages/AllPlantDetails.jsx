import React from "react";
import { useLoaderData } from "react-router";

const AllPlantDetails = () => {
  const plant = useLoaderData();
  return (
    <div>
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-3xl shadow-xl">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Plant Image */}
          <div className="flex-shrink-0">
            <img src={plant.image} alt={plant.plantname} className="w-72 h-72 object-cover rounded-2xl shadow-lg border-4 border-green-300" />
          </div>

          {/* Plant Info */}
          <div className="flex-1 space-y-4 text-gray-800">
            <h2 className="text-4xl font-bold text-green-700">{plant.plantname}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p>
                  <span className="font-semibold">Category:</span> {plant.category}
                </p>
                <p>
                  <span className="font-semibold">Care Level:</span> {plant.careLevel}
                </p>
                <p>
                  <span className="font-semibold">Watering:</span> Every {plant.wateringFrequency} days
                </p>
              </div>
              <div>
                <p>
                  <span className="font-semibold">Last Watered:</span>{" "}
                  {new Date(plant.lastWatered).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p>
                  <span className="font-semibold">Next Watering:</span>{" "}
                  {new Date(plant.nextWatering).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>

                <p>
                  <span className="font-semibold">Health:</span> {plant.healthStatus}
                </p>
              </div>
            </div>
            <p className="mt-4">
              <span className="font-semibold">📝 Description:</span> {plant.description}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              👤 Added by {plant.name} ({plant.email})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPlantDetails;
