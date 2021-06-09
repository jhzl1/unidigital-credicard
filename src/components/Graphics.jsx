import { Row, Col } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { Table } from "antd";
import { columnsGraphics } from "../data/data";

const Graphics = () => {
  const data = {
    labels: ["Procesados", "En Cola", "No Abiertos", "Abiertos", "Error"],
    datasets: [
      {
        label: "# de Procesos",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <Row>
      <Col lg={3}>
        <Table columns={columnsGraphics} />
      </Col>
      <Col lg={9}>
        <Bar data={data} options={options} />
      </Col>
    </Row>
  );
};

export default Graphics;
