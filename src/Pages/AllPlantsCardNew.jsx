import React from "react";
import { Link } from "react-router";

const AllPlantsCardNew = ({ plants }) => {
  return (
    <div>
      <div className="container mx-auto p-4 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {plants.map((plant) => (
            <div key={plant._id} className="bg-white dark:bg-base-300 shadow-md rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col">
              <img src={plant.image} alt={plant.plantname} className="w-full h-48 object-cover" />
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold text-primary mb-2">{plant.plantname}</h3>
                <p className="text-sm mb-1">
                  <strong>Category:</strong> {plant.category}
                </p>
                <p className="text-sm mb-1">
                  <strong>Next Watering:</strong>{" "}
                  {new Date(plant.nextWatering).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-sm mb-3">
                  <strong>Health:</strong> {plant.healthStatus}
                </p>
              </div>
              <div className="px-4 pb-4">
                <Link to={`/plant/${plant._id}`} className="block bg-primary text-white text-center py-2 rounded hover:bg-green-700 transition">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPlantsCardNew;
