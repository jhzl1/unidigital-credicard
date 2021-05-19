import CredicardLogo from "../assets/img/credicard_logo2.png";
import UserHeader from "./UserHeader";
import ContentFooter from "../components/ContentFooter";
import { Container, Row, Col } from "react-bootstrap";

const ContentDesktop = ({ childrens }) => {
  return (
    <Container fluid className="my-3 ">
      <Row>
        <Col>
          <img
            src={CredicardLogo}
            height="50"
            width="160px"
            alt="Credicard"
            className="me-3"
          />
          <UserHeader user="Mi Perfil" />
        </Col>
      </Row>

      {childrens}
      <ContentFooter />
    </Container>
  );
};

export default ContentDesktop;
