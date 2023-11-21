import React from 'react';
import { Navbar, Container, Button, Form , Row , Col} from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
      <Navbar.Brand href="#">
          <img
            src={process.env.PUBLIC_URL + '/logo_terribly.png'} // Add the path to your logo image
            alt="Company Logo"
            height="30"
            className="d-inline-block align-top rounded-circle"
          />
          {' | S T O R I E S'}
        </Navbar.Brand>
        
        <Form inline>
            <Row>
              <Col xs="auto">
                <Button variant="warning" className="mb-2 mb-md-0">
                  Courses
                </Button>
              </Col>
            </Row>
        </Form>
        
      </Container>
    </Navbar>
  );
}

export default Header;
