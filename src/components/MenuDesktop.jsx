import { useState } from "react";
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import LogoTransparent from "../assets/img/unidigital-logo-color.png";
import { dataMenu } from "../data/dataMenu";

const MenuDesktop = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <ProSidebar
      collapsed={toggle}
      className="d-none d-sm-none d-md-none d-lg-block"
    >
      <Link to="/home">
        <img
          src={LogoTransparent}
          alt=""
          style={{ width: "50px" }}
          className="logo-menu"
        />
      </Link>
      <Menu iconShape="square" style={{ height: "90.8vh" }}>
        {dataMenu.map((item) => (
          <SubMenu
            key={item.id}
            icon={item.icon}
            title={item.name}
            className="submenu"
          >
            {item.items.map((item, index) => (
              <MenuItem key={index}>
                <Link to={item.path}>{item.name}</Link>
              </MenuItem>
            ))}
          </SubMenu>
        ))}
      </Menu>

      <div
        className="d-flex justify-content-center trigger-menu "
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? <RightOutlined /> : <LeftOutlined />}
      </div>
    </ProSidebar>
  );
};

export default MenuDesktop;
