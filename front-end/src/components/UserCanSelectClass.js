import React, {useState} from "react";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";



const UserCanSelectClass = ({onLogout}) => {
    const [class,setClass] =useState("");

    const classSelect = ()=>{
        fetch('http://localhost:3000/users/:studentId/class/session', {
            method:"GET",
        headers:{"content-Type": "application-Json"},
    })
    .then((res)=>res.json(
       
    ))
    .then((data)=> {classSelect(data)});
    
        return (
            <div className="App">
               
              <h2>Please choose the class that you want to log into from the list below</h2>
              <p>choose a class:</p>
              <div>
                  <select>
                      <option value = {class}
                      onChange = {setClass}
                      >
                      </option>
                  </select>
              </div>
              <div className="Space">
              <button className="Star">Log into this class</button>
              </div>
            </div>
          )
}
export default UserCanSelectClass