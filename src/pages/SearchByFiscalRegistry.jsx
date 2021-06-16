import { Container, Row, Col } from "react-bootstrap";
import BreadcrumbSearchByFiscalRegistry from "../components/BreadcrumbSearchByFiscalRegistry";
import FormSearchByFiscalRegistry from "../components/FormSearchByFiscalRegistry";
import { Table, Spin, message } from "antd";
import { useState } from "react";
import { columnsGeneral } from "../data/dataGeneralTable";
import { sendData } from "../services/api";

const SearchByFiscalRegistry = () => {
  const [dataTable, setDataTable] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await sendData("/documents/searchbyrif", data);
      if (
        res.data.information[0] ===
        "No se han encontrado documentos por el rif indicado"
      ) {
        message.warning(res.data.information[0], [5]);
      }
      setDataTable(res.data.documents);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Container className="desktop-container my-5 p-4" fluid>
      <Row>
        <Col>
          <BreadcrumbSearchByFiscalRegistry />

          <FormSearchByFiscalRegistry handleSubmit={handleSubmit} />
          {loading && (
            <div className="d-flex w-100 justify-content-center p-5">
              <Spin size="large" className="text-center" />
            </div>
          )}

          {dataTable.length > 1 && (
            <Table
              columns={columnsGeneral}
              dataSource={dataTable}
              className="mt-4 table"
              size="small"
              scroll={{ x: "max-content" }}
              rowKey="strongId"
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SearchByFiscalRegistry;
