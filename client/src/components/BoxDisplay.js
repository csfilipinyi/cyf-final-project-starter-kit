import React, { useState, useEffect } from "react";
import { Accordion, Card, Button, Container, Jumbotron } from "react-bootstrap";
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

function BoxDisplay({ studentId, studentName }) {
  const [studentDetail, setStudentDetail] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  console.log(studentDetail);
  const token = window.localStorage.getItem("token");
  const fetchDetails = (skill) => {
    fetch(`/api/learningobjectives/${studentId}`, {
      headers: { token },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw data;
        }
        console.log(data);
        setStudentDetail(data);
        // setIsClicked(!isClicked);
      });
  };
  useEffect(fetchDetails, [studentId]);

  const details = (skill) => {
    return studentDetail
      .filter((lo) => lo.skill === skill)
      .map(({ description, ability }) => {
        return (
          <p>
            - {description}:<button>score :{ability}</button>
          </p>
        );
      });
  };
  return (
    <Container className="learning-objective-container">
      <h2>{studentName}</h2>

      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              HTML:
              {progress(0)}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{details("html")}</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              CSS:{progress(0)}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>{details("css")}</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              JavaScript:
              {progress(0)}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>{details("javascript")}</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              React:{progress(0)}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>{details("react")}</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              Node:{progress(0)}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>{details("node")}</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="5">
              SQL:{progress(0)}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body>{details("sql")}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
}
export default BoxDisplay;
