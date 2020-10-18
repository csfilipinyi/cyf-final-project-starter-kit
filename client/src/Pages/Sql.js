import React from "react";
import fakeData from "../fakeData.json";
export default function Sql() {
  return (
    <div className="learning-objective-container">
      <h2>PostrgeSQL</h2>
      <ul>
        {fakeData[5].sql.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </div>
  );
}
