import React from 'react'


export default function TrackBtn({btnText, classNameBtn, onClick}) {
    return (
        <div>
            <button classNameBtn ={classNameBtn} onClick ={onClick}>{btnText}</button>  
        </div>
    )
}
