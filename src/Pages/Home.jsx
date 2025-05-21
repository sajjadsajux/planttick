import React from "react";
import HomeSlider from "../Components/HomeSlider";
import PlantCareBasics from "../Components/PlantCareBasics";
import PlantCalender from "../Components/PlantCalender";
import NewPlants from "../Components/NewPlants";

const Home = () => {
  return (
    <div>
      <section className="w-full ">
        <HomeSlider></HomeSlider>
      </section>
      <section>
        <NewPlants></NewPlants>
      </section>
      <section className="">
        <PlantCareBasics></PlantCareBasics>
      </section>

      <section>
        <PlantCalender></PlantCalender>
      </section>
    </div>
  );
};

export default Home;
