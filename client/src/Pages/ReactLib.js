import React from "react";
import fakeData from "../fakeData.json";
export default function ReactLib() {
  return (
    <div className="learning-objective-container">
      <h2>React</h2>
      <ul>
        {fakeData[3].reactLib.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </div>
  );
}
