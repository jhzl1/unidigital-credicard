import { Container, Row, Col } from "react-bootstrap";
import BreadcrumbSearchByControl from "../components/BreadcrumbSearchByControl";
import FormSearchByControl from "../components/FormSearchByControl";

const SearchByControl = () => {
  return (
    <Container className="desktop-container my-5 p-4" fluid>
      <Row>
        <Col>
          <BreadcrumbSearchByControl />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormSearchByControl />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchByControl;
