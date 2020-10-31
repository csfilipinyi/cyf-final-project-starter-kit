import React, { useEffect, useState } from "react";
import fakeData from "../fakeData.json";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import BtnContainer from "../components/BtnContainer";

function getAbility(achievements, skill, objective) {
  const matchingAbility = achievements.filter(
    (ability) => ability.skill === skill && ability.objective === objective
  );
  return matchingAbility.length ? matchingAbility[0].ability : null;
}
export default function Html({ skill }) {
  const [xyz, setXyz] = useState([]);
  console.log();
  const fetchLearningObj = () => {
    fetch(`/api/learningobjectives/${localStorage.getItem("user")}/${skill}`)
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

  const [achievements, setAchievements] = useState([]);

  function updateAchievement(newAbility, id) {
    fetch(`/api/ability`, {
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

    //   const newAchievement=
    //  achievements.filter(achievement =>!( achievement.skill===skill && achievement.objective===objective))
    //  .concat({
    //        skill,
    //        objective,
    //        ability
    //       })
    //     setAchievements(newAchievement )
  }
  console.log(achievements);

  //const skill = "css";
  return (
    <div className="learning-objective-container">
      <h2>{skill}</h2>
      <ul>
        {xyz.map(({ description, id, ability }, index) => {
          // const ability =   getAbility(achievements, skill, description)
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
