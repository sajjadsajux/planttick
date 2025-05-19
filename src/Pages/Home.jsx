import React, { use } from "react";
import HomeSlider from "../Components/HomeSlider";
import { AuthContext } from "../Contexts/AuthContext";

const Home = () => {
  const { name } = use(AuthContext);
  console.log(name);
  return (
    <div>
      <h2>Home</h2>
      <section className="w-full ">
        <HomeSlider></HomeSlider>
      </section>
    </div>
  );
};

export default Home;
