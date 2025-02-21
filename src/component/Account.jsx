import React, { Component } from "react";
import user1 from "./images/user1.png";

export class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProfileForm: false,
      showPasswordForm: false,
      fullName: "",
      email: "",
      phone: "",
      gender: "",
      address: "",
      city: "",
      state: "",
      pinCode: "",
      password: "",
      confirmPassword: "",
      profileImage: null,
      errors: {},
    };
  }

  validateFormP = () => {
    const errors = {};
    if (!this.state.password) {
      errors.password = "Password is required.";
    } else if (this.state.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }
    if (!this.state.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required.";
    } else if (this.state.password !== this.state.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  validateForm = () => {
    const errors = {};
    if (!this.state.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }
    if (!this.state.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
      errors.email = "Invalid email format";
    }
    if (!this.state.phone.trim()) {
      errors.phone = "Phone Number is required";
    } else if (!/^\d{10}$/.test(this.state.phone)) {
      errors.phone = "Phone number must be 10 digits";
    }
    if (!this.state.gender) {
      errors.gender = "Gender is required";
    }
    if (!this.state.address.trim()) {
      errors.address = "Address is required";
    }
    if (!this.state.city.trim()) {
      errors.city = "City is required";
    }
    if (!this.state.state.trim()) {
      errors.state = "State is required";
    }
    if (!this.state.pinCode.trim()) {
      errors.pinCode = "Pin Code is required";
    } else if (!/^\d{6}$/.test(this.state.pinCode)) {
      errors.pinCode = "Pin Code must be 6 digits";
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleSubmitProfile = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      alert("Profile updated successfully!");
      this.setState({ showProfileForm: false });
    }
  };

  handleSubmitPassword = (e) => {
    e.preventDefault();
    if (this.validateFormP()) {
      alert("Password updated successfully!");
      this.setState({ showPasswordForm: false });
    }
  };
  toggleExit = () => {
    this.setState({ showProfileForm: false });
    this.setState({ showPasswordForm: false });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row align-items shadow p-3 rounded">
          <h1 className="text-center fw-bold" style={{ color: "#41566E" }}>
            Profile Details
          </h1>

          <div className="row">
            <div className="col-md-4 text-center mb-4">
              <div className="profile-picture mb-3">
                <img
                  src={user1}
                  alt="User Profile"
                  className="img-fluid rounded-circle"
                  style={{
                    width: "260px",
                    height: "275px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <h4 className="user-name">Angel Raiyani</h4>
              <p className="text-muted fs-5">angelraiyanii@gmail.com</p>
              <button
                className="btn btn-primary mb-3"
                onClick={() =>
                  this.setState({
                    showProfileForm: true,
                    showPasswordForm: false,
                  })
                }
              >
                Update Profile
              </button>
              <br />
              <button
                className="btn btn-secondary"
                onClick={() =>
                  this.setState({
                    showPasswordForm: true,
                    showProfileForm: false,
                  })
                }
              >
                Change Password
              </button>
            </div>

            <div className="col-md-8">
              {/* Update Profile Form start */}
              {this.state.showProfileForm && (
                <div className="row">
                  <div className="col-md-12">
                    <fieldset className="border p-4 rounded mb-4">
                      <h3
                        className="w-auto text-start"
                        style={{ color: "#41566E" }}
                      >
                        Update Profile
                      </h3>
                      <form
                        onSubmit={this.handleSubmitProfile}
                        className="mt-3"
                      >
                        <div className="row">
                          {/* Image Upload Section */}
                          <div className="col-md-9 mb-3">
                            <label
                              htmlFor="profileImage"
                              className="form-label"
                            >
                              Profile Image
                            </label>
                            <input
                              type="file"
                              id="profileImage"
                              className="form-control"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                  this.setState({
                                    profileImage: file,
                                    profileImagePreview:
                                      URL.createObjectURL(file),
                                  });
                                }
                              }}
                            />
                          </div>

                          {/* Profile Image Preview */}
                          <div className="col-md-3 d-flex justify-content-center align-items-center">
                            {this.state.profileImagePreview && (
                              <img
                                src={this.state.profileImagePreview}
                                alt="Profile Preview"
                                className="img-thumbnail"
                                style={{
                                  width: "100px",
                                  height: "100px",
                                  objectFit: "cover",
                                  border: "2px solid #ccc",
                                }}
                              />
                            )}
                          </div>

                          {/* Full Name */}
                          <div className="col-md-6 mb-3">
                            <label htmlFor="fullName" className="form-label">
                              Full Name
                            </label>
                            <input
                              type="text"
                              id="fullName"
                              className="form-control"
                              placeholder="Enter your full name"
                              value={this.state.fullName}
                              onChange={(e) =>
                                this.setState({ fullName: e.target.value })
                              }
                            />
                          </div>

                          {/* Gender */}
                          <div className="col-md-6 mb-3">
                            <label htmlFor="gender" className="form-label">
                              Gender
                            </label>
                            <select
                              id="gender"
                              className="form-control"
                              value={this.state.gender}
                              onChange={(e) =>
                                this.setState({ gender: e.target.value })
                              }
                            >
                              <option value="">Select Gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                            </select>
                          </div>

                          {/* Email */}
                          <div className="col-md-6 mb-3">
                            <label htmlFor="email" className="form-label">
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              className="form-control"
                              placeholder="Enter your email address"
                              value={this.state.email}
                              onChange={(e) =>
                                this.setState({ email: e.target.value })
                              }
                            />
                          </div>

                          {/* Phone Number */}
                          <div className="col-md-6 mb-3">
                            <label htmlFor="phone" className="form-label">
                              Phone Number
                            </label>
                            <input
                              type="text"
                              id="phone"
                              className="form-control"
                              placeholder="Enter your phone number"
                              value={this.state.phone}
                              onChange={(e) =>
                                this.setState({ phone: e.target.value })
                              }
                            />
                          </div>

                          {/* Address */}
                          <div className="col-md-12 mb-3">
                            <label htmlFor="address" className="form-label">
                              Address
                            </label>
                            <textarea
                              id="address"
                              className="form-control"
                              placeholder="Enter your address"
                              value={this.state.address}
                              onChange={(e) =>
                                this.setState({ address: e.target.value })
                              }
                            ></textarea>
                          </div>

                          {/* City */}
                          <div className="col-md-4 mb-3">
                            <label htmlFor="city" className="form-label">
                              City
                            </label>
                            <input
                              type="text"
                              id="city"
                              className="form-control"
                              placeholder="Enter your city"
                              value={this.state.city}
                              onChange={(e) =>
                                this.setState({ city: e.target.value })
                              }
                            />
                          </div>

                          {/* State */}
                          <div className="col-md-4 mb-3">
                            <label htmlFor="state" className="form-label">
                              State
                            </label>
                            <input
                              type="text"
                              id="state"
                              className="form-control"
                              placeholder="Enter your state"
                              value={this.state.state}
                              onChange={(e) =>
                                this.setState({ state: e.target.value })
                              }
                            />
                          </div>

                          {/* Zip - Now aligned correctly */}
                          <div className="col-md-4 mb-3">
                            <label htmlFor="zip" className="form-label">
                              Zip
                            </label>
                            <input
                              type="text"
                              id="zip"
                              className="form-control"
                              placeholder="Enter your zip code"
                              value={this.state.zip}
                              onChange={(e) =>
                                this.setState({ zip: e.target.value })
                              }
                            />
                          </div>

                          {/* Submit Button */}
                          <div className="col-md-12 text-center">
                            <button type="submit" className="btn btn-success">
                              Update Profile
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger ms-2"
                              onClick={this.toggleExit}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </form>
                    </fieldset>
                  </div>
                </div>
              )}
              {/* Update Profile Form End */}

              {/* Change Password Form Start */}
              {this.state.showPasswordForm && (
                <div className="row">
                  <div className="col-md-12">
                    <fieldset className="border p-4 rounded mb-4">
                      <h3
                        className="w-auto text-start"
                        style={{ color: "#41566E" }}
                      >
                        Change Password
                      </h3>
                      <form onSubmit={this.handleSubmitPassword}>
                        <div className="col-md-6 mb-3">
                          {/* old Passwod */}
                          <label htmlFor="old-password" className="form-label">
                            Old Password
                          </label>
                          <input
                            type="text"
                            id="password"
                            className={`form-control ${
                              this.state.errors.password ? "is-invalid" : ""
                            }`}
                            placeholder="Enter your Old Password"
                            value={this.state.zip}
                            onChange={(e) =>
                              this.setState({ password: e.target.value })
                            }
                          />
                          {this.state.errors.password && (
                            <div className="invalid-feedback">
                              {this.state.errors.password}
                            </div>
                          )}
                        </div>
                        {/* new Passwod */}
                        <div className="col-md-6 mb-3">
                          <label htmlFor="new-password" className="form-label">
                            New Password
                          </label>
                          <input
                            type="password"
                            id="new-password"
                            className={`form-control ${
                              this.state.errors.confirmPassword
                                ? "is-invalid"
                                : ""
                            }`}
                            placeholder="Enter your New Password"
                            value={this.state.confirmPassword}
                            onChange={(e) =>
                              this.setState({ confirmPassword: e.target.value })
                            }
                          />
                          {this.state.errors.confirmPassword && (
                            <div className="invalid-feedback">
                              {this.state.errors.confirmPassword}
                            </div>
                          )}
                        </div>
                        <button type="submit" className="btn btn-success mt-3">
                          Update Password
                        </button>

                        <button
                          type="button"
                          className="btn btn-danger mt-3 ms-2"
                          onClick={this.toggleExit}
                        >
                          Cancel
                        </button>
                      </form>
                    </fieldset>
                  </div>
                </div>
              )}
              {/* Change Password Form End */}
              {/* Personal Information Start*/}
              <fieldset className="border p-4 rounded mb-4">
                <h3 className="w-auto text-start" style={{ color: "#41566E" }}>
                  Personal Information
                </h3>

                <div className="row text-start p-4 fs-4">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="full-name">Full Name</label>
                    <p id="full-name" className="form-control-static">
                      Angel Raiyani
                    </p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="gender">Gender</label>
                    <p id="gender" className="form-control-static">
                      Female
                    </p>
                  </div>
                </div>
                <div className="row text-start p-4 fs-4">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email">Email Address</label>
                    <p id="email" className="form-control-static">
                      angelraiyanii@gmail.com
                    </p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone">Phone Number</label>
                    <p id="phone" className="form-control-static">
                      44545 45455
                    </p>
                  </div>
                </div>

                <h3
                  className="w-auto text-start p-4"
                  style={{ color: "#41566E" }}
                >
                  Address Information
                </h3>
                <div className="row text-start p-4 fs-4">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="address">Address</label>
                    <p id="address" className="form-control-static">
                      KasturbaDham Tramba Bhavnagar Highway
                    </p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="city">City</label>
                    <p id="city" className="form-control-static">
                      Rajkot
                    </p>
                  </div>
                </div>
                <div className="row text-start p-4 fs-4">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="state">State</label>
                    <p id="state" className="form-control-static">
                      Gujarat
                    </p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="zip">Pin Code</label>
                    <p id="zip" className="form-control-static">
                      360020
                    </p>
                  </div>
                </div>
              </fieldset>
              {/* Personal Information End*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
