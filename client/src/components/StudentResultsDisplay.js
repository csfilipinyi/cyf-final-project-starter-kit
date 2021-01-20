import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

export default function StudentResultsDisplay({ studentDetail }) {
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
  let skills = {
    html: "HTML",
    css: "CSS",
    git: "Git",
    javascript: "JavaScript",
    react: "React",
    node: "Node.js",
    sql: "SQL",
  };

  return (
    <Accordion>
      {Object.keys(skills).map((skill, index) => {
        return (
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey={index.toString()}
                className={getClassNameFromAbility(getAverageAbility(skill))}
              >
                {skills[skill]}:{getLabelFromAbility(getAverageAbility(skill))}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index.toString()}>
              <Card.Body>{displayDetails(skill)}</Card.Body>
            </Accordion.Collapse>
          </Card>
        );
      })}
    </Accordion>
  );
}
