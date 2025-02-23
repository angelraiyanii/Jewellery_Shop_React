import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    profileImage: null,
  });

  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.fullName) errors.fullName = "Full name is required.";
    else if (data.fullName.length < 3)
      errors.fullName = "Full name must be at least 3 characters.";

    if (!data.email) errors.email = "Email is required.";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email))
      errors.email = "Invalid email format.";

    if (!data.mobile) errors.mobile = "Mobile number is required.";
    else if (!/^\d{10}$/.test(data.mobile))
      errors.mobile = "Enter a valid 10-digit mobile number.";

    if (!data.gender) errors.gender = "Please select a gender.";

    if (!data.address) errors.address = "Address is required.";
    if (!data.city) errors.city = "City is required.";
    if (!data.state) errors.state = "State is required.";

    if (!data.pincode) errors.pincode = "Pincode is required.";
    else if (!/^\d{6}$/.test(data.pincode))
      errors.pincode = "Pincode must be a 6-digit number.";

    if (!data.profileImage) errors.profileImage = "Profile image is required.";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data Submitted:", formData);
      alert("Registration successful!");
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        gender: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        profileImage: null,
      });
      setImagePreview(null);
      setErrors({});
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center ">
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-4 ">Register Now</h2>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label fw-bold">Full Name</label>
            <input
              type="text"
              name="fullName"
              className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <div className="invalid-feedback">{errors.fullName}</div>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input
              type="email"
              name="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          {/* Mobile */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Mobile No</label>
              <input
                type="tel"
                name="mobile"
                className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
              />
              {errors.mobile && (
                <div className="invalid-feedback">{errors.mobile}</div>
              )}
            </div>

            {/* Gender */}
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Gender</label>
              <select
                name="gender"
                className={`form-control ${errors.gender ? "is-invalid" : ""}`}
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && (
                <div className="invalid-feedback">{errors.gender}</div>
              )}
            </div>
          </div>

          {/* Address */}
          <div className="mb-3">
            <label className="form-label fw-bold">Address</label>
            <textarea
              name="address"
              className={`form-control ${errors.address ? "is-invalid" : ""}`}
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              rows="2"
            ></textarea>
            {errors.address && (
              <div className="invalid-feedback">{errors.address}</div>
            )}
          </div>

          {/* City & State */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">City</label>
              <input
                type="text"
                name="city"
                className={`form-control ${errors.city ? "is-invalid" : ""}`}
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
              />
              {errors.city && (
                <div className="invalid-feedback">{errors.city}</div>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">State</label>
              <input
                type="text"
                name="state"
                className={`form-control ${errors.state ? "is-invalid" : ""}`}
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter your state"
              />
              {errors.state && (
                <div className="invalid-feedback">{errors.state}</div>
              )}
            </div>
          </div>

          {/* Pincode */}
          <div className="mb-3">
            <label className="form-label fw-bold">Pincode</label>
            <input
              type="text"
              name="pincode"
              className={`form-control ${errors.pincode ? "is-invalid" : ""}`}
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Enter your pincode"
            />
            {errors.pincode && (
              <div className="invalid-feedback">{errors.pincode}</div>
            )}
          </div>
          {/* Image Upload */}
          <div className="mb-3">
            <label className="form-label fw-bold">Profile Image</label>
            <input
              type="file"
              name="profileImage"
              className={`form-control ${
                errors.profileImage ? "is-invalid" : ""
              }`}
              accept="image/png, image/jpeg, image/jpg"
              onChange={handleImageChange}
            />
            {errors.profileImage && (
              <div className="invalid-feedback">{errors.profileImage}</div>
            )}
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-3 img-thumbnail"
                width="100"
              />
            )}
          </div>
          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-50">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
