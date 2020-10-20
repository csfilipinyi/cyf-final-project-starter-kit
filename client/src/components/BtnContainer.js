import React from 'react'
import TrackBtn from "./TrackBtn"
import "./html.css";
export default function BtnContainer({ability, updateAchievement}) {
    console.log(ability);
    return (
        
        <div className = "container">
            
         <TrackBtn classNameBtn ={ability===0? "btn-red": ""}
          onClick={()=> updateAchievement(0, skill, objective)} 
          btnText = {"Not Confident"}
          />

          <TrackBtn classNameBtn ={ability===1? "btn-yellow": ""}
          onClick={()=> updateAchievement(1, skill, objective)} 
          btnText = {"Needs revision"}
          />

         <TrackBtn classNameBtn ={ability===2? "btn-green": ""}
          onClick={()=> updateAchievement(2, skill, objective)} 
          btnText = {"Confident"}
          />
        </div>
    )
}
