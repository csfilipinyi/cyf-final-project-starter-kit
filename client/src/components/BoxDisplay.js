import React, { useState } from "react";

function BoxDisplay(props) {
  console.log(props.studentData);
  return (
    <div className="learning-objective-container">
      <h2>{props.studentData[0].achievement[0].skill}</h2>
      {/* <ul>
        {.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul> */}
    </div>
  );
}

export default BoxDisplay;
