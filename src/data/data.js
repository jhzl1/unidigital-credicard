import { Space, Tag, Button } from "antd";
import { FilePdfOutlined } from "@ant-design/icons";

export const columnsSearchByNumber = [
  {
    title: "Tipo",
    dataIndex: "product",
    key: "product",
  },
  {
    title: "Serie",
    dataIndex: "serie",
    key: "serie",
  },
  {
    title: "N° Documento",
    dataIndex: "number",
    key: "number",
    render: (text) => (
      <Tag color="#2db7f5">
        <span className="fw-bold">{text}</span>
      </Tag>
    ),
  },
  {
    title: "N° Control",
    dataIndex: "control",
    key: "control",
    render: (text) => (
      <Tag color="#f50">
        <span className="fw-bold">{text}</span>
      </Tag>
    ),
  },
  {
    title: "Fecha",
    dataIndex: "emissionDate",
    key: "emissionDate",
  },
  {
    title: "Cliente",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Moneda",
    dataIndex: "currency",
    key: "currency",
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
      <Button
        type="primary"
        danger
        onClick={() => console.log(record.strongId)}
      >
        Ver en PDF
        <FilePdfOutlined />
      </Button>
    ),
  },
];

export const dataExample = [
  {
    key: "1",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
  {
    key: "2",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
  {
    key: "3",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
  {
    key: "4",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
  {
    key: "5",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
  {
    key: "6",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
  {
    key: "7",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
  {
    key: "8",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
  {
    key: "9",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
  {
    key: "10",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
  {
    key: "11",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
  {
    key: "12",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
  {
    key: "13",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
  {
    key: "14",
    tipe: "01",
    serie: "C",
    numberDoc: "0000002272",
    numberControl: "492093",
    date: "18/05/21",
    customer: "EL CHIVO MEÓN 1000 C.A.",
    total: "4.606.589,08",
  },
];

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
