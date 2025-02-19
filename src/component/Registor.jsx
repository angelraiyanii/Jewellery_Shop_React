import { useState } from "react";
import Formvalidation from "./Formvalidation";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Registor = () => {
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
        name: "",
        email: "",
        phone: "",
        password: "",
        address:"",
      });
      setErrors({});
    }
  };

  return (
    <center>
    <div className="card">
    <div className="container mt-5">
      <h2 style={{textAlign:"center", marginBottom:"50px"}}>Registor Now</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-3">
        <b> <label  htmlFor="name" className="form-label fs-4">
            Name
          </label></b> 
       <input
            type="text"
            id="name"
            name="name"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

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

        {/* Phone */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label fs-4">
            Phone No
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <div className="invalid-feedback">{errors.phone}</div>
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

        {/* Address */}
        <div className="mb-3">
          <label htmlFor="address" className="form-label fs-4">
            Address
          </label>
          <input
            type="address"
            id="address"
            name="address"
            className={`form-control ${errors.address ? "is-invalid" : ""}`}
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && (
            <div className="invalid-feedback">{errors.address}</div>
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

export default Registor;
