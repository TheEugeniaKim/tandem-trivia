import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

function MyJumbotron({children}) {
  return (
    <Jumbotron>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            {children}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default MyJumbotron;