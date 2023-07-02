import { EyeOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Space, Typography } from "antd";
const { Title  } = Typography;
const EmpDetail = () => {
  const { empid } = useParams();
  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/User/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

      <div className="container">
        <div className="card row" style={{ textAlign: "left" }}>
          <div className="card-title">
            <h1>
              <EyeOutlined /> User View
            </h1>
          </div>
          <div className="card-body"></div>

          {empdata && (
            <div>
              <Space direction="vertical">
                <Title level={2} code>The Username is : <b>{empdata.UserName}</b> ({empdata.id})</Title >
                <Title level={3} type="success">Email is : {empdata.Email}</Title >
                <Title level={3} type="success">PassWord is : {empdata.PassWord}</Title >
                <Title level={3} type="success">FirstName is : {empdata.FirstName}</Title >
                <Title level={3} type="success">SurName is : {empdata.SurName}</Title >
                <Title level={3} type="success">FullName is : {empdata.FullName}</Title >
                <Title level={3} type="success">Date Of Bir is : {empdata.DateOfBir}</Title >
                <Link className="btn btn-danger" to="/">
                Back
              </Link>
              </Space>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmpDetail;
