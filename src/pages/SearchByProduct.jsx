import { Container, Row, Col } from "react-bootstrap";
import BreadcrumbSearchByProduct from "../components/BreadcrumbSearchByProduct";
import FormSearchByProduct from "../components/FormSearchByProduct";

const SearchByProduct = () => {
  return (
    <Container className="desktop-container my-5 p-4" fluid>
      <Row>
        <Col>
          <BreadcrumbSearchByProduct />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormSearchByProduct />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchByProduct;
