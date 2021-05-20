import { slide as MenuSlide } from "react-burger-menu";
import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import { useState } from "react";
import LogoTransparent from "../assets/img/unidigital-logo-new.png";
import { Link } from "react-router-dom";
import { Accordion, Card } from "react-bootstrap";
import {
  UserOutlined,
  FundOutlined,
  ReadOutlined,
  FileOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

const MenuResponsive = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <MenuSlide
      isOpen={false}
      onStateChange={() => setIsOpen(!isOpen)}
      customBurgerIcon={<Burger isOpen={isOpen} />}
    >
      <Link to="/home">
        <img
          src={LogoTransparent}
          alt="Unigital"
          style={{ width: "240px" }}
          className="my-3"
        />
      </Link>

      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <FileOutlined /> Documentos
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <>
              <Card.Body>
                <Link to="/documents/SearchByNumber" className="bm-item-list">
                  Número de documento
                </Link>
              </Card.Body>
              <Card.Body>
                <Link to="/documents/SearchByControl" className="bm-item-list">
                  Número de control
                </Link>
              </Card.Body>
              <Card.Body>
                <Link
                  to="/documents/SearchByFiscalRegistry"
                  className="bm-item-list"
                >
                  RIF o cédula
                </Link>
              </Card.Body>
              <Card.Body>
                <Link to="/documents/SearchByProduct" className="bm-item-list">
                  Tipo de Documento
                </Link>
              </Card.Body>
            </>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <FundOutlined /> Ciclos
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Link to="/BatchList" className="bm-item-list">
                Listas
              </Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            <BarChartOutlined /> Indicadores
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Por Archivo / Oficina</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            <ReadOutlined />{" "}
            <Link to="/SearchBook" className="bm-item-list">
              Libros
            </Link>
          </Accordion.Toggle>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            <UserOutlined /> Administración
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <Link to="/Admin" className="bm-item-list">
                Usuarios
              </Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </MenuSlide>
  );
};

export default MenuResponsive;
