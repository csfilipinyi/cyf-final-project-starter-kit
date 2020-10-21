import React from "react";
import fakeData from "../fakeData.json";
import BtnContainer from "../components/BtnContainer"
export default function ({ability, updateAbility}) {
  return (
    <div className="learning-objective-container">
      <h2>CSS</h2>
      <ul>
        {fakeData[1].css.map((element, index) => {
          return <li key={index}>{element}
          <BtnContainer ability = {ability} updateAbility={updateAbility} />
          </li>;

        })}
      </ul>
    </div>
  );
}
