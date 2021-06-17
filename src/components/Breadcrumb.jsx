import { Breadcrumb as BD } from "antd";

const Breadcrumb = ({ names }) => {
  return (
    <BD className="mb-3">
      {names.map((name) => (
        <BD.Item key={name.name}>{name.name}</BD.Item>
      ))}
    </BD>
  );
};

export default Breadcrumb;
