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

    if (!token) {
      history.push("/");
    }
    fetch(`/api/verify`, {headers: {token}})
  }, []);

  const studentId = useQuery().get("studentId");
  console.log(studentId);

  return (
    <div className="skills-container">
      <h2>Welcome Mentor</h2>
      <ul>
        {dataTesting.map((person, index) => {
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
      <a href="/mentorsedit" className="signup-link">
        Edit Learning Objectives
      </a>
    </div>
  );
}

export default MentorsView;
