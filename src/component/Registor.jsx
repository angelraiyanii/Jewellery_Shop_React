import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    profileImage: null, // To store uploaded image
  });

  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null); // To show image preview

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!validTypes.includes(file.type)) {
        setErrors({ ...errors, profileImage: "Only JPG, JPEG, and PNG files are allowed." });
        return;
      }

      // Validate image size (Max 2MB)
      const maxSize = 2 * 1024 * 1024; // 2MB
      if (file.size > maxSize) {
        setErrors({ ...errors, profileImage: "File size must be less than 2MB." });
        return;
      }

      setFormData({ ...formData, profileImage: file });
      setImagePreview(URL.createObjectURL(file)); // Generate preview
      setErrors({ ...errors, profileImage: "" }); // Clear error
    }
  };

  const validateForm = (data) => {
    let errors = {};

    // Name Validation
    if (!data.name) {
      errors.name = "Name is required.";
    } else if (data.name.length < 3) {
      errors.name = "Name must be at least 3 characters long.";
    }

    // Email Validation
    if (!data.email) {
      errors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
      errors.email = "Invalid email format.";

    // Phone Validation
    if (!data.phone) {
      errors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(data.phone)) {
      errors.phone = "Phone number must be 10 digits.";
    }

    // Password Validation
    if (!data.password) {
      errors.password = "Password is required.";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }

    // Address Validation
    if (!data.address) {
      errors.address = "Address is required.";
    }

    // Profile Image Validation
    if (!data.profileImage) {
      errors.profileImage = "Profile image is required.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data Submitted:", formData);
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        address: "",
        profileImage: null,
      });
      setImagePreview(null);
      setErrors({});
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center ">
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Register Now</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-bold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">Email</label>
            <input
              type="email"
              name="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label htmlFor="phone" className="form-label fw-bold">Phone No</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          {/* Address */}
          <div className="mb-3">
            <label htmlFor="address" className="form-label fw-bold">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              className={`form-control ${errors.address ? "is-invalid" : ""}`}
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
            />
            {errors.address && <div className="invalid-feedback">{errors.address}</div>}
          </div>

          {/* Profile Image Upload */}
          <div className="mb-3">
            <label htmlFor="profileImage" className="form-label fw-bold">Profile Image</label>
            <input
              type="file"
              id="profileImage"
              className={`form-control ${errors.profileImage ? "is-invalid" : ""}`}
              onChange={handleImageChange}
              accept="image/png, image/jpeg, image/jpg"
            />
            {errors.profileImage && <div className="invalid-feedback">{errors.profileImage}</div>}
          </div>

          {/* Image Preview */}
          {imagePreview && (
            <div className="mb-3 text-center">
              <img src={imagePreview} alt="Preview" className="img-thumbnail" style={{ width: "100px", height: "100px" }} />
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-50 d-block mx-auto">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
