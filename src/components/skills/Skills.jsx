import React from "react";
import "./skill.css";
import Backend from "./Backend";
import Frontend from "./Frontend";

const Skills = () => {
  return (
    <div>
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Skills</span>

        <dev className="skills__container container grid"></dev>
        <Frontend />
        <Backend />
      </section>
    </div>
  );
};

export default Skills;
