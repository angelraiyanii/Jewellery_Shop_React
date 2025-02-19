import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Component } from "react";
import Earring from "./images/Earring.jpg";
import { Link } from "react-router-dom";

export class SiglePro extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row align-items shadow p-3 rounded">
          {/* Image Column */}
          <div className="col-md-4 text-center">
            <img
              src={Earring}
              alt="Avatar"
              className="img-fluid rounded"
              style={{ height: "200px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8">
           
            <div className="mt-5">
              <div className="product-details text-start">
                <h3>ProductName</h3>
                <p className="text-muted">Categoryname</p>
                <div className="d-flex align-items-center">
                  <h5 className="text-decoration-line-through me-2 text-gray-400">
                    Rs. 6798
                  </h5>
                  <h5 className="text-danger me-2">Rs. 567</h5>
                  <span
                    className="border-start mx-2"
                    style={{
                      height: "1.5rem",
                      display: "inline-block",
                      borderColor: "#495057",
                    }}
                  />
                  <h6 style={{ color: "green" }}>34% off</h6>
                </div>
                <div className="mt-4">
                  <h6
                    className="fw-bold"
                    style={{ fontSize: "12px", color: "#41566E" }}
                  >
                    Weight Details
                  </h6>

                  <div className="table-responsive">
                    <table className="table ">
                      <thead>
                        <tr>
                          <th>Gold weight</th>
                          <th>Diamond weight</th>
                          <th>Gross weight</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>0.06 Gram</td>
                          <td>0.09 Gram</td>
                          <td>0.40 Gram</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="mt-4">
                  <h6
                    className="fw-bold"
                    style={{ fontSize: "12px", color: "#41566E" }}
                  >
                    Price Details
                  </h6>

                  <div className="table-responsive">
                    <table className="table ">
                      <thead>
                        <tr>
                          <th>Gold price</th>
                          <th>Diamond price</th>
                          <th>Making charges</th>
                          <th>Overhead charges</th>
                          <th>Base price</th>
                          <th>Tax</th>
                          <th>Total price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>₹ 1234.90</td>
                          <td>₹ 00.00</td>
                          <td>₹130.00</td>
                          <td>₹500</td>
                          <td>₹2345.09</td>
                          <td>₹78.04</td>
                          <td>₹23343.89</td>
                        </tr>
                      </tbody>
                    </table>
                    <ul style={{ fontSize: "12px" }}>
                      <li>Product type : Rose Gold</li>
                      <li>Product purity : 20K</li>
                      <li>Diamond color : NA</li>
                      <li>Diamond pieces : 120.78</li>
                      <li>Stock : 02</li>
                    </ul>
                  </div>
                </div>
                <div className="product-options mt-4">
                  <div className="form-group">
                    <label
                      htmlFor="quantity"
                      className="fw-bold"
                      style={{ fontSize: "12px", color: "#41566E" }}
                    >
                      Quantity:
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      
                      className="form-control w-25"
                    />
                  </div>

                  <input type="hidden" name="P_Code" value="ABC123" />
                  <input type="hidden" name="p_tot_price" value="299.99" />

                  <div className="form-group mt-3">
                    <button className="btn btn-outline-danger">
                      Add to Cart
                    </button>
                    <button className="btn btn-outline-primary ms-2">
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br> <br></br> <br></br>
      </div>
    );
  }
}

export default SiglePro;
