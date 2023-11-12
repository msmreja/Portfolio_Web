import React from "react";

function Info(props) {
  return (
    <div>
      <h5>Role and Responsibilitie Handled</h5>
      <div className="about__info grid">
        <div className="about__box">
          <h3 className="about__title">Project Engineer</h3>
          <span className="about__subtilte">
            Full Stack Developer, KNKLabs Pvt.Ltd
          </span>
        </div>
        <div className="about__box">
          <h3 className="about__title">Jont Secretery</h3>
          <span className="about__subtilte">
            {" "}
            E-cell, Samskruti College of Engg. & Tech.
          </span>
        </div>
        <div className="about__box">
          <h3 className="about__title">Leader</h3>
          <span className="about__subtilte">
            {" "}
            Coding Club, Samskruti College of Engg. & Tech
          </span>
        </div>
      </div>
    </div>
  );
}

export default Info;
