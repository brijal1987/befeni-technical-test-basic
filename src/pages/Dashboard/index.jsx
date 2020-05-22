import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState("N/A");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = async () => {
    try {
      if (value != "") {
        const { data } = await axios.post(`http://127.0.0.1:5000/apply`, {
          value,
        });
        setError();
        if (data.error) {
          setError("Enter Proper set of instructions");
          setResult('N/A');
        } else {
          setResult(data.output);
        }
        console.log("response", data);
      } else {
        setError("Enter Proper set of instructions");
        setResult('N/A');
      }
    } catch (error) {
      setError("Enter Proper set of instructions");
      setResult('N/A');
    }
  };
  return (
    <div className="App">
      <header style={{ textAlign: "center" }}>
        <Link to="/">
          <img
            src="https://cdn.website-editor.net/7faf6d1ccff4459495853794e59fe9be/dms3rep/multi/mobile/Befeni_ohne_Claim.png"
            alt="beneni"
          />
        </Link>
      </header>
      <div className="row">
        <div className="col-md-3 box">&nbsp;</div>
        <div className="col-md-6 box">
          <div className="inner">
            <div className="content" id="main">
              {/* <form onSubmit={handleSubmit}> */}
              {error && <div className="text-danger">{error}</div>}
              <div className="form-group">
                <label htmlFor="email">Set of instructions:</label>
                <textarea
                  onChange={handleInputChange}
                  name={value}
                  type="text"
                  className="form-control"
                  placeholder="Please enter set of instructions"
                />
                <br />
                <i style={{ fontSize: "10px", color: "#000" }}>
                  Note: Please enter instructions like given below
                  <br />
                  add 2<br />
                  multiply 3<br />
                  apply 3
                </i>
              </div>
              <hr />
              <div>Result is : {result}</div>
              <hr />
              <button
                type="button"
                onClick={handleSubmit}
                className="btn btn-primary"
              >
                Apply
              </button>
              {/* </form> */}
            </div>
          </div>
        </div>
        <div className="col-md-3 box">&nbsp;</div>
      </div>
    </div>
  );
};
export default withRouter(Dashboard);
