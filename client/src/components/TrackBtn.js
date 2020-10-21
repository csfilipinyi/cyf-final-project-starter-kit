import React from 'react'


export default function TrackBtn({btnText, classNameBtn, onClick}) {
    return (
        <div>
            <button className ={classNameBtn} onClick ={onClick}>{btnText}</button>  
        </div>
    )
}
