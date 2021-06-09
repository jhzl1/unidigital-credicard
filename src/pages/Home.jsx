import { Breadcrumb } from "antd";
import { linksHome } from "../data/dataLinksHome";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { desktopVariants } from "../data/dataAnimation";

const Home = () => {
  return (
    <motion.div
      className="my-5 p-4 desktop-container"
      variants={desktopVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Breadcrumb className="mb-3">
        <Breadcrumb.Item>Inicio</Breadcrumb.Item>
      </Breadcrumb>

      <div>
        <h1>Digital Invoice</h1>
        <h3>Visor de Documentos Fiscales</h3>
        <p>
          Genera en formato PDF y XML los Documentos Fiscales de tu empresa,
          realiza búsqueda por Cédula/Rif, Tipo de Documento y Fechas. También
          puedes generar los Libros de Ventas
        </p>

        <span className="fs-4 mt-5">Accesos rápidos</span>
        <div className="d-flex flex-row">
          {linksHome.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="m-3 p-4 fs-4 w-25 links-home"
              id={item.id}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
