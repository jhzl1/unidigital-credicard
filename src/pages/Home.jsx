import { Breadcrumb, Tooltip } from "antd";
import { linksHome } from "../data/dataLinksHome";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { desktopVariants } from "../data/dataAnimation";
import IlustrationHome from "../components/IlustrationHome";
import { Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <motion.div
      className="my-5 p-4 desktop-container"
      variants={desktopVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Row>
        <Col sm={12} lg={5}>
          <Breadcrumb className="mb-3">
            <Breadcrumb.Item>Inicio</Breadcrumb.Item>
          </Breadcrumb>

          <IlustrationHome />
        </Col>
        <Col>
          <div className="mt-4">
            <h1 className="fw-bold title-home">Digital Invoice</h1>
            <h3>Visor de Documentos Fiscales</h3>
            <p>
              Genera en formato PDF y XML los Documentos Fiscales de tu empresa,
              realiza búsqueda por Cédula/Rif, Tipo de Documento y Fechas.
              También puedes generar los Libros de Ventas
            </p>

            <span className="fs-4 mt-5">Buscar documentos por:</span>

            <div className="d-flex flex-row flex-wrap">
              {linksHome.map((item) => (
                <Tooltip placement="bottom" title={item.title}>
                  <Link
                    key={item.title}
                    to={item.path}
                    className="m-3 p-3 fs-5 text-center links-home"
                  >
                    {item.icon}
                  </Link>
                </Tooltip>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Home;
