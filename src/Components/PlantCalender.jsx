import React from "react";
import CalendarHeader from "../Animations/CalendarHeader";

const months = [
  {
    name: "January",
    color: "bg-lime-50 border-green-500 text-green-700 dark:bg-base-300",
    tasks: [
      "Check for frost damage on outdoor plants",
      "Reduce watering for dormant plants",
      "Clean and sharpen gardening tools",
      "Start planning your spring garden layout",
      "Inspect indoor plants for pests",
      "Begin forcing bulbs indoors",
      "Order seeds for early crops",
      "Rotate indoor plants for even light",
    ],
  },
  {
    name: "February",
    color: "bg-pink-50 border-rose-400 text-rose-700 dark:bg-base-300",
    tasks: [
      "Start seeds indoors for early vegetables",
      "Prune dormant trees and shrubs",
      "Clean pots and containers for spring",
      "Continue checking for frost damage",
      "Fertilize houseplants lightly",
      "Begin hardening off cold-hardy plants",
      "Top off mulch to retain soil warmth",
      "Inspect soil for compaction",
    ],
  },
  {
    name: "March",
    color: "bg-green-50 border-emerald-500 text-emerald-700 dark:bg-base-300",
    tasks: ["Fertilize soil with compost or manure", "Prepare garden beds for planting", "Start cool-season crops outdoors", "Prune roses and flowering shrubs", "Divide perennials if needed", "Harden off seedlings gradually", "Watch for early spring weeds", "Adjust watering for warming weather"],
  },
  {
    name: "April",
    color: "bg-lime-100 border-lime-600 text-lime-700 dark:bg-base-300",
    tasks: ["Plant warm-season vegetables", "Water newly planted flowers and herbs", "Apply mulch to conserve moisture", "Watch for aphids and other pests", "Train climbing plants as they grow", "Deadhead spring blooms", "Support tall-growing plants early", "Add compost to fast-growing plants"],
  },
  {
    name: "May",
    color: "bg-pink-100 border-pink-500 text-pink-700 dark:bg-base-300",
    tasks: ["Increase watering as temperatures rise", "Plant summer annuals and vegetables", "Pinch back herbs to encourage growth", "Mulch to prevent weed growth", "Stake tomato and pepper plants", "Watch for slugs in shaded areas", "Feed flowering plants", "Thin out seedlings for airflow"],
  },
  {
    name: "June",
    color: "bg-emerald-50 border-green-600 text-green-700 dark:bg-base-300",
    tasks: ["Deadhead spent flowers regularly", "Harvest herbs before flowering", "Water deeply in the morning", "Check for signs of powdery mildew", "Continue feeding container plants", "Monitor for garden pests", "Mulch fruit trees to retain water", "Train vines and climbing plants"],
  },
  {
    name: "July",
    color: "bg-yellow-50 border-yellow-500 text-yellow-700 dark:bg-base-300",
    tasks: [
      "Protect plants from heat stress",
      "Water early or late to avoid evaporation",
      "Trim back overgrown shrubs",
      "Harvest mid-summer vegetables",
      "Fertilize flowering plants again",
      "Add shade cloth for sensitive plants",
      "Weed regularly to reduce competition",
      "Check irrigation systems for clogs",
    ],
  },
  {
    name: "August",
    color: "bg-rose-50 border-rose-600 text-rose-700 dark:bg-base-300",
    tasks: ["Plan fall vegetable garden", "Collect seeds from spent blooms", "Prune lightly to maintain shape", "Deep water fruiting plants", "Replace mulch as needed", "Inspect plants for spider mites", "Cut back herbs for regrowth", "Sow fall flowers like calendula"],
  },
  {
    name: "September",
    color: "bg-amber-50 border-amber-600 text-amber-700 dark:bg-base-300",
    tasks: ["Plant fall bulbs and garlic", "Start cool-season crops", "Fertilize perennials one last time", "Rake and compost fallen leaves", "Trim dead stems and foliage", "Aerate and amend garden beds", "Divide crowded perennials", "Clean up garden debris"],
  },
  {
    name: "October",
    color: "bg-orange-50 border-orange-500 text-orange-700 dark:bg-base-300",
    tasks: ["Prepare compost for winter", "Cover sensitive plants before frost", "Clean and store garden tools", "Harvest late-season vegetables", "Add mulch to overwinter beds", "Wrap young trees to prevent cracking", "Plant shrubs and trees", "Protect pots from freezing"],
  },
  {
    name: "November",
    color: "bg-stone-100 border-stone-500 text-stone-700 dark:bg-base-300",
    tasks: ["Mulch overwintering plants", "Reduce watering for dormancy", "Store hoses and shut off irrigation", "Wrap pots with burlap for insulation", "Clean fallen leaves to avoid disease", "Start indoor herb garden", "Review garden journal", "Protect root crops from frost"],
  },
  {
    name: "December",
    color: "bg-sky-50 border-sky-600 text-sky-700 dark:bg-base-300 ",
    tasks: ["Review your gardening successes and fails", "Order seeds and garden supplies", "Care for indoor tropical plants", "Avoid overwatering houseplants", "Check for fungus gnats indoors", "Clean light fixtures near plants", "Prepare garden plan for spring", "Decorate with natural greenery"],
  },
];

const PlantCalender = () => {
  return (
    <div className="container mx-auto px-4 lg:px-0">
      {/* Header */}
      <div className="max-w-2xl mx-auto mb-12 text-center">
        <CalendarHeader />
        <p className="text-base md:text-lg my-10 text-center">Easy monthly tips to help your plants grow well. Take care of them step by step and enjoy healthy, beautiful plants all year.</p>
      </div>

      {/* Scrollable Calendar */}
      <div className="h-[500px] md:h-[650px] overflow-y-auto pr-2 space-y-6 text-center">
        {months.map((month, index) => (
          <div key={index} className={`p-6 border-l-4 dark:border-2 dark:border-white rounded-lg shadow hover:shadow-md transition-transform hover:scale-[1.01] ${month.color}`}>
            <h3 className="text-xl font-semibold mb-2">{month.name}</h3>
            <ul className="list-disc pl-5 text-gray-800 dark:text-white text-sm md:text-base space-y-1">
              {month.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantCalender;
