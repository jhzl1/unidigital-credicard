import { Container, Row, Col } from "react-bootstrap";
import BreadcrumbSearchByFiscalRegistry from "../components/BreadcrumbSearchByFiscalRegistry";
import FormSearchByFiscalRegistry from "../components/FormSearchByFiscalRegistry";

const SearchByFiscalRegistry = () => {
  return (
    <Container className="desktop-container my-5 p-4" fluid>
      <Row>
        <Col>
          <BreadcrumbSearchByFiscalRegistry />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormSearchByFiscalRegistry />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchByFiscalRegistry;
