import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const host = "http://localhost:3001";

  const [ body, setBody ] = useState({email: "", password: ""});
//   let history = useHistory();
  let navigate = useNavigate();

  const handleSubmitClick = async (e) => {
    e.preventDefault();

    const response = await fetch(`${host}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: body.email, password: body.password})
    });

    const json = await response.json();
    console.log("loginJson", json);
    if (json.status === true) {
        // save the token & redirect
        localStorage.setItem('token', json.token);
        // history.push("/");
        navigate.push("/");
    } else {
        alert("Invalid Email OR Password..!")
    }
  };

  const onChange = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmitClick}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={body.email}
            onChange={onChange}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={body.password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
