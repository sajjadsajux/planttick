import React, { useEffect } from "react";

const NewPlantCard = ({ plant }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="container lg:h-[70vh] mx-auto flex justify-center items-center">
      <div className="flex  flex-col lg:flex-row bg-white dark:bg-base-300  rounded-2xl shadow-md dark:shadow-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300 group max-w-7xl mx-auto border border-gray-200 dark:border-gray-700">
        {/* Image Section */}
        <div className="w-full lg:w-2/5 h-72 lg:h-auto overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
          <img src={plant.image} alt={plant.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>

        {/* Info Section */}
        <div className="w-full lg:w-3/5 p-8 flex flex-col justify-between  ">
          <div>
            <h2 className="text-3xl font-extrabold text-green-700  mb-6">{plant.plantname}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-base">
              <p>
                <span className="font-semibold text-green-600 ">Owner:</span> {plant.name}
              </p>
              {/* <p>
              <span className="font-semibold text-green-600 ">Email:</span> {plant.email}
            </p> */}
              <p>
                <span className="font-semibold text-green-600 ">Category:</span> {plant.category}
              </p>
              <p>
                <span className="font-semibold text-green-600 ">Care Level:</span> {plant.careLevel}
              </p>
              <p>
                <span className="font-semibold text-green-600 ">Health Status:</span> {plant.healthStatus}
              </p>
              <p>
                <span className="font-semibold text-green-600 ">Last Watered:</span>{" "}
                {new Date(plant.lastWatered).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p>
                <span className="font-semibold text-green-600 ">Next Watering:</span>{" "}
                {new Date(plant.nextWatering).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p>
                <span className="font-semibold text-green-600 ">Watering Every:</span> In every {plant.wateringFrequency} days
              </p>
              <p>
                <span className="font-semibold text-green-600 ">Added:</span>{" "}
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
