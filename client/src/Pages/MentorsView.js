import React, { useState, useEffect } from "react";
import dataTesting from "../dataTesting.json";
import BoxDisplay from "../components/BoxDisplay";
import { useHistory, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function MentorsView() {
  let history = useHistory();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
 
console.log(token)
    if (!token) {
      history.push("/");
    }
    fetch(`/api/verify`, {headers: {token}})
    .then(res => {
      if(res.status !==200){
        history.push("/");
      }
      return res.json()
    }) 
    .then(data =>{
       console.log(data)
       window.localStorage.setItem("role", data.role)
      if( data == "not authorized"||data.role == "Student"){
       history.push("/");
      }
    } 
    )
    .catch(error =>console.log(error))
  }, []);

  const studentId = useQuery().get("studentId");
  console.log(studentId);

  return (
    <div className="skills-container">
      <div className="mentorsview-header-container">
        <h2>Welcome Mentor</h2>
        <a href="/mentorsedit" className="signup-link">
          Edit Learning Objectives
        </a>
      </div>
      {studentId && (
        <div className="skills-container">
          <BoxDisplay studentData={dataTesting} studentId={studentId} />
        </div>
      )}
      <ul>
        {dataTesting.map((person, index) => {
          return (
            <li id={index} className="students-name">
              <a
                href={`./MentorsView?studentId=${index}`}
                className="name-list"
              >
                {person.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MentorsView;
