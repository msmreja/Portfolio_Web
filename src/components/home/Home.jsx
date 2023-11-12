import React from "react";
import "./home.css";
import Data from "./Data";
import Social from "./Social";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__cointainer container grid">
        <div className="home__content grid">
          <Social />
          <div>
            <div className="home__img"></div>
            <div className="name_container">
              <h1>Masum Reja</h1>
            </div>
          </div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};
export default Home;
