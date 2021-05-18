import { Breadcrumb } from "antd";

const SearchNumberDoc = () => {
  return (
    <div className="mx-3 my-5 p-4 desktop-container">
      <Breadcrumb className="mb-3">
        <Breadcrumb.Item>Inicio</Breadcrumb.Item>
        <Breadcrumb.Item>Documentos</Breadcrumb.Item>
        <Breadcrumb.Item>Buscar por número de documento</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default SearchNumberDoc;
