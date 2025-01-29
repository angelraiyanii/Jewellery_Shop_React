import { useState } from "react";
import Formvalidation from "./Formvalidation";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    appointment: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = Formvalidation(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data Submitted:", formData);
      alert("Form submitted successfully!");
      setFormData({
        email: "",
        password: "",
      });
      setErrors({});
    }
  };

  return (
    <center>
      <div className="card">
        <div className="container mt-5">
          <h2 style={{ textAlign: "center", marginBottom: "50px" }}>Contact Now</h2>
          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label fs-4">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>


            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label fs-4">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary fs-3">
              Submit
            </button>
          </form>
        </div></div></center>
  );
};

export default Login;
