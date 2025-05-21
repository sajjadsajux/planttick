import React from "react";
import { FaLeaf } from "react-icons/fa";

const PlantCareBasics = () => {
  const tips = [
    {
      title: "Water Smart 🌿",
      description: "Water your plants early in the morning so moisture soaks in before evaporation. Avoid wetting leaves to reduce fungal risks.",
    },
    {
      title: "Soil Matters 🌱",
      description: "Use well-draining soil to prevent root rot. Mix perlite or sand into potting mix for better aeration.",
    },
    {
      title: "Fertilizer Wisdom 🌼",
      description: "Avoid over-fertilizing. A balanced, slow-release fertilizer once a month is enough during growing season.",
    },
    {
      title: "Rotate for Light ☀️",
      description: "Rotate indoor plants weekly for even sunlight, helping them grow upright and healthy.",
    },
    {
      title: "Check Leaves 🪴",
      description: "Inspect leaves often for pests or diseases like spots, holes, or sticky residue. Treat early!",
    },
    {
      title: "Mulching Magic 🍂",
      description: "Use organic mulch to retain moisture, regulate soil temperature, and reduce weeds.",
    },
    {
      title: "Leaf Hygiene 🧼",
      description: "Wipe leaves with a damp cloth to remove dust. Clean leaves help better photosynthesis.",
    },
    {
      title: "Group by Needs 🌞",
      description: "Group plants with similar sunlight and water needs. It simplifies care and boosts plant health.",
    },
    {
      title: "Prune Regularly ✂️",
      description: "Trim dead leaves and spent blooms to promote new growth and reduce disease risks.",
    },
  ];

  return (
    <section className="px-4 py-16 mx-auto container md:px-8" aria-labelledby="plant-care-basics-heading">
      <div className="max-w-2xl mx-auto mb-10 text-center">
        <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-lime-100">Fresh Tips</p>
        <h2 id="plant-care-basics-heading" className="text-3xl font-extrabold text-green-700 flex items-center justify-center gap-3 mb-4">
          <FaLeaf className="text-green-500 text-2xl" /> Plant Care Basics
        </h2>
        <p className="text-base text-gray-700 md:text-lg dark:text-gray-300">A collection of simple, effective tips to help your plants thrive all year long.</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tips.map((tip, index) => (
          <div key={index} className="p-6 bg-white border border-green-200 rounded-2xl shadow-md transition duration-300 hover:shadow-xl hover:scale-[1.03] transform">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-green-100 text-green-700 font-bold text-xl">{index + 1}</div>
            <h3 className="mb-2 text-xl font-bold text-green-800">{tip.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{tip.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlantCareBasics;
