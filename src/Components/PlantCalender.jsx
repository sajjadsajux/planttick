import React from "react";

const PlantCalender = () => {
  const careTipsByMonth = {
    January: ["Check for frost damage", "Reduce watering", "Plan spring planting"],
    February: ["Prune shrubs", "Start seeds indoors", "Clean pots and tools"],
    March: ["Fertilize soil", "Prepare garden beds", "Start hardening off seedlings"],
    April: ["Plant outdoors", "Water newly planted", "Watch for pests"],
    May: ["Mulch garden beds", "Increase watering", "Support climbing plants"],
    June: ["Deadhead flowers", "Harvest herbs", "Water in mornings"],
    July: ["Protect from heat", "Prune summer flowering shrubs", "Check irrigation"],
    August: ["Plan fall garden", "Collect seeds", "Water deeply"],
    September: ["Plant bulbs", "Rake leaves", "Fertilize perennials"],
    October: ["Prepare compost", "Cover sensitive plants", "Clean garden tools"],
    November: ["Mulch plants", "Reduce watering", "Protect pots from frost"],
    December: ["Review garden plan", "Order seeds", "Indoor plant care"],
  };

  return (
    <div>
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Plant Care Calendar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.entries(careTipsByMonth).map(([month, tips]) => (
            <div key={month} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">{month}</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                {tips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantCalender;
