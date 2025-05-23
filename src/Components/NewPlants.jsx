import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import NewPlantsHeader from "../Animations/NewPlantsHeader";

const NewPlants = () => {
  const [newPlants, setNewPlants] = useState([]);

  useEffect(() => {
    fetch("https://planttick-server.vercel.app/newplants")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setNewPlants(data);
      });
  }, []);

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <NewPlantsHeader></NewPlantsHeader>
          <p className="text-base  md:text-lg  my-10">Simple tips to help your plants grow healthy and strong. Here are some common practices to get you started</p>
        </div>
        {newPlants.length === 0 ? (
          <p className="text-center text-gray-500">Add Plants to show here...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {newPlants.map((plant) => (
              <div key={plant._id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                {/* Image */}
                <div className="overflow-hidden rounded-t-lg">
                  <img src={plant.image} alt={plant.name} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-green-800 mb-2 truncate">{plant.plantname}</h3>
                  <p className="text-gray-700 text-sm mb-1 truncate">
                    <strong>Category:</strong> {plant.category}
                  </p>
                  <p className="text-gray-700 text-sm mb-1 truncate">
                    <strong>Health:</strong> {plant.healthStatus}
                  </p>
                  <p className="text-gray-700 text-sm mb-1 truncate">
                    <strong>Care Level:</strong> {plant.careLevel}
                  </p>
                  <p className="text-gray-700 text-sm mb-4">
                    <strong>Added Date:</strong>{" "}
                    {new Date(plant.addedDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>

                {/* Button */}
                <div className="p-5 pt-0 flex justify-center">
                  <Link to={`/newplant/${plant._id}`} className="btn btn-sm bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full w-full max-w-xs text-center">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewPlants;
