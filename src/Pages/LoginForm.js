import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Typography,
  Form,
  Input,
  Alert,
} from "antd";
import {
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import axios from "axios";
const { Title } = Typography;

const storage = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {
    return JSON.parse(localStorage.getItem(key));
  },
};

const LoginForm = ({ setIsLoggedIn }) => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    try {
      const response = await axios.get("http://localhost:8000/User");
      const users = response.data;
      const user = users.find(
        (user) =>
          user.Email === values.email && user.PassWord === values.password
      );
      const isAdmin =
        values.email === "huy@gmail.com" &&
        values.password === "12345678";
      if (user || isAdmin) {
        setIsLoggedIn(true);
        storage.set("isLoggedIn", true); // Lưu thông tin của user vào localStorage
        navigate("/user");
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (error) {
      setError("Failed to fetch user data. Please try again later.");
    }
  };

  return (
    <div className="layout-default layout-signin"
    >
        {error && (
          <Alert
            message="SingnIn Failed"
            description={error}
            type="error"
            closable
            onClose={() => setError(null)}
            style={{ marginBottom: 24 }}
          />
        )}
        <>
          <Col
            xs={{ span: 20, offset: 4 }}
            lg={{ span: 8, offset: 8 }}
            md={{ span: 10, offset: 10 }}
          >
            <Title className="mb-15">Sign In</Title>
            <Title className="font-regular text-muted" level={5}>
              Enter your email and password to sign in
            </Title>
            <Form onFinish={onFinish} layout="vertical" className="row-col">
              <Form.Item
                className="username"
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                className="username"
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  SIGN IN
                </Button>
              </Form.Item>
              <p className="font-semibold text-muted">
                Don't have an account?{" "}
                <Link to="/sign-up" className="text-dark font-bold">
                  Sign Up
                </Link>
              </p>
            </Form>
          </Col>
        </>
    </div>
  );
};

export default LoginForm;
