import MenuDesktop from "../components/MenuDesktop";
import ContentDesktop from "../components/ContentDesktop";
import { Container, Row, Col } from "react-bootstrap";
import MenuResponsive from "./MenuResponsive";

const Desktop = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col xs="auto" sm="auto" md="auto" lg="auto" className="ps-0 pe-0">
          <MenuDesktop />
          <MenuResponsive />
        </Col>

        <Col>
          <ContentDesktop childrens={children} />
        </Col>
      </Row>
    </Container>
  );
};

export default Desktop;
