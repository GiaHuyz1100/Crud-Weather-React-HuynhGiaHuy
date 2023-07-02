import {
  UnorderedListOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
const EmpListing = () => {
  const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/detail/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/edit/" + id);
  };
  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:8000/User/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/User")
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
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h1>
            <UnorderedListOutlined /> User Listing
          </h1>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Button type="primary" ghost href="/create">
              Add New (+)
            </Button>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>PassWord</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.UserName}</td>
                    <td>{item.Email}</td>
                    <td>{item.PassWord}</td>
                    <td>
                      <Space wrap>
                        <Button
                          type="primary"
                          icon={<EditOutlined />}
                          onClick={() => {
                            LoadEdit(item.id);
                          }}
                          className="btn btn-success"
                        >
                          Edit
                        </Button>
                        <Button
                          type="primary"
                          danger
                          icon={<DeleteOutlined />}
                          onClick={() => {
                            Removefunction(item.id);
                          }}
                          className="btn btn-danger"
                        >
                          Remove
                        </Button>
                        <Button
                          type="primary"
                          icon={<EyeOutlined />}
                          onClick={() => {
                            LoadDetail(item.id);
                          }}
                          className="btn btn-primary"
                        >
                          View
                        </Button>
                      </Space>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpListing;
