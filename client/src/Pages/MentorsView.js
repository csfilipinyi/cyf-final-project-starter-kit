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
      {/* <button
        to="/MentorsEdit"
        className="submit"
        type="submit"
        value="Submit"
        className="submit"
      >
        Edit
      </button> */}
      {studentId && (
        <div className="skills-container">
          <BoxDisplay studentData={dataTesting} studentId={studentId} />
        </div>
      )}
      <a href="/mentorsedit" className="signup-link">
        Edit Learning Objectives
      </a>
    </div>
  );
}

export default MentorsView;
