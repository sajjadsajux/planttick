import React from "react";

const NewPlantCard = ({ plant }) => {
  return (
    <div className="container lg:h-[70vh] mx-auto flex justify-center items-center">
      <div className="flex  flex-col lg:flex-row bg-base-300  rounded-2xl shadow-md dark:shadow-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300 group max-w-7xl mx-auto border border-gray-200 dark:border-gray-700">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 h-72 lg:h-auto overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
          <img src={plant.image} alt={plant.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>

        {/* Info Section */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-between  ">
          <div>
            <h2 className="text-3xl font-extrabold text-green-700 dark:text-green-400 mb-6">{plant.plantname}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-base">
              <p>
                <span className="font-semibold text-green-600 dark:text-green-300">Owner:</span> {plant.name}
              </p>
              {/* <p>
              <span className="font-semibold text-green-600 dark:text-green-300">Email:</span> {plant.email}
            </p> */}
              <p>
                <span className="font-semibold text-green-600 dark:text-green-300">Category:</span> {plant.category}
              </p>
              <p>
                <span className="font-semibold text-green-600 dark:text-green-300">Care Level:</span> {plant.careLevel}
              </p>
              <p>
                <span className="font-semibold text-green-600 dark:text-green-300">Health:</span> {plant.healthStatus}
              </p>
              <p>
                <span className="font-semibold text-green-600 dark:text-green-300">Last Watered:</span>{" "}
                {new Date(plant.lastWatered).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p>
                <span className="font-semibold text-green-600 dark:text-green-300">Next Watering:</span>{" "}
                {new Date(plant.nextWatering).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p>
                <span className="font-semibold text-green-600 dark:text-green-300">Watering Every:</span> In every {plant.wateringFrequency} days
              </p>
              <p>
                <span className="font-semibold text-green-600 dark:text-green-300">Added:</span>{" "}
                {new Date(plant.addedDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            <p className="mt-6  leading-relaxed">{plant.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPlantCard;
