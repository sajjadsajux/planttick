import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";

const MyPlants = () => {
  const { user } = use(AuthContext);
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/myplants?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setPlants(data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  const handleDelete = () => {};

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">My Plants</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plants.map((plant) => (
          <div key={plant._id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            {/* Image */}
            <img src={plant.image} alt={plant.plantname} className="w-full h-48 object-cover" />

            {/* Info */}
            <div className="p-4 space-y-2 flex-grow">
              <h2 className="text-xl font-semibold">{plant.plantname}</h2>
              <p>
                <strong>Category:</strong> {plant.category}
              </p>
              <p>
                <strong>Care Level:</strong> {plant.careLevel}
              </p>
              <p>
                <strong>Watering:</strong> Every {plant.wateringFrequency} days
              </p>
              <p>
                <strong>Last Watered:</strong> {plant.lastWatered}
              </p>
              <p>
                <strong>Next Watering:</strong> {plant.nextWatering}
              </p>
              <p>
                <strong>Health Status:</strong> {plant.healthStatus}
              </p>
              <p>
                <strong>Description:</strong> {plant.description}
              </p>
              <p>
                <strong>Added By:</strong> {plant.name} ({plant.email})
              </p>
            </div>

            {/* Buttons */}
            <div className="p-4 flex justify-between border-t">
              <Link to={`/myplants-update/${plant._id}`} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Update
              </Link>
              <button onClick={() => handleDelete(plant._id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPlants;
