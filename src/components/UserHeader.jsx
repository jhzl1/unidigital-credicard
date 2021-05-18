import { Menu, Dropdown, Button } from "antd";
import { KeyOutlined, LoginOutlined } from "@ant-design/icons";

const UserHeader = ({ user }) => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          <KeyOutlined /> Cambiar Clave
        </a>
      </Menu.Item>

      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          <LoginOutlined /> Cerrar sesión
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <Button>Usuario: {user}</Button>
    </Dropdown>
  );
};

export default UserHeader;
