import { Container, Row, Col } from "react-bootstrap";
import FormSearchByControl from "../components/FormSearchByControl";
import Breadcrumb from "../components/Breadcrumb";
import { Table, Spin, message } from "antd";
import { useState } from "react";
import { sendData } from "../services/api";
import { columnsGeneral } from "../data/dataGeneralTable";
import { breadcrumbSearchByControl } from "../data/dataBreadcrumbs";

const SearchByControl = () => {
  const [dataTable, setDataTable] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    setLoading(true);
    console.log(data);
    try {
      const res = await sendData("/documents/searchbycontrolnumber", data);
      console.log(res);
      setDataTable(res.data.documents);

      if (
        res.data.information[0] ===
        "No se han encontrado documentos por el numero de control indicado"
      ) {
        message.warning(res.data.information[0], [5]);
      }

      // resetForm();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Container className="desktop-container my-5 p-4" fluid>
      <Row>
        <Col>
          <Breadcrumb names={breadcrumbSearchByControl} />

          <FormSearchByControl handleSubmit={handleSubmit} />

          {loading && (
            <div className="d-flex w-100 justify-content-center p-5">
              <Spin size="large" className="text-center" />
            </div>
          )}
          {!!dataTable && dataTable.length !== 0 && (
            <Table
              columns={columnsGeneral}
              dataSource={dataTable}
              rowKey="strongId"
              className="mt-4 table"
              scroll={{ x: "max-content" }}
              size="small"
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SearchByControl;
