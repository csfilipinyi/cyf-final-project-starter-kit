import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import StudentResultsDisplay from "./StudentResultsDisplay";

function CalculateAverageScore({ studentId, studentName }) {
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

  // Displays what the student selected as his/her condifence level

  function getScore(ability) {
    if (ability === 0) {
      return " Not Confident";
    }
    if (ability === 1) {
      return " Still Learning";
    }
    if (ability === 2) {
      return " Confident";
    }
  }

  // list the descriptions with corresponding scores

  const displayDetails = (skill) => {
    return studentDetail
      .filter((lo) => lo.skill === skill)
      .map(({ description, ability }) => {
        return (
          <p className="display-details">
            - {description}: <span> {getScore(ability)} </span>
          </p>
        );
      });
  };

  /* calculating the average score of each skill and displaying the confidence level selected by  a student */

  const getAverageAbility = (skill) => {
    const allLoResults = studentDetail.filter((lo) => lo.skill === skill);
    const abilitiesAreAllNull = allLoResults.every((lo) => lo.ability === null);
    if (abilitiesAreAllNull) {
      return null;
    }
    const filteredLo = allLoResults.filter((lo) => lo.ability !== null);
    const totalAbility = filteredLo.reduce(
      (currentTotalAbility, { ability }) => currentTotalAbility + ability,
      0
    );

    const averageAbility = Math.round(
      (totalAbility / (filteredLo.length * 2)) * 100
    );

    console.log(skill, averageAbility);

    return averageAbility;
  };

  // displays label for overall skill

  function getLabelFromAbility(averageAbility) {
    if (averageAbility === null) {
      return " Not covered";
    }
    if (averageAbility <= 25) {
      return " Not confident";
    }
    if (averageAbility > 25 && averageAbility < 75) {
      return " Still learning";
    }
    if (averageAbility >= 75) {
      return "  Confident";
    }
  }

  // displays colour of each skill according to the average score of a student

  function getClassNameFromAbility(averageAbility) {
    if (averageAbility === null) {
      return " text-dark";
    }
    if (averageAbility <= 25) {
      return "btn-red text-light";
    } else if (averageAbility > 25 && averageAbility < 75) {
      return "btn-yellow text-dark";
    } else if (averageAbility >= 75) {
      return " btn-green text-light";
    }
  }

  return (
    <Container className="learning-objective-container">
      <h2>{studentName}</h2>

      <StudentResultsDisplay
        displayDetails={displayDetails}
        getAverageAbility={getAverageAbility}
        getClassNameFromAbility={getClassNameFromAbility}
        getLabelFromAbility={getLabelFromAbility}
      />
    </Container>
  );
}
export default CalculateAverageScore;
