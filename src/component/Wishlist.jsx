import React, { Component } from "react";
import Earring from "./images/Earring.jpg";

export class Wishlist extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="row align-items shadow p-3 rounded">
            <section className="cart-section py-5 mb-5">
              <div className="container">
                <h2 className="mb-4 text-center">Your Wishlist</h2>
                <div class="table-responsive">
                  <i className="fab fa-angel"></i>
                  <table class="table table-bordered">
                    <thead className="table-dark">
                      <tr>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src={Earring}
                            alt="Avatar"
                            className="img-fluid rounded"
                            style={{ height: "100px", objectFit: "cover" }}
                          />
                        </td>
                        <td>Earring</td>
                        <td>Diamond Earring</td>
                        <td>₹ 1598.22</td>
                        <td>
                          <center>
                            {" "}
                            <input
                              type="number"
                              className="form-control quantity"
                              style={{ width: "50px" }}
                            />
                          </center>
                        </td>
                        <td>1598.22</td>
                        <td>
                          <button className="btn btn-outline-primary ms-2">
                            View Product
                          </button>{" "}
                          <button className="btn btn-outline-danger">
                            Remove
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colspan="5" class="text-right">
                          <strong>Total</strong>
                        </td>
                        <td id="grand-total">
                          <strong>₹1598.22</strong>
                        </td>
                        <input
                          type="hidden"
                          name="grand_total"
                          id="hidden-grand-total"
                          value=""
                        />
                        <td>
                          <button class="btn btn-danger" id="toggleFormBtnC">
                            Add To Cart
                          </button>{" "}
                          <button class="btn btn-success" id="toggleFormBtnC">
                            Order Now
                          </button>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </section>
            {/* Pagenation start */}
            <div className="row">
              <div className="col-md-5"></div>
              <nav className="col-md-2">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link btn-dark" href="#">
                      1<i className="fa fa-chevron-left"></i>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link btn-outline-dark" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link btn-dark" href="#">
                      3<i className="fa fa-chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="col-md-5"></div>
            </div>
            {/* Pagination End */}
          </div>
        </div>
      </div>
    );
  }
}

export default Wishlist;
