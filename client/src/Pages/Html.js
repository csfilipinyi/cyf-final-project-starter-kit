import React, { useState } from "react";
import fakeData from "../fakeData.json";
import "./html.css"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
function getAbility(achievements,  skill, objective){
  const matchingAbility = achievements.filter((ability)=>(ability.skill===skill && ability.objective===objective))
  return matchingAbility.length? matchingAbility[0].ability: null
}
export default function Html() {
  
  const [achievements, setAchievements] = useState([])

  function updateAchievement(ability,  skill, objective){
 const newAchievement=  achievements.filter(achievement =>!( achievement.skill===skill && achievement.objective===objective))
 .concat({
       skill,
       objective,
     ability
      })
    setAchievements( newAchievement )
  }
  console.log(achievements)
const skill = "html";
  return (
    <div className="learning-objective-container">
      <h2>{skill}</h2>
      <ul>
        {fakeData[0][skill].map((objective, index) => {
        const ability =   getAbility(achievements, skill, objective)
        console.log(ability)
          return <li key={index}>{objective}
          <button className={ability===0? "btn-red": ""} onClick={()=> updateAchievement(0, skill, objective)}>Not Confident</button>
          <button className={ability===1? "btn-yellow": ""} onClick={()=> updateAchievement(1, skill, objective)}>Need revision</button>
          <button className={ability===2? "btn-green": ""} onClick={()=> updateAchievement(2, skill, objective)}>Confident</button>
          </li>;
        })}
      </ul>
    </div>
  );
}
