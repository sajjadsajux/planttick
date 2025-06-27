import React from "react";
import { Link } from "react-router";

const AllPlantsCard = ({ plants }) => {
  return (
    <div>
      <div className="container mx-auto p-4 min-h-screen">
        <div className="overflow-x-auto">
          <table className="min-w-full  bg-white dark:bg-base-300 text-sm  shadow-md rounded-lg">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Plant Name</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Next Watering</th>
                <th className="px-4 py-2 text-left">Health Status</th>
                <th className="px-12 md:px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {plants.map((plant) => (
                <tr key={plant._id} className="border-b hover:bg-gray-300">
                  <td className="px-4 py-2">
                    <img src={plant.image} alt={plant.plantname} className="h-12 w-12 object-cover rounded" />
                  </td>
                  <td className="px-4 py-2 font-medium">{plant.plantname}</td>
                  <td className="px-4 py-2">{plant.category}</td>
                  <td className="px-4 py-2">
                    {new Date(plant.nextWatering).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </td>

                  <td className="px-4 py-2">{plant.healthStatus}</td>
                  <td className="px-4 md:px-0 py-2">
                    <Link to={`/plant/${plant._id}`} className="bg-primary text-white px-3 py-1 rounded hover:bg-green-700 ">
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
