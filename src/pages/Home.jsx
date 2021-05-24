import { Breadcrumb } from "antd";
import { getData } from "../services/api";

const Home = () => {
  return (
    <div className="my-5 p-4 desktop-container">
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
        {/* 
        <button className="btn-primary" onClick={getData}>
          Prueba
        </button> */}
      </div>
    </div>
  );
};

export default Home;
