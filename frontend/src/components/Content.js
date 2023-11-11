import { Button, Col, Container, Row } from "react-bootstrap";

function ContentComponents() {
  return (
    <div className="id">
      <div>
        <Row className="rows">
          <Col>
            <Row>
              <Col>
                <div className="admin">
                  Admin
                  <Container className="camera1">Camera</Container>
                </div>
              </Col>
              <Col>
                <Container className="admin">
                  Client
                  <Container className="camera1">Camera</Container>
                </Container>
              </Col>
            </Row>
            <div className="textarea">
              Input Suggestion
              <Container className="area">
                <textarea className="inputtext">Tulis Disini</textarea>
              </Container>
              <Container className="buttonops">
                <Button className="button">Insert</Button>
              </Container>
            </div>
          </Col>
          <Col>
            <Row>
              <Col>
                <div className="calltitle">
                  Incoming Call
                  <Container className="call">Camera</Container>
                </div>
              </Col>
            </Row>
            <div className="historytitle">
              History<Container className="history">Camera</Container>
            </div>
          </Col>
        </Row>
      </div>
      <div></div>
    </div>
  );
}

export default ContentComponents;
