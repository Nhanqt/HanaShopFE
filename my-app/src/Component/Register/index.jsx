import React, { Component, useState, useEffect } from "react";
import logo from "../../img/fashion_02.jpg";
function Register() {
  const initialValues = {
    username: "",
    password: "",
    repassword: "",
    fullname: "",
    address: "",
    phone: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    if (values.password != values.repassword) {
      errors.repassword = "Password not match!";
    }
    if (!values.fullname) {
      errors.fullname = "Fullname is required!";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }
    if (!values.phone) {
      errors.phone = "Phone is required!";
    }
    return errors;
  };

  async function signUp() {
    let username = formValues.username;
    let password = formValues.password;
    let fullname = formValues.fullname;
    let address = formValues.address;
    let phone = formValues.phone;
    let item = { username, password, fullname, address, phone };
    let result = await fetch("http://localhost:5000/api/users/", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    result = await result.json();
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <div>
        <img
          src={logo}
          alt="logo"
          style={{
            maxWidth: "400px",
            margin: "5% auto",
            height: "434px",
            border: "1px solid #a19b9a",
          }}
        />
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #a19b9a",

            maxWidth: "400px",
            margin: "5% auto",
            padding: "14px",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Register</h1>
          <div>
            <label>
              <input
                style={{ width: "390px", marginBottom: "10px", height: "20px" }}
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
              />
            </label>
            <p style={{ color: "red", fontSize: "10px" }}>
              {formErrors.username}
            </p>
          </div>

          <div>
            <label>
              <input
                style={{ width: "390px", marginBottom: "10px", height: "20px" }}
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </label>
            <p style={{ color: "red", fontSize: "10px" }}>
              {formErrors.password}
            </p>
          </div>
          <div>
            <label>
              <input
                style={{ width: "390px", marginBottom: "10px", height: "20px" }}
                type="password"
                name="repassword"
                placeholder="Re-password"
                value={formValues.repassword}
                onChange={handleChange}
              />
            </label>
            <p style={{ color: "red", fontSize: "10px" }}>
              {formErrors.repassword}
            </p>
          </div>
          <div>
            <label>
              <input
                style={{ width: "390px", marginBottom: "10px", height: "20px" }}
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={formValues.fullname}
                onChange={handleChange}
              />
            </label>
            <p style={{ color: "red", fontSize: "10px" }}>
              {formErrors.fullname}
            </p>
          </div>
          <div>
            <label>
              <input
                style={{ width: "390px", marginBottom: "10px", height: "20px" }}
                type="text"
                name="address"
                placeholder="Address"
                value={formValues.address}
                onChange={handleChange}
              />
            </label>
            <p style={{ color: "red", fontSize: "10px" }}>
              {formErrors.address}
            </p>
          </div>
          <div>
            <label>
              <input
                style={{ width: "390px", marginBottom: "10px", height: "20px" }}
                type="text"
                name="phone"
                placeholder="Phone"
                value={formValues.phone}
                onChange={handleChange}
              />
            </label>
            <p style={{ color: "red", fontSize: "10px" }}>{formErrors.phone}</p>
          </div>
          <button
            onClick={signUp}
            type="submit"
            value="Register"
            style={{
              marginTop: "10px",
              background: "#ab2053",
              color: "#ffff",
              border: "1px solid #a19b9a",
              height: "30px",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
