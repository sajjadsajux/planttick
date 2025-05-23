import React from "react";
import CalendarHeader from "../Animations/CalendarHeader";

const PlantCalender = () => {
  return (
    <div className="container mx-auto px-4 ">
      <div className="max-w-2xl mx-auto mb-16 text-center">
        <CalendarHeader />
        <p className="text-base md:text-lg  my-10">Easy monthly tips to help your plants grow well. Take care of them step by step and enjoy healthy, beautiful plants all year.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* January */}
        <div className="bg-lime-50 border-l-4 border-green-500 p-5 rounded-lg shadow hover:shadow-md transition transform hover:scale-105  duration-300">
          <h3 className="text-xl font-semibold text-green-700 mb-2">January</h3>
          <ul className="list-disc pl-5 text-gray-800 text-sm space-y-1">
            <li>Check for frost damage</li>
            <li>Reduce watering</li>
            <li>Plan spring planting</li>
          </ul>
        </div>

        {/* February */}
        <div className="bg-pink-50 border-l-4 border-rose-400 p-5 rounded-lg shadow hover:shadow-md transition transform hover:scale-105  duration-300">
          <h3 className="text-xl font-semibold text-rose-700 mb-2">February</h3>
          <ul className="list-disc pl-5 text-gray-800 text-sm space-y-1">
            <li>Prune shrubs</li>
            <li>Start seeds indoors</li>
            <li>Clean pots and tools</li>
          </ul>
        </div>

        {/* March */}
        <div className="bg-green-50 border-l-4 border-emerald-500 p-5 rounded-lg shadow hover:shadow-md transition transform hover:scale-105  duration-300">
          <h3 className="text-xl font-semibold text-emerald-700 mb-2">March</h3>
          <ul className="list-disc pl-5 text-gray-800 text-sm space-y-1">
            <li>Fertilize soil</li>
            <li>Prepare garden beds</li>
            <li>Harden off seedlings</li>
          </ul>
        </div>

        {/* April */}
        <div className="bg-lime-100 border-l-4 border-lime-600 p-5 rounded-lg shadow hover:shadow-md transition transform hover:scale-105  duration-300">
          <h3 className="text-xl font-semibold text-lime-700 mb-2">April</h3>
          <ul className="list-disc pl-5 text-gray-800 text-sm space-y-1">
            <li>Plant outdoors</li>
            <li>Water newly planted</li>
            <li>Watch for pests</li>
          </ul>
        </div>

        {/* May */}
        <div className="bg-pink-100 border-l-4 border-pink-500 p-5 rounded-lg shadow hover:shadow-md transition transform hover:scale-105  duration-300">
          <h3 className="text-xl font-semibold text-pink-700 mb-2">May</h3>
          <ul className="list-disc pl-5 text-gray-800 text-sm space-y-1">
            <li>Mulch garden beds</li>
            <li>Increase watering</li>
            <li>Support climbing plants</li>
          </ul>
        </div>

        {/* June */}
        <div className="bg-emerald-50 border-l-4 border-green-600 p-5 rounded-lg shadow hover:shadow-md transition transform hover:scale-105  duration-300">
          <h3 className="text-xl font-semibold text-green-700 mb-2">June</h3>
          <ul className="list-disc pl-5 text-gray-800 text-sm space-y-1">
            <li>Deadhead flowers</li>
            <li>Harvest herbs</li>
            <li>Water in mornings</li>
          </ul>
        </div>

        {/* July */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg shadow hover:shadow-md transition transform hover:scale-105  duration-300">
          <h3 className="text-xl font-semibold text-yellow-700 mb-2">July</h3>
          <ul className="list-disc pl-5 text-gray-800 text-sm space-y-1">
            <li>Protect from heat</li>
            <li>Prune flowering shrubs</li>
            <li>Check irrigation</li>
          </ul>
        </div>

        {/* August */}
        <div className="bg-rose-50 border-l-4 border-rose-600 p-5 rounded-lg shadow hover:shadow-md transition transform hover:scale-105  duration-300">
          <h3 className="text-xl font-semibold text-rose-700 mb-2">August</h3>
          <ul className="list-disc pl-5 text-gray-800 text-sm space-y-1">
            <li>Plan fall garden</li>
            <li>Collect seeds</li>
            <li>Water deeply</li>
          </ul>
        </div>

        {/* September */}
        <div className="bg-amber-50 border-l-4 border-amber-600 p-5 rounded-lg shadow hover:shadow-md transition transform hover:scale-105  duration-300">
          <h3 className="text-xl font-semibold text-amber-700 mb-2">September</h3>
          <ul className="list-disc pl-5 text-gray-800 text-sm space-y-1">
            <li>Plant bulbs</li>
            <li>Rake leaves</li>
            <li>Fertilize perennials</li>
          </ul>
        </div>

        {/* October */}
        <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-lg shadow hover:shadow-md transition transform hover:scale-105  duration-300">
          <h3 className="text-xl font-semibold text-orange-700 mb-2">October</h3>
          <ul className="list-disc pl-5 text-gray-800 text-sm space-y-1">
            <li>Prepare compost</li>
            <li>Cover sensitive plants</li>
            <li>Clean garden tools</li>
          </ul>
        </div>

        {/* November */}
        <div className="bg-stone-100 border-l-4 border-stone-500 p-5 rounded-lg shadow hover:shadow-md transition transform hover:scale-105  duration-300">
          <h3 className="text-xl font-semibold text-stone-700 mb-2">November</h3>
          <ul className="list-disc pl-5 text-gray-800 text-sm space-y-1">
            <li>Mulch plants</li>
            <li>Reduce watering</li>
            <li>Protect pots from frost</li>
          </ul>
        </div>

        {/* December */}
        <div
          className="bg-sky-50 border-l-4 border-sky-600 p-5 rounded-lg shadow hover:shadow-md transition transform hover:scale-105  duration-300
"
        >
          <h3 className="text-xl font-semibold text-sky-700 mb-2">December</h3>
          <ul className="list-disc pl-5 text-gray-800 text-sm space-y-1">
            <li>Review garden plan</li>
            <li>Order seeds</li>
            <li>Indoor plant care</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlantCalender;
