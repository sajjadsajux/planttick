import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const NewPlants = () => {
  const [newPlants, setNewPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/newplants")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewPlants(data);
      });
  }, []);

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-8">🌿 New Plants</h2>

        {newPlants.length === 0 ? (
          <p className="text-center text-gray-500">Add Plants to show here...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {newPlants.map((plant) => (
              <div key={plant.id} className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl transition duration-300 group">
                <div className="md:w-2/4 w-full">
                  <img src={plant.image} alt={plant.name} className="h-64 md:h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="w-full md:w-2/4 p-5 flex flex-col justify-between">
                  <div className="">
                    <h3 className="text-2xl font-bold text-green-800 mb-1 ">{plant.plantname}</h3>
                    <p className="text-gray-600 text-sm mb-1">Category: {plant.category}</p>
                    <p className="text-gray-600 text-sm mb-1">Care Level: {plant.careLevel}</p>
                    <p className="text-gray-600 text-sm mb-1">
                      Next Watering:{" "}
                      {new Date(plant.addedDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">Health: {plant.healthStatus}</p>
                  </div>
                  <Link to={`/newplant/${plant._id}`} className="btn btn-sm bg-green-700 hover:bg-green-800 text-white w-fit self-start mt-2">
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
