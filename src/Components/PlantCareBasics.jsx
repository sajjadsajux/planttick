import React from "react";
import PlantCareHeader from "../Animations/PlantCareHeader";

const tips = [
  {
    title: "Water in a Smart Way",
    description: "Start with the basics—proper watering. The best time to water your plants is in the early morning or late afternoon, when the sun is less intense. This allows moisture to soak into the soil instead of evaporating. Always water at the base to avoid leaf diseases.",
    summary: ["Water early morning or late afternoon", "Avoid wetting the leaves", "Keep soil moist but not soggy"],
    extraTip: "Using a moisture meter can help prevent overwatering.",
    funFact: "Overwatering is one of the most common causes of houseplant deaths.",
  },
  {
    title: "Choose the Right Soil",
    description: "Good soil is essential. Use well-draining potting mix, especially for indoor plants. You can enhance drainage by mixing in perlite, sand, or coconut coir. Healthy roots start with healthy soil.",
    summary: ["Use potting mix suited to plant type", "Add perlite or sand for drainage", "Avoid compacted soil"],
    extraTip: "Repot plants every 1-2 years to refresh the soil.",
    funFact: "Healthy soil contains millions of beneficial microbes that help plants grow.",
  },
  {
    title: "Feed Moderately",
    description: "Like all living things, plants need food. Fertilize sparingly with a balanced, slow-release fertilizer. Once a month during the growing season is usually enough. Over-fertilizing can harm more than help.",
    summary: ["Use balanced slow-release fertilizer", "Fertilize once a month during growth", "Avoid excess fertilizer to prevent damage"],
    extraTip: "Organic fertilizers improve soil health over time.",
    funFact: "Plants absorb nutrients better from organic sources than synthetic ones.",
  },
  {
    title: "Let the Light In",
    description: "Lighting is one of the most important factors in plant health. Observe where natural light falls in your space and match it to your plants’ needs. Rotate pots weekly so all sides get equal exposure, helping the plant grow evenly.",
    summary: ["Match plants to their light needs", "Rotate pots weekly for even growth", "Avoid direct harsh sunlight for shade plants"],
    extraTip: "Using grow lights can supplement low natural light indoors.",
    funFact: "Plants can actually sense the direction of light and grow toward it.",
  },
  {
    title: "Inspect Regularly",
    description: "Pay close attention to your plants' appearance. Yellowing leaves, dark spots, or sticky residue might indicate pests or diseases. Regular inspection allows for early intervention before issues spread.",
    summary: ["Check leaves for spots or holes", "Look for sticky residue or pests", "Act quickly when problems arise"],
    extraTip: "Use neem oil spray as a natural pest deterrent.",
    funFact: "Some pests can multiply rapidly, making early detection crucial.",
  },
  {
    title: "Mulch and Retain Moisture",
    description: "To keep your soil happy and hydrated, add mulch. Organic mulch helps retain moisture, reduce weeds, and regulate soil temperature. It also slowly enriches your soil over time.",
    summary: ["Use organic mulch like bark or leaves", "Mulch keeps soil moist longer", "Suppresses weeds naturally"],
    extraTip: "Keep mulch a few inches away from plant stems to prevent rot.",
    funFact: "Mulching can reduce watering needs by up to 50%.",
  },
  {
    title: "Keep Leaves Clean",
    description: "Just like windows, leaves need to stay clean to work properly. Wipe down broad leaves with a damp cloth once in a while to help with sunlight absorption and improve air quality around the plant.",
    summary: ["Wipe leaves gently with a damp cloth", "Clean leaves absorb sunlight better", "Improves indoor air quality"],
    extraTip: "Avoid using leaf shine sprays that can clog pores.",
    funFact: "Dusty leaves can reduce photosynthesis by up to 50%.",
  },
  {
    title: "Group Plants by Needs",
    description: "Make your care routine easier by grouping similar plants together. Plants that need the same light or watering schedule thrive better when they're arranged in care-compatible clusters.",
    summary: ["Group plants with similar light needs", "Water groups according to their needs", "Simplifies care and monitoring"],
    extraTip: "Use plant trays or stands to organize groups neatly.",
    funFact: "Grouping plants can also increase humidity levels locally.",
  },
  {
    title: "Prune for Growth",
    description: "Finally, don't be afraid to prune. Cutting away dead leaves or faded flowers redirects energy to new growth. Pruning also improves airflow and helps shape your plant into a healthy form.",
    summary: ["Trim dead or yellow leaves regularly", "Remove spent blooms to encourage growth", "Improves airflow to prevent diseases"],
    extraTip: "Sterilize pruning tools to avoid spreading diseases.",
    funFact: "Pruning stimulates growth hormones in plants.",
  },
];

const PlantCareBasics = () => {
  return (
    <section className="container mx-auto p-4 lg:p-0 md:p-8">
      <div className="max-w-2xl mx-auto mb-16 text-center ">
        <PlantCareHeader></PlantCareHeader>
        <p className="text-base  md:text-lg  my-10">Simple tips to help your plants grow healthy and strong. Here are some common practices to get you started</p>
      </div>
      <div className="container mx-auto ">
        {tips.map((tip, idx) => (
          <div key={idx} className="collapse collapse-arrow  border border-base-300 rounded-lg mb-5 bg-white dark:bg-base-300 dark:border-white ">
            <input type="radio" name="plant-care-accordion" defaultChecked={idx === 0} />
            <div className="collapse-title font-semibold text-lg md:text-xl text-primary">{tip.title}</div>
            <div className="collapse-content ">
              <p className="mb-4 leading-relaxed">{tip.description}</p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                {tip.summary.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <p className="italic mb-3 text-primary">
                <strong>Tip:</strong> {tip.extraTip}
              </p>
              <p className="text-sm ">
                <strong>Fun Fact:</strong> {tip.funFact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlantCareBasics;
