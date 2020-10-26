import React, { useState } from "react";

//0 no confidence
//1 need to work on
//2 confidence
//any where when user click on the button it should send us number between 0 and 2 in
// the database.
//the maximum score for html skill is 10
//so on mentors page if student score between 0-4 is week
//5-7 is average
//8-10 is strong
///Note each skill have different number of learning objectives.

function progress(params) {
  if (params == 2) {
    return " Strong";
  } else if (params == 1) {
    return " Average";
  } else {
    return " Weak";
  }
}

function BoxDisplay({ studentId, studentData }) {
  console.log(studentData[1]);

  return (
    <div className="learning-objective-container">
      <h2>{studentData[studentId].name}</h2>

      <ul>
        <li>
          HTML:
          {progress(studentData[studentId].achievement[0].ability)}
        </li>
        <li>CSS:{progress(studentData[studentId].achievement[3].ability)}</li>
        <li>
          JavaScript:{progress(studentData[studentId].achievement[5].ability)}
        </li>
        <li>React:{progress(studentData[studentId].achievement[7].ability)}</li>
        <li>Node:{progress(studentData[studentId].achievement[9].ability)}</li>
        <li>SQL:{progress(studentData[studentId].achievement[11].ability)}</li>
      </ul>
      <button className="sumbit expand-btn" type="submit" variant="secondary">
        Expand
      </button>
    </div>
  );
}

export default BoxDisplay;
