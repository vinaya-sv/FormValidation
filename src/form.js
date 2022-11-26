import React, { useState } from "react";
import "./form.css";
export default function Form() {
  const contents = { username: "", email: "", password: "" };
  const [formContent, changeFormContent] = useState(contents);
  const [formErrors, changeFormErrors] = useState({});
  const [isSubmit, changeIsSubmit] = useState(false);
  const x = { p1: 0, p2: 0, p3: 0, p4: 0 };
  const [error] = useState(x);

  const handleChange = (event) => {
    const { id, value } = event.target;
    changeFormContent({ ...formContent, [id]: value });
  };

  const handleSubmit = (event) => {
    changeFormErrors(validate(formContent));
    changeIsSubmit(true);
  };

  const validate = (formContent) => {
    const email = new RegExp("[0-9A-Za-z]+@[0-9A-Za-z]+[.][0-9A-Za-z]+");
    const pwd1 = new RegExp("[a-z]+");
    const pwd2 = new RegExp("[A-Z]+");
    const pwd3 = new RegExp("[0-9]+");
    const pwd4 = new RegExp("/d");
    const errors = {};
    if (!formContent.username) errors.username = "Please Fill the Column";

    if (!formContent.email) errors.email = "Please Fill the Column";
    else if (!email.test(formContent.email)) errors.email = "Invalid Email";
    if (!formContent.password) errors.password = "Please Fill the Column";
    else {
      error.p1 = pwd1.test(formContent.password) ? 1 : 0;
      error.p2 = pwd2.test(formContent.password) ? 1 : 0;
      error.p3 = pwd3.test(formContent.password) ? 1 : 0;
      error.p4 = pwd4.test(formContent.password) ? 1 : 0;

      var nos = count(error);
      if (nos === 1) errors.passval = "weak";
      else if (nos === 2) errors.passval = "good";
      else if (nos === 3) errors.passval = "strong";
      else if (nos === 4) errors.passval = "very strong";
      console.log(nos);
    }
    return errors;
  };
  const count = (error) => {
    var nos = 0;
    nos = error.p1 + error.p2 + error.p3 + error.p4;
    return nos;
  };
  const checkColor = (errors) => {
    if (errors.passval === "weak") return "red";
    else if (errors.passval === "good") return "orange";
  };

  return (
    <center>
      <div className="outer">
        <div></div>
        <p className="label">Enter your username</p>
        <input
          type="text"
          id="username"
          onChange={handleChange}
          onMouseOver={handleSubmit}
          value={formContent.username}
          placeholder="Your Username"
        />
        <p style={{ color: "red" }}>{formErrors.username}</p>

        <p className="label">Enter your email</p>
        <input
          type="email"
          id="email"
          onChange={handleChange}
          onMouseOver={handleSubmit}
          placeholder="Your Email"
        />
        <p style={{ color: "red" }}>{formErrors.email}</p>

        <p className="label">Enter your password</p>
        <input
          type="password"
          id="password"
          onChange={handleChange}
          onMouseOver={handleSubmit}
          placeholder="Your Password"
        />
        <p style={{ color: "red" }}>{formErrors.password}</p>
        <p style={{ color: checkColor }}>{formErrors.passval}</p>
      </div>
    </center>
  );
}
