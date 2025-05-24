import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AllPlantsCard from "./AllPlantsCard";
import SetTitle from "../Utilities/SetTitle";

const AllPlants = () => {
  const loadedPlants = useLoaderData();
  const [plants, setPlants] = useState(loadedPlants);
  const [sortOrder, setSortOrder] = useState("asc"); // default ascending

  SetTitle("All Plants");

  const handleSortByNextWatering = () => {
    const sortedPlants = [...plants].sort((a, b) => {
      const dateA = new Date(a.nextWatering);
      const dateB = new Date(b.nextWatering);

      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    setPlants(sortedPlants);
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold my-8 text-center">All Plants</h2>
      <div className="flex justify-center mt-4">
        <button onClick={handleSortByNextWatering} className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary">
          Sort by Next Watering ({sortOrder === "asc" ? "Ascending" : "Descending"})
        </button>
      </div>
      <AllPlantsCard plants={plants} />
    </div>
  );
};

export default AllPlants;
