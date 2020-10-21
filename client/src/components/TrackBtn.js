import React from 'react'
import "./BtnContainer.css"

export default function TrackBtn({btnText, classNameBtn, onClick}) {
    return (
        <div className="btn-style">
            <button  className ={classNameBtn} onClick ={onClick}>{btnText}</button>  
        </div>
    )
}
