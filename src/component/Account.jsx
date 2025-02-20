import React, { Component } from "react";
import user1 from "./images/user1.png";

export class Account extends Component {
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
              <a href="#" className="btn btn-primary mb-3">
                Update Profile
              </a>
              <br />
              <a href="#" className="btn btn-secondary">
                Change Password
              </a>
            </div>

            {/* Profile Information */}
            <div className="col-md-8">
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
                <div className="row  text-start p-4 fs-4">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email">Email Address</label>
                    <p id="email" className="form-control-static">
                      angelraiynaii@gmail.com
                    </p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone">Phone Number</label>
                    <p id="phone" className="form-control-static">
                      44545 45455
                    </p>
                  </div>
                </div>

                <h3 className="w-auto text-start p-4" style={{ color: "#41566E" }}>
                  Address Information
                </h3>
                <div className="row  text-start p-4 fs-4">
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
                <div className="row  text-start p-4 fs-4">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
