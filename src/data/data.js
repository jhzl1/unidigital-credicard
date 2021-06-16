import { Space } from "antd";
import { FilePdfOutlined } from "@ant-design/icons";

export const columnsBatchList = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Archivo",
    dataIndex: "file",
    key: "file",
  },
  {
    title: "Fecha",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "N° Control Min",
    dataIndex: "numberMinControl",
    key: "numberMinControl",
  },
  {
    title: "N° Control Max",
    dataIndex: "numberMaxControl",
    key: "numberMaxControl",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
  {
    title: "Acción",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a href="/">
          Ver en PDF
          <FilePdfOutlined
            style={{ color: "red" }}
            onClick={console.log("funciona")}
          />
        </a>
      </Space>
    ),
  },
];

export const dataExampleBatchList = [
  {
    key: "1",
    id: 1655,
    file: "online",
    date: "19/05/21 11:44",
    numberMinControl: "294307",
    numberMaxControl: "294307",
    total: "4.606.589,08",
  },
  {
    key: "2",
    id: 1655,
    file: "online",
    date: "19/05/21 11:44",
    numberMinControl: "294307",
    numberMaxControl: "294307",
    total: "4.606.589,08",
  },
  {
    key: "3",
    id: 1655,
    file: "online",
    date: "19/05/21 11:44",
    numberMinControl: "294307",
    numberMaxControl: "294307",
    total: "4.606.589,08",
  },
  {
    key: "4",
    id: 1655,
    file: "online",
    date: "19/05/21 11:44",
    numberMinControl: "294307",
    numberMaxControl: "294307",
    total: "4.606.589,08",
  },
  {
    key: "5",
    id: 1655,
    file: "online",
    date: "19/05/21 11:44",
    numberMinControl: "294307",
    numberMaxControl: "294307",
    total: "4.606.589,08",
  },
  {
    key: "6",
    id: 1655,
    file: "online",
    date: "19/05/21 11:44",
    numberMinControl: "294307",
    numberMaxControl: "294307",
    total: "4.606.589,08",
  },
];

export const columnsGraphics = [
  {
    title: "Descripción",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Total",
    dataIndex: "file",
    key: "file",
  },
];
