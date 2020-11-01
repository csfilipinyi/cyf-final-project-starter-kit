import React, { useState, useEffect } from "react";
import dataTesting from "../dataTesting.json";
import BoxDisplay from "../components/BoxDisplay";
import { useHistory, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function MentorsView() {
  const [studentList, setStudentList]= useState([])

  let history = useHistory();  
  const token = window.localStorage.getItem("token");
  useEffect(() => {
  
 
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

  useEffect(()=>{
    fetch(`/api/students`, {headers: {token}})
    .then(res=>res.json())
    .then(data =>{
      console.log(data);
      setStudentList(data)
    })
  },[])


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
        {studentList.map(({user_id, first_name, last_name}) => {
          return (
            <li className="students-name">
              <a
                href={`./MentorsView?studentId=${user_id}`}
                className="name-list"
              >
                {`${first_name} ${last_name}`}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MentorsView;
