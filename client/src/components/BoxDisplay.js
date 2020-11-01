import React, { useState, useEffect } from "react";
import {Accordion, Card, Button} from "react-bootstrap";
// let { id } = useParams();
// console.log(id);

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
  const [studentDetail, setStudentDetail] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  console.log(studentDetail);

  
  const fetchDetails = (skill) => {
    
    fetch(`/api/mentors/${skill}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw data;
        }
        console.log(data);
        setStudentDetail(data);
        setIsClicked(!isClicked);
      });
  };

  const details = studentDetail.map(({ description, ability }) => {
    return  (
      <p>
        - {description}: score :{ability}
      </p>
    ) ;
  });

  return (
    <div className="learning-objective-container">
      <h2>{studentData[studentId].name}</h2>
      
      <ul>
        <li>
          <button onClick={() => fetchDetails('html')}>
            HTML:
            {progress(studentData[studentId].achievement[0].ability)}
          </button>
          {/* { studentDetail.map(({description, ability})=>{
            return (isClicked ? <p>- {description}: score :{ability}</p>: null) 
          })} */}
          {isClicked ? <p>{details}</p> : null}
        </li>
        <li>
          <button onClick={() => fetchDetails('css')}>
            CSS:{progress(studentData[studentId].achievement[3].ability)}
          </button>
        {isClicked ? <p>{details}</p> : null}
        </li>

        <li>
        <button onClick={() => fetchDetails('javascript')}>
          JavaScript:{progress(studentData[studentId].achievement[5].ability)}
          </button>
        {isClicked ? <p>{details}</p> : null}
        </li>
        <li>
        <button onClick={() => fetchDetails('react')}>
          React:{progress(studentData[studentId].achievement[7].ability)}
          </button>
        {isClicked ? <p>{details}</p> : null}
          </li>
        <li>
        <button onClick={() => fetchDetails('node')}>
          Node:{progress(studentData[studentId].achievement[9].ability)}
          </button>
        {isClicked ? <p>{details}</p> : null}
          </li>
        <li>
        <button onClick={() => fetchDetails('sql')}>
          SQL:{progress(studentData[studentId].achievement[11].ability)}
          </button>
        {isClicked ? <p>{details}</p> : null}</li>
      </ul>
      <button className="sumbit expand-btn" type="submit" variant="secondary">
        Expand
      </button>
   
    </div>
  );
}
export default BoxDisplay;
