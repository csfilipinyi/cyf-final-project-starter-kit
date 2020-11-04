import React, { useEffect, useState } from "react";
import fakeData from "../fakeData.json";
import BtnContainer from "../components/BtnContainer";

export default function Html({ skill }) {
  const [xyz, setXyz] = useState([]);
  console.log();

  const fetchLearningObj = () => {
    const token = window.localStorage.getItem("token");
    fetch(`/api/learningobjectives/${localStorage.getItem("user")}/${skill}`, {
      headers: { token },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw data;
        }
        setXyz(data);
      });
  };
  useEffect(fetchLearningObj, [skill]);
  //fetch here call

  function updateAchievement(newAbility, id) {
    fetch(`/api/abilities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: window.localStorage.getItem("token"),
      },
      body: JSON.stringify({
        ability: newAbility,
        learning_obj_id: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        }
      })
      .then(fetchLearningObj);
    setXyz(
      xyz.map((obj) => {
        if (obj.id === id) {
          return { ...obj, ability: newAbility };
        }
        return obj;
      })
    );
  }

  return (
    <div className="learning-objective-container">
      <h2>{skill}</h2>
      <ul>
        {xyz.map(({ description, id, ability }, index) => {
          function updateAbility(newAbility) {
            updateAchievement(newAbility, id);
          }
          return (
            <li key={index}>
              {description}

              <BtnContainer
                ability={ability}
                updateAbility={updateAbility}
                learningObjId={id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
