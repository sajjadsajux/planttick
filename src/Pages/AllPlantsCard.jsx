import React from "react";
import { Link } from "react-router";

const AllPlantsCard = ({ plants }) => {
  return (
    <div>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">All Plants</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white text-sm text-gray-700 shadow-md rounded-lg">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Plant Name</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Watering Frequency</th>
                <th className="px-4 py-2 text-left">Health Status</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {plants.map((plant) => (
                <tr key={plant._id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">
                    <img src={plant.image} alt={plant.plantname} className="h-12 w-12 object-cover rounded" />
                  </td>
                  <td className="px-4 py-2 font-medium">{plant.plantname}</td>
                  <td className="px-4 py-2">{plant.category}</td>
                  <td className="px-4 py-2">Every {plant.wateringFrequency} days</td>
                  <td className="px-4 py-2">{plant.healthStatus}</td>
                  <td className="px-4 py-2">
                    <Link to={`/plant/${plant._id}`} className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllPlantsCard;
