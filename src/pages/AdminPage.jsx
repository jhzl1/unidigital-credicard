import { Container, Row, Col } from "react-bootstrap";
import BreadcrumbAdmin from "../components/BreadcrumbAdmin";
import UserList from "../components/UserList";

const AdminPage = () => {
  return (
    <Container className="desktop-container my-5 p-4" fluid>
      <Row>
        <Col>
          <BreadcrumbAdmin />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Crear nuevo usuario</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <UserList />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPage;
