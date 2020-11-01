import React, {} from 'react'
import TrackBtn from "./TrackBtn"
import "./BtnContainer.css";
export default function BtnContainer({ability, updateAbility}) {
   

    return (
        <div className = "btn-container"> 
         <TrackBtn classNameBtn ={ability===0? "btn-red": ""}
          onClick={()=> updateAbility(0)} 
          btnText = {"Not Confident"}
          />
          <TrackBtn classNameBtn ={ability===1? "btn-yellow": ""}
          onClick={()=> updateAbility(1)} 
          btnText = {"Needs revision"}
          />

         <TrackBtn classNameBtn ={ability===2? "btn-green": ""}
          onClick={()=> updateAbility(2)} 
          btnText = {"Confident"}
          />
        </div>
    )
}
