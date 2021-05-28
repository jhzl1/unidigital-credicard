import FormSearchByDocNumber from "../components/FormSearchByDocNumber";
import { Container, Row, Col } from "react-bootstrap";
import BreadcrumbSearchByDocNumber from "../components/BreadcrumbSearchByDocNumber";
import { Table } from "antd";
import { columnsSearchByNumber, dataExample } from "../data/data";
import { useState } from "react";
import { sendData } from "../services/api";

const SearchByDocNumber = () => {
  const [dataTable, setDataTable] = useState([]);

  const handleSubmit = async (data, { resetForm }) => {
    try {
      const reData = JSON.stringify(data);
      console.log(reData);
      const res = await sendData("/documents/searchbynumber", reData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container className="desktop-container my-5 p-4" fluid>
      <Row>
        <Col>
          <BreadcrumbSearchByDocNumber />

          <FormSearchByDocNumber handleSubmit={handleSubmit} />

          <Table
            columns={columnsSearchByNumber}
            dataSource={dataExample}
            className="mt-4 table"
            scroll={{ x: "max-content" }}
            size="small"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchByDocNumber;
