import React, { useEffect, useState } from "react";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";
import { useNavigate } from "react-router-dom";
import { Layout, Button, Typography, theme } from "antd";
import "antd/dist/reset.css";
import "./App.css";
const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;
const storage = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {
    return JSON.parse(localStorage.getItem(key));
  },
};

const App = () => {
  const [selectedKeys, setSelectedKeys] = useState("/user");
  const [collapsed, setCollapsed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(storage.get("isLoggedIn") ?? false);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    storage.set("isLoggedIn", false);
    navigate("/");
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <SideMenu></SideMenu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
          }}
        >
          <Title className="logo" type="success" level={2}>
            Huỳnh Gia Huy
          </Title>
          <div style={{ position: "absolute", right: 50 }}>
            <Button type="primary" danger ghost onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <PageContent></PageContent>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by -
          <Typography.Link
            href="https://huynhgiahuyz.w3spaces.com/"
            target={"_blank"}
          >
            Huỳnh Gia Huy
          </Typography.Link>
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
