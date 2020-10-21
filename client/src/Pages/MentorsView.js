import React, { useState, useEffect } from "react";
import dataTesting from "../dataTesting.json";
import BoxDisplay from "../components/BoxDisplay";

function MentorsView() {
  return (
    <div className="skills-container">
      <h2>Welcome Mentor</h2>
      <ul>
        {dataTesting.map((person, index) => {
          return <li id={index}>{person.name}</li>;
        })}
      </ul>
      <div className="skills-container">
        <BoxDisplay studentData={dataTesting} />
      </div>
    </div>
  );
}

export default MentorsView;
