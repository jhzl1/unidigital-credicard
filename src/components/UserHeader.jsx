import { Menu, Dropdown, Divider, Avatar, Badge } from "antd";
import { KeyOutlined, LoginOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const UserHeader = ({ userName, userSurname, role }) => {
  const [changeColorAvatar, setChangeColorAvatar] = useState({});

  const auth = useAuth();

  useEffect(() => {
    const setColorAvatar = () => {
      const typeRole = role;
      if (typeRole === "Administrador") {
        setChangeColorAvatar({
          backgroundColor: "#f56a00",
        });
      } else if (typeRole === "User") {
        setChangeColorAvatar({
          backgroundColor: "#7265e6",
        });
      } else {
        setChangeColorAvatar({
          backgroundColor: "#ffbf00",
        });
      }
    };
    setColorAvatar();
  }, [role]);

  const handleClick = (e) => {
    e.preventDefault();
    auth.logout();
  };

  const menu = (
    <Menu>
      <div className=" d-flex flex-column ">
        <span className="ms-2 me-2 fs-5 text-center">
          {userName} {userSurname}
        </span>
        <Divider className="mt-0 mb-1">
          <span className="fst-italic fs-6 fw-lighter">{role}</span>
        </Divider>
      </div>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          <KeyOutlined /> Cambiar Contraseña
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="/" onClick={(e) => handleClick(e)}>
          <LoginOutlined /> Cerrar sesión
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} className="mt-2 float-end me-3">
      <a
        className="ant-dropdown-link"
        onClick={(e) => e.preventDefault()}
        href="/"
      >
        <Badge status="success">
          <Avatar style={changeColorAvatar} size="large" shape="square">
            {userName}
          </Avatar>
        </Badge>
        <DownOutlined className="text-secondary p-2" />
      </a>
    </Dropdown>
  );
};

export default UserHeader;
