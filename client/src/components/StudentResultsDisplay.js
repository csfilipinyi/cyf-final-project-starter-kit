import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

export default function StudentResultsDisplay({
  displayDetails,
  getAverageAbility,
  getClassNameFromAbility,
  getLabelFromAbility,
}) {
  return (
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
            className={getClassNameFromAbility(getAverageAbility("git"))}
          >
            GIT:
            {getLabelFromAbility(getAverageAbility("git"))}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>{displayDetails("git")}</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle
            eventKey="3"
            variant="link"
            as={Button}
            className={getClassNameFromAbility(getAverageAbility("javascript"))}
          >
            JavaScript:
            {getLabelFromAbility(getAverageAbility("javascript"))}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>{displayDetails("javascript")}</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle
            as={Button}
            variant="link"
            eventKey="4"
            className={getClassNameFromAbility(getAverageAbility("react"))}
          >
            React:
            {getLabelFromAbility(getAverageAbility("react"))}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body>{displayDetails("react")}</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle
            as={Button}
            variant="link"
            eventKey="5"
            className={getClassNameFromAbility(getAverageAbility("node"))}
          >
            Node:
            {getLabelFromAbility(getAverageAbility("node"))}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5">
          <Card.Body>{displayDetails("node")}</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle
            as={Button}
            variant="link"
            eventKey="6"
            className={getClassNameFromAbility(getAverageAbility("sql"))}
          >
            SQL:
            {getLabelFromAbility(getAverageAbility("sql"))}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="6">
          <Card.Body>{displayDetails("sql")}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
