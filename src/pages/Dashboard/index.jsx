import React from "react";
import { withRouter } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="content" id="main">
      <form id="login-form">
        <h2>Login Form</h2>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input  autoComplete="off" id="email-input" name="email" type="text" className="form-control" placeholder="email" />
        </div>
        <button type="submit" className="btn btn-primary" id="email-login-btn" href="#facebook" >
          Login
        </button>
      </form>
    </div>
  );
};
export default withRouter(Dashboard);
