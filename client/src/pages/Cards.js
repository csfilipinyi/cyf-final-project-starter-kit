import React  from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const Cards=({ graduate })=>{
    return(
  //   <Card>
  //   <Card.Img variant="top" src="holder.js/100px160" />
  //   <Card.Body>
  //     <Card.Title>{graduate.firstName+" "+graduate.surname}</Card.Title>
  //     <Card.Text>

  //   Personal Bio:{graduate.personalBio}
  //   skills:{graduate.skills}
  //     </Card.Text>
  //   </Card.Body>
  //   <Card.Footer>
  //     <small className="text-muted">Last updated 3 mins ago</small>
  //   </Card.Footer>
  // </Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{graduate.firstName+" "+graduate.surname}</Card.Title>
    <Card.Text>
    Personal Bio:{graduate.personalBio}
    skills:{graduate.skills}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  )
}
export default Cards;
