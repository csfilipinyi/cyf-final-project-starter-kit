import React, { useState } from "react";
import fakeData from "../fakeData.json";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Javascript from "./Javascript";

import BtnContainer from "../components/BtnContainer";

function getAbility(achievements,  skill, objective){
  const matchingAbility = achievements.filter((ability)=>(ability.skill===skill && ability.objective===objective))
  return matchingAbility.length? matchingAbility[0].ability: null
}
export default function Html({skill}) {
  
const [achievements, setAchievements] = useState([])

 function updateAchievement(ability,  skill, objective){
 
  const newAchievement=  
 achievements.filter(achievement =>!( achievement.skill===skill && achievement.objective===objective))
 .concat({
       skill,
       objective,
       ability
      })
    setAchievements(newAchievement )
  }
  console.log(achievements)
  
//const skill = "css";
  return (
    <div className="learning-objective-container">
      <h2>{skill}</h2>
      <ul>
        {fakeData[skill].map((objective, index) => {
        const ability =   getAbility(achievements, skill, objective)
        function updateAbility(newAbility){
          updateAchievement( newAbility, skill, objective)
        }
        console.log(ability)
          return <li key={index}>{objective}

          <BtnContainer ability = {ability} updateAbility={updateAbility} />
         

  
          </li>;
        })}
      </ul>
    </div>
  );
}
