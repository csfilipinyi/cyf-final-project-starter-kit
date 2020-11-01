import React, { useState, useEffect } from "react";
import {Accordion, Card, Button, Container, Jumbotron} from "react-bootstrap";
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
        // setIsClicked(!isClicked);
      });
  };

  const details = studentDetail.map(({ description, ability }) => {
    return  (
      <p>
        - {description}:<button>score :{ability}</button> 
      </p>
    ) ;
  });

  return (
    
    <Container className="learning-objective-container">
    
      <h2>{studentData[studentId].name}</h2>
      
      {/* <ul> */}
        {/* <li>
          <button onClick={() => fetchDetails('html')}>
            HTML:
            {progress(studentData[studentId].achievement[0].ability)}
          </button> */}
          {/* { studentDetail.map(({description, ability})=>{
            return (isClicked ? <p>- {description}: score :{ability}</p>: null) 
          })} */}
          {/* {isClicked ? <p>{details}</p> : null}
        </li> */}
        {/* <li>
          <button onClick={() => fetchDetails('css')}>
            CSS:{progress(studentData[studentId].achievement[3].ability)}
          </button>
        {isClicked ? <p>{details}</p> : null}
        </li> */}

        {/* <li>
        <button onClick={() => fetchDetails('javascript')}>
          JavaScript:{progress(studentData[studentId].achievement[5].ability)}
          </button>
        {isClicked ? <p>{details}</p> : null}
        </li> */}
        {/* <li>
        <button onClick={() => fetchDetails('react')}>
          React:{progress(studentData[studentId].achievement[7].ability)}
          </button>
        {isClicked ? <p>{details}</p> : null}
          </li> */}
        {/* <li>
        <button onClick={() => fetchDetails('node')}>
          Node:{progress(studentData[studentId].achievement[9].ability)}
          </button>
        {isClicked ? <p>{details}</p> : null}
          </li> */}
        {/* <li>
        <button onClick={() => fetchDetails('sql')}>
          SQL:{progress(studentData[studentId].achievement[11].ability)}
          </button>
        {isClicked ? <p>{details}</p> : null}</li> */}
      {/* </ul> */}
     
      
      <Accordion >
      <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} onClick={() => fetchDetails('html')} variant="link" eventKey="0">
      HTML:
            {progress(studentData[studentId].achievement[0].ability)}
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>{details}</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} onClick={() => fetchDetails('css')}variant="link" eventKey="1">
      CSS:{progress(studentData[studentId].achievement[3].ability)}
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>{details}</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} onClick={() => fetchDetails('javascript')} variant="link" eventKey="2">
      JavaScript:{progress(studentData[studentId].achievement[5].ability)}
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>{details}</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} onClick={() => fetchDetails('react')}variant="link" eventKey="3">
      React:{progress(studentData[studentId].achievement[7].ability)}
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>{details}</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} onClick={() => fetchDetails('node')} variant="link" eventKey="4">
      Node:{progress(studentData[studentId].achievement[9].ability)}
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body>{details}</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} onClick={() => fetchDetails('sql')}variant="link" eventKey="5">
      SQL:{progress(studentData[studentId].achievement[11].ability)}
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="5">
      <Card.Body>{details}</Card.Body>
    </Accordion.Collapse>
  </Card>


</Accordion>
    
    </Container>
    
  );
}
export default BoxDisplay;
