import {
  UserOutlined,
  CloudOutlined,
  RocketTwoTone
} from '@ant-design/icons';
import { Menu,Avatar } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/user");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Avatar
     size={64} 
    icon={<RocketTwoTone />}
    className='logo'
  />
      <Menu
        className="SideMenuVertical"
        theme="dark"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "User",
            key: "/user",
            icon:<UserOutlined />,
          },
          {
            label: "Weather",
            key: "/weather",
            icon:<CloudOutlined />,
          }
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;
