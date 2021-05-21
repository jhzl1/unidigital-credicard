import { Cascader, InputNumber, Table } from "antd";
import {
  columnsBatchList,
  dataExampleBatchList,
  dataSearchByNumber,
} from "../data/data";

const FormBatchList = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h4>Parámetros de búsqueda</h4>
      <form onSubmit={handleSubmit}>
        <Cascader
          options={dataSearchByNumber}
          placeholder="Seleccione un empresa"
          className="me-3 input-default"
        />

        <InputNumber
          min={1}
          placeholder="Archivo"
          className="me-3 input-default"
        />
        <button className="btn btn-dark btn-sm">Buscar</button>
      </form>

      <Table
        columns={columnsBatchList}
        dataSource={dataExampleBatchList}
        className="mt-4 table"
        size="small"
        scroll={{ x: "max-content" }}
      />
    </>
  );
};

export default FormBatchList;
