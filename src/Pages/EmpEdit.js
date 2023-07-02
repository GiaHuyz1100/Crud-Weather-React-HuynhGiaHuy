import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Input } from "antd";
const EmpEdit = () => {
  const { empid } = useParams();

  //const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/User/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        idchange(resp.id);
        UserNamechange(resp.UserName);
        Emailchange(resp.Email);
        PassWordchange(resp.PassWord);
        FirstNamechange(resp.FirstName);
        SurNamechange(resp.SurName);
        FullNamechange(resp.FullName);
        ProvinceNamechange(resp.Address.ProvinceName);
        DistrictNamechange(resp.Address.DistrictName);
        WardNamechange(resp.Address.WardName);
        AddressNochange(resp.Address.AddressNo);
        FullNameAchange(resp.Address.FullNameA);
        DateOfBirchange(resp.DateOfBir);
        IntroduceYourselfchange(resp.IntroduceYourself);
        activechange(resp.isactive);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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
    const empdata = { id,UserName,
        Email,
        PassWord,
        FirstName,
        SurName,
        FullName,
        Address:{ProvinceName,DistrictName,WardName,AddressNo,FullNameA},
        DateOfBir,
        IntroduceYourself,
        active
    };

    fetch("http://localhost:8000/User/" + empid, {
      method: "PUT",
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
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6 cardup">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h1>User Edit</h1>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <Input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      ></Input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <Input
                        required
                        value={UserName}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => UserNamechange(e.target.value)}
                        className="form-control"
                      ></Input>
                      {UserName.length === 0 && validation && (
                        <span className="text-danger">Enter the name</span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <Input
                        value={Email}
                        onChange={(e) => Emailchange(e.target.value)}
                        className="form-control"
                      ></Input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>PassWord</label>
                      <Input
                        value={PassWord}
                        onChange={(e) => PassWordchange(e.target.value)}
                        className="form-control"
                      ></Input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>FirstName</label>
                      <Input
                        value={FirstName}
                        onChange={(e) => FirstNamechange(e.target.value)}
                        className="form-control"
                      ></Input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>SurName</label>
                      <Input
                        value={SurName}
                        onChange={(e) => SurNamechange(e.target.value)}
                        className="form-control"
                      ></Input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>FullName</label>
                      <Input
                        value={FullName}
                        onChange={(e) => FullNamechange(e.target.value)}
                        className="form-control"
                      ></Input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ProvinceName</label>
                      <Input
                        value={ProvinceName}
                        onChange={(e) => ProvinceNamechange(e.target.value)}
                        className="form-control"
                      ></Input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>DistrictName</label>
                      <Input
                        value={DistrictName}
                        onChange={(e) => DistrictNamechange(e.target.value)}
                        className="form-control"
                      ></Input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>WardName</label>
                      <Input
                        value={WardName}
                        onChange={(e) => WardNamechange(e.target.value)}
                        className="form-control"
                      ></Input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>AddressNo</label>
                      <Input
                        value={AddressNo}
                        onChange={(e) => AddressNochange(e.target.value)}
                        className="form-control"
                      ></Input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>FullNameA</label>
                      <Input
                        value={FullNameA}
                        onChange={(e) => FullNameAchange(e.target.value)}
                        className="form-control"
                      ></Input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>DateOfBir</label>
                      <Input
                        value={DateOfBir}
                        onChange={(e) => DateOfBirchange(e.target.value)}
                        className="form-control"
                      ></Input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>IntroduceYourself</label>
                      <Input
                        value={IntroduceYourself}
                        onChange={(e) =>
                          IntroduceYourselfchange(e.target.value)
                        }
                        className="form-control"
                      ></Input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="hai">
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{ width: "100%" }}
                      >
                        UPDATE
                      </Button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmpEdit;
