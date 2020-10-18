import React from "react";
import fakeData from "../fakeData.json";
export default function Node() {
  return (
    <div className="learning-objective-container">
      <h2>Node.js</h2>
      <ul>
        {fakeData[4].node.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </div>
  );
}
