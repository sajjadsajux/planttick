import React from "react";
import HomeSlider from "../Components/HomeSlider";
import PlantCareBasics from "../Components/PlantCareBasics";
import PlantCalender from "../Components/PlantCalender";
import NewPlants from "../Components/NewPlants";
import SetTitle from "../Utilities/SetTitle";
import Newsletter from "./Newsletter";

const Home = () => {
  SetTitle("Home - Welcome to PlantTick");
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
      <section>
        <Newsletter></Newsletter>
      </section>
    </div>
  );
};

export default Home;
