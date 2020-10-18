import React from "react";
import fakeData from "../fakeData.json";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

export default function Html() {
  console.log(fakeData[0].html);
  return (
    <div className="learning-objective-container">
      <h2>HTML</h2>
      <ul>
        {fakeData[0].html.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </div>
  );
}
