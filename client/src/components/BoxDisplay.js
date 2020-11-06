import React, { useState, useEffect } from "react";
import { Accordion, Card, Button, Container, Jumbotron } from "react-bootstrap";

// function progress(params) {
//   if (params == 2) {
//     return " Strong";
//   } else if (params == 1) {
//     return " Average";
//   } else {
//     return " Weak";
//   }
// }

function BoxDisplay({ studentId, studentName }) {
  const [studentDetail, setStudentDetail] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

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
  //confident still learning not confident
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

  const getAverageAbility = (skill) => {
    const filteredResults = studentDetail.filter((lo) => lo.skill === skill);
    const totalAbility = filteredResults.reduce(
      (currentTotalAbility, { ability }) => currentTotalAbility + ability,
      0
    );

    const averageAbility = Math.round(
      (totalAbility / (filteredResults.length * 2)) * 100
    );

    console.log(averageAbility);
    const abilitiesAreAllNull = filteredResults.every(
      (lo) => lo.ability === null
    );
    return abilitiesAreAllNull ? null : averageAbility;
  };

  function getLabelFromAbility(averageAbility) {
    if (averageAbility === null) {
      return " Not covered";
    }
    if (averageAbility < 25) {
      return " Not confident";
    }
    if (averageAbility > 25 && averageAbility < 75) {
      return " Still learning";
    }
    if (averageAbility > 75) {
      return "  Confident";
    }
  }

  function getClassNameFromAbility(averageAbility) {
    if (averageAbility === null) {
      return " text-dark";
    }
    if (averageAbility < 25) {
      return "btn-red text-light";
    } else if (averageAbility > 25 && averageAbility < 75) {
      return "btn-yellow text-dark";
    } else if (averageAbility > 75) {
      return " btn-green text-light";
    }
  }

  console.log(getAverageAbility());

  return (
    <Container className="learning-objective-container">
      <h2>{studentName}</h2>

      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="0"
              className={getClassNameFromAbility(getAverageAbility("html"))}
            >
              HTML:
              {getLabelFromAbility(getAverageAbility("html"))}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{displayDetails("html")}</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle
              eventKey="1"
              variant="link"
              as={Button}
              className={getClassNameFromAbility(getAverageAbility("css"))}
            >
              CSS:
              {getLabelFromAbility(getAverageAbility("css"))}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>{displayDetails("css")}</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle
              eventKey="2"
              variant="link"
              as={Button}
              className={getClassNameFromAbility(
                getAverageAbility("javascript")
              )}
            >
              JavaScript:
              {getLabelFromAbility(getAverageAbility("javascript"))}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>{displayDetails("javascript")}</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="3"
              className={getClassNameFromAbility(getAverageAbility("react"))}
            >
              React:
              {getLabelFromAbility(getAverageAbility("react"))}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>{displayDetails("react")}</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="4"
              className={getClassNameFromAbility(getAverageAbility("node"))}
            >
              Node:
              {getLabelFromAbility(getAverageAbility("node"))}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>{displayDetails("node")}</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="5"
              className={getClassNameFromAbility(getAverageAbility("sql"))}
            >
              SQL:
              {getLabelFromAbility(getAverageAbility("sql"))}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body>{displayDetails("sql")}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
}
export default BoxDisplay;
