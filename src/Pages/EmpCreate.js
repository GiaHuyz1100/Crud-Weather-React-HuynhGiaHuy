import React from "react";
import { Button, Typography, Card,Input, Form, Checkbox } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const { Title } = Typography;

const EmpCreate = () => {
  const [id, idchange] = useState("");
  const [UserName, UserNamechange] = useState("");
  const [Email, Emailchange] = useState("");
  const [PassWord, PassWordchange] = useState("");
  const [FirstName, FirstNamechange] = useState("");
  const [SurName, SurNamechange] = useState("");
  const [FullName, FullNamechange] = useState("");
  const [ProvinceName, ProvinceNamechange] = useState("");
  const [DistrictName, DistrictNamechange] = useState("");
  const [WardName, WardNamechange] = useState("");
  const [AddressNo, AddressNochange] = useState("");
  const [FullNameA, FullNameAchange] = useState("");
  const [DateOfBir, DateOfBirchange] = useState("");
  const [IntroduceYourself, IntroduceYourselfchange] = useState("");
  const [active, activechange] = useState(true);
  const [validation, valchange] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = {
      UserName,
      Email,
      PassWord,
      FirstName,
      SurName,
      FullName,
      Address:{ProvinceName,DistrictName,WardName,AddressNo,FullNameA},
      DateOfBir,
      IntroduceYourself,
      active,
    };

    fetch("http://localhost:8000/User", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/user");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="layout-default ant-layout layout-sign-up">
      <div className="sign-up-header">
        <div className="content">
          <Title>Sign Up</Title>
          <p className="text-lg">
            Use these awesome forms to login or create new account in your
            project for free.
          </p>
        </div>
      </div>

      <Card
        className="card-signup header-solid ant-card pt-0 cardup"
        title={<h5>Register With</h5>}
        bordered="false"
      >
        <form
          onSubmit={handlesubmit}
          name="basic"
          initialValues={{ remember: true }}
          className="row-col"
        >
          <Form.Item
            name="id"
            rules={[{ required: true, message: "Please Input your ID!" }]}
          >
            <Input value={id} disabled="disabled" placeholder="ID" />
          </Form.Item>

          <Form.Item
            name="UserName"
            rules={[{ required: true, message: "Please Input your username!" }]}
          >
            <Input
              required
              value={UserName}
              onMouseDown={(e) => valchange(true)}
              onChange={(e) => UserNamechange(e.target.value)}
              placeholder="UserName"
            />
            {UserName.length==0 && validation && <span className="text-danger">Enter the name</span>}
          </Form.Item>

          <Form.Item
            name="PassWord"
            rules={[{ required: true, message: "Please Input your password!" }]}
          >
            <Input
              value={PassWord}
              onChange={(e) => PassWordchange(e.target.value)}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="Email"
            rules={[{ required: true, message: "Please Input your email!" }]}
          >
            <Input
              value={Email}
              onChange={(e) => Emailchange(e.target.value)}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            name="FirstName"
            rules={[
              { required: true, message: "Please Input your FirstName!" },
            ]}
          >
            <Input
              value={FirstName}
              onChange={(e) => FirstNamechange(e.target.value)}
              placeholder="FirstName"
            />
          </Form.Item>
          <Form.Item
            name="SurName"
            rules={[{ required: true, message: "Please Input your SurName!" }]}
          >
            <Input
              value={SurName}
              onChange={(e) => SurNamechange(e.target.value)}
              placeholder="SurName"
            />
          </Form.Item>
          <Form.Item
            name="FullName"
            rules={[{ required: true, message: "Please Input your FullName!" }]}
          >
            <Input
              value={FullName}
              onChange={(e) => FullNamechange(e.target.value)}
              placeholder="FullName"
            />
          </Form.Item>

          <Form.Item
            name="ProvinceName"
            rules={[
              { required: true, message: "Please Input your ProvinceName!" },
            ]}
          >
            <Input
              value={ProvinceName}
              onChange={(e) => ProvinceNamechange(e.target.value)}
              placeholder="ProvinceName"
            />
          </Form.Item>
          <Form.Item
            name="DistrictName"
            rules={[
              { required: true, message: "Please Input your DistrictName!" },
            ]}
          >
            <Input
              value={DistrictName}
              onChange={(e) => DistrictNamechange(e.target.value)}
              placeholder="DistrictName"
            />
          </Form.Item>
          <Form.Item
            name="WardName"
            rules={[{ required: true, message: "Please Input your WardName!" }]}
          >
            <Input
              value={WardName}
              onChange={(e) => WardNamechange(e.target.value)}
              placeholder="WardName"
            />
          </Form.Item>
          <Form.Item
            name="AddressNo"
            rules={[
              { required: true, message: "Please Input your AddressNo!" },
            ]}
          >
            <Input
              value={AddressNo}
              onChange={(e) => AddressNochange(e.target.value)}
              placeholder="AddressNo"
            />
          </Form.Item>
          <Form.Item
            name="FullNameA"
            rules={[
              { required: true, message: "Please Input your FullNameA!" },
            ]}
          >
            <Input
              value={FullNameA}
              onChange={(e) => FullNameAchange(e.target.value)}
              placeholder="FullNameA"
            />
          </Form.Item>

          <Form.Item
            name="DateOfBir"
            rules={[
              { required: true, message: "Please Input your DateOfBir!" },
            ]}
          >
            <Input
              value={DateOfBir}
              onChange={(e) => DateOfBirchange(e.target.value)}
              placeholder="DateOfBir"
            />
          </Form.Item>
          <Form.Item
            name="IntroduceYourself"
            rules={[
              {
                required: true,
                message: "Please Input your IntroduceYourself!",
              },
            ]}
          >
            <Input
              value={IntroduceYourself}
              onChange={(e) => IntroduceYourselfchange(e.target.value)}
              placeholder="IntroduceYourself"
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox
              checked={active}
              onChange={(e) => activechange(e.target.checked)}
            >
              I agree the{" "}
              <a href="#pablo" className="font-bold text-dark">
                Terms and Conditions
              </a>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button style={{ width: "100%" }} type="primary" htmlType="submit">
              SIGN UP
            </Button>
          </Form.Item>
        </form>
        <p className="font-semibold text-muted text-center">
          Already have an account?{" "}
          <Link to="/create" className="font-bold text-dark">
            Sign In
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default EmpCreate;
