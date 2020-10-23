import React, { useState, useEffect } from "react";
import dataTesting from "../dataTesting.json";
import BoxDisplay from "../components/BoxDisplay";
//import { useParams } from "react-router";
import { useLocation } from "react-router-dom";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function MentorsView() {
  const studentId = useQuery().get("studentId");
  console.log(studentId);

  return (
    <div className="skills-container">
      <h2>Welcome Mentor</h2>
      <ul>
        {dataTesting.map((person, index) => {

       

          //console.log(person);
          return (
            <li id={index}>
              <a href={`./MentorsView?studentId=${index}`}>{person.name}</a>
            </li>
          );

        })}
      </ul>
      {studentId && (
    <div className="skills-container">
        <BoxDisplay studentData={dataTesting} studentId={studentId} />
    </div>
)}
    </div>
  );
}

export default MentorsView;
