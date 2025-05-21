import React from "react";

const NewPlantCard = ({ plant }) => {
  return (
    <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-[1.01] duration-300 group max-w-7xl mx-auto">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-72 lg:h-auto">
        <img src={plant.image} alt={plant.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>

      {/* Info Section */}
      <div className="w-full lg:w-1/2 p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-green-800 mb-4">{plant.plantname}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-gray-700 text-base">
            <p>
              <span className="font-medium">Owner:</span> {plant.name}
            </p>
            <p>
              <span className="font-medium">Email:</span> {plant.email}
            </p>
            <p>
              <span className="font-medium">Category:</span> {plant.category}
            </p>
            <p>
              <span className="font-medium">Care Level:</span> {plant.careLevel}
            </p>
            <p>
              <span className="font-medium">Health:</span> {plant.healthStatus}
            </p>
            <p>
              <span className="font-medium">Last Watered:</span> {plant.lastWatered}
            </p>
            <p>
              <span className="font-medium">Next Watering:</span> {plant.nextWatering}
            </p>
            <p>
              <span className="font-medium">Watering Every:</span> {plant.wateringFrequency} days
            </p>
            <p>
              <span className="font-medium">Added:</span> {new Date(plant.addedDate).toLocaleDateString()}
            </p>
          </div>

          <p className="mt-5 text-gray-600 leading-relaxed">{plant.description}</p>
        </div>

        <div className="mt-8">
          <button className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg font-semibold transition duration-200 shadow-md">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default NewPlantCard;
