import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import StudentResultsDisplay from "./StudentResultsDisplay";

function StudentResultsContainer({ studentId, studentName }) {
  const [studentDetail, setStudentDetail] = useState([]);
  //const [isClicked, setIsClicked] = useState(false);

  const token = window.localStorage.getItem("token");
  const fetchDetails = (skill) => {
    fetch(`/api/abilities/${studentId}`, {
      headers: { token },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw data;
        }
        console.log(data);
        setStudentDetail(data);
      });
  };

  useEffect(fetchDetails, [studentId]);
  const abilityLength = [];
  console.log(abilityLength);

  return (
    <Container className="learning-objective-container">
      <h2>{studentName}</h2>

      <StudentResultsDisplay studentDetail={studentDetail} />
    </Container>
  );
}
export default StudentResultsContainer;
