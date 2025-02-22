import React, { Component } from "react";
import c1 from "../images/Earring.jpg";
export class AdPro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProductView: true,
      showProductForm: false,
      ProductUpdateForm: false,
      viewSiglepro: false,
      productName: "",
      categoryName: "",
      price: "",
      discount: "",
      goldWeight: "",
      diamondWeight: "",
      grossWeight: "",
      goldPrice: "",
      diamondPrice: "",
      makingCharges: "",
      overheadCharges: "",
      basePrice: "",
      tax: "",
      totalPrice: "",
      productType: "",
      productPurity: "",
      diamondColor: "",
      diamondPieces: "",
      stock: "",
      quantity: "",
      productImage: null,
      productImagePreview: null,
      errors: {},
    };
  }

  validateForm = () => {
    let errors = {};
    let isValid = true;

    Object.keys(this.state).forEach((key) => {
      if (
        key !== "errors" &&
        key !== "productImagePreview" &&
        this.state[key] === ""
      ) {
        errors[key] = "This field is required";
        isValid = false;
      }
    });

    // File validation
    if (!this.state.productImage) {
      errors.productImage = "Product image is required";
      isValid = false;
    } else {
      const file = this.state.productImage;
      const fileSize = file.size / 1024 / 1024; // in MB
      const validTypes = ["image/jpeg", "image/png", "image/jpg"];

      if (!validTypes.includes(file.type)) {
        errors.productImage = "Only JPG, JPEG, and PNG files are allowed";
        isValid = false;
      }

      if (fileSize > 5) {
        errors.productImage = "File size should be less than 5MB";
        isValid = false;
      }
    }

    this.setState({ errors });
    return isValid;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm()) {
      alert("Form submitted successfully");
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      errors: {
        ...this.state.errors,
        [event.target.name]: "",
      },
    });
  };

  handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);

      this.setState({
        productImage: file,
        productImagePreview: previewUrl,
        errors: {
          ...this.state.errors,
          productImage: "",
        },
      });
    }
  };

  validateForm = () => {
    let errors = {};
    let isValid = true;

    Object.keys(this.state).forEach((key) => {
      if (key !== "errors" && this.state[key] === "") {
        errors[key] = "This field is required";
        isValid = false;
      }
    });

    this.setState({ errors });
    return isValid;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm()) {
      alert("Form submitted successfully");
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  //make funtion to hide and show forms
  ShowProductForm = () => {
    this.setState({ showProductView: true });
    this.setState({ showProductForm: true });
    this.setState({ ProductUpdateForm: false });
    this.setState({ viewSiglepro: false });
  };
  UpdateProduct = () => {
    this.setState({ ProductUpdateForm: true });
    this.setState({ showProductView: true });
    this.setState({ showProductForm: false });
    this.setState({ viewSiglepro: false });
  };
  viewsigleProduct = () => {
    this.setState({ showProductView: true });
    this.setState({ viewSiglepro: true });
    this.setState({ ProductUpdateForm: false });
    this.setState({ showProductForm: false });
  };
  render() {
    return (
      <center>
        <div className="container mt-5 pt-2">
          <div className="row mt-5 mb-4 align-items-center">
            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start mb-2 mb-md-0">
              <h2 className="text-center text-md-left"> Product View</h2>
            </div>

            {/* Search form */}
            <div className="col-12 col-md-4 d-flex justify-content-center mb-2 mb-md-0">
              <form method="GET" action="" className="d-flex w-100">
                <div className="input-group w-100">
                  <input
                    type="text"
                    name="search"
                    className="form-control"
                    placeholder="Search here"
                    value={this.state.search || ""}
                    onChange={(e) => this.setState({ search: e.target.value })}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-dark w-10 p-3 ms-2"
                      type="submit"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Insert Category Button */}
            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end">
              <button
                id="toggleFormBtnI"
                className="btn btn-success w-30 fs-5"
                onClick={this.ShowProductForm} //this function name
              >
                Insert Product
              </button>
            </div>
          </div>
        </div>
        {/* Product View Start*/}
        {this.state.showProductView && (
          <div className="row mt-5">
            <div className="col-1 offset-1 col-md-10 ">
              <div className="table-responsive">
                <table className="table table-bordered text-center align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>Sr No</th>
                      <th>Product Image</th>
                      <th>Product Name</th>
                      <th>Total Price</th>
                      <th>Status</th>
                      <th>View</th>
                      <th>Update</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody className="fs-4">
                    <tr>
                      <td>1</td>
                      <td>
                        <img
                          src={c1}
                          alt=""
                          style={{ height: "70px", width: "70px" }}
                        />
                      </td>
                      <td>Earring</td>
                      <td>₹ 7655.59</td>
                      <td className="text-success  fw-bold">Active</td>
                      <td>
                        <button
                          class="btn btn-info fs-5 show-btn "
                          onClick={this.viewsigleProduct}
                        >
                          View{" "}
                        </button>
                      </td>
                      <td>
                        <button
                          class="btn btn-success fs-5 show-btn "
                          onClick={this.UpdateProduct}
                        >
                          Update{" "}
                        </button>
                      </td>
                      <td>
                        <button class="btn btn-danger fs-5 show-btn ">
                          Delete{" "}
                        </button>
                      </td>
                    </tr>
                    <tr className="detail-row">
                      {this.state.viewSiglepro && (
                        <td colSpan="9">
                          <div className="d-flex justify-content-center">
                            <div className="container">
                              <div className="row align-items shadow rounded">
                                {/* Image Column */}
                                <div className="col-md-4 text-center">
                                  <img
                                    src={c1}
                                    alt="Avatar"
                                    className="img-fluid rounded"
                                    style={{
                                      height: "200px",
                                      objectFit: "cover",
                                    }}
                                  />
                                </div>

                                {/* Details Section */}
                                <div className="col-md-8">
                                  <div className="mt-5">
                                    <div className="product-details text-start">
                                      <h6
                                        className="fw-bold"
                                        style={{
                                          fontSize: "14px",
                                          color: "#41566E",
                                        }}
                                      >
                                        Product Details
                                      </h6>
                                      <hr />
                                      <tr>
                                        <th>
                                          <h4>ProductName</h4>
                                          <p className="text-muted">
                                            Categoryname
                                          </p>
                                          <h4 style={{ color: "green" }}>
                                            Discount: 34% off
                                          </h4>
                                          <div className="d-flex align-items-center">
                                            <h5 className="me-2">
                                              Rs. 12567.00
                                            </h5>
                                          </div>
                                        </th>
                                        <th className="ms-4">
                                          <div className="mt-4">
                                            <h6
                                              className="fw-bold"
                                              style={{
                                                fontSize: "12px",
                                                color: "#41566E",
                                              }}
                                            >
                                              Product Specifications
                                            </h6>
                                            <ul
                                              style={{
                                                fontSize: "12px",
                                                paddingLeft: "20px",
                                              }}
                                            >
                                              <li>Product type: Rose Gold</li>
                                              <li>Product purity: 20K</li>
                                              <li>Diamond color: NA</li>
                                              <li>Diamond pieces: 120.78</li>
                                              <li>Stock: 02</li>
                                            </ul>
                                          </div>
                                        </th>
                                      </tr>
                                      {/* Weight Details */}
                                      <div className="mt-4">
                                        <h6
                                          className="fw-bold"
                                          style={{
                                            fontSize: "12px",
                                            color: "#41566E",
                                          }}
                                        >
                                          Weight Details
                                        </h6>
                                        <div className="table-responsive">
                                          <table className="table">
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

                                      {/* Price Details */}
                                      <div className="mt-4">
                                        <h6
                                          className="fw-bold"
                                          style={{
                                            fontSize: "12px",
                                            color: "#41566E",
                                          }}
                                        >
                                          Price Details
                                        </h6>
                                        <div className="table-responsive">
                                          <table className="table">
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
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        {/* Product View End */}
        {/* Product Add Form Start */}
        {this.state.showProductForm && (
          <div className="p-4 d-flex justify-content-center align-items-center">
            <section className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                  <div
                    className="card shadow-lg"
                    style={{ borderRadius: "15px" }}
                  >
                    <div className="card-body">
                      <h1 className="text-black text-center mb-4">
                        Add Product
                      </h1>
                      <form onSubmit={this.handleSubmit}>
                        {/* Basic Details */}
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Product Name</label>
                            <input
                              type="text"
                              name="productName"
                              className={`form-control ${
                                this.state.errors.productName
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.productName}
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Category Name</label>
                            <input
                              type="text"
                              name="categoryName"
                              className={`form-control ${
                                this.state.errors.categoryName
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.categoryName}
                            </div>
                          </div>
                        </div>

                        {/* Price and Discount */}
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Price (Rs.)</label>
                            <input
                              type="text"
                              name="price"
                              placeholder="00.00"
                              className={`form-control ${
                                this.state.errors.price ? "is-invalid" : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.price}
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Discount</label>
                            <input
                              type="text"
                              name="discount"
                              placeholder="00.0 % off"
                              className={`form-control ${
                                this.state.errors.discount ? "is-invalid" : ""
                              }`}
                              onChange={this.handleChange}
                            ></input>
                            <div className="invalid-feedback">
                              {this.state.errors.discount}
                            </div>
                          </div>
                        </div>
                        <hr />
                        {/* Weight Details */}
                        <h5>Weight Details</h5>
                        <div className="row">
                          <div className="col-md-4 mb-3">
                            <label className="form-label">
                              Gold Weight (Gram)
                            </label>
                            <input
                              type="text"
                              name="goldWeight"
                              placeholder="0.00"
                              className={`form-control ${
                                this.state.errors.goldWeight ? "is-invalid" : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.goldWeight}
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <label className="form-label">
                              Diamond Weight (Gram)
                            </label>
                            <input
                              type="text"
                              name="diamondWeight"
                              placeholder="0.00"
                              className={`form-control ${
                                this.state.errors.diamondWeight
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.diamondWeight}
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <label className="form-label">
                              Gross Weight (Gram)
                            </label>
                            <input
                              type="text"
                              name="grossWeight"
                              placeholder="0.00"
                              className={`form-control ${
                                this.state.errors.grossWeight
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.grossWeight}
                            </div>
                          </div>
                        </div>
                        <hr />
                        {/* Price Details */}
                        <h5>Price Details</h5>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">
                              Gold Price (Rs.)
                            </label>
                            <input
                              type="text"
                              name="goldPrice"
                              placeholder="0000.00"
                              className={`form-control ${
                                this.state.errors.goldPrice ? "is-invalid" : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.goldPrice}
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">
                              Diamond Price (Rs.)
                            </label>
                            <input
                              type="text"
                              name="diamondPrice"
                              placeholder="00.00"
                              className={`form-control ${
                                this.state.errors.diamondPrice
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.diamondPrice}
                            </div>
                          </div>
                        </div>

                        {/* Charges */}
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">
                              Making Charges (Rs.)
                            </label>
                            <input
                              type="text"
                              name="makingCharges"
                              placeholder="000.00"
                              className={`form-control ${
                                this.state.errors.makingCharges
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.makingCharges}
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">
                              Overhead Charges (Rs.)
                            </label>
                            <input
                              type="text"
                              name="overheadCharges"
                              placeholder="000"
                              className={`form-control ${
                                this.state.errors.overheadCharges
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.overheadCharges}
                            </div>
                          </div>
                        </div>

                        {/* Base Price and Tax */}
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">
                              Base Price (Rs.)
                            </label>
                            <input
                              type="text"
                              name="basePrice"
                              placeholder="0000.00"
                              className={`form-control ${
                                this.state.errors.basePrice ? "is-invalid" : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.basePrice}
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Tax (Rs.)</label>
                            <input
                              type="text"
                              name="tax"
                              placeholder="00.00"
                              className={`form-control ${
                                this.state.errors.tax ? "is-invalid" : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.tax}
                            </div>
                          </div>
                        </div>

                        {/* Total Price */}
                        <div className="row">
                          <div className="col-12 mb-3">
                            <label className="form-label">
                              Total Price (Rs.)
                            </label>
                            <input
                              type="text"
                              name="totalPrice"
                              placeholder="0000.00"
                              className={`form-control ${
                                this.state.errors.totalPrice ? "is-invalid" : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.totalPrice}
                            </div>
                          </div>
                        </div>
                        <hr />
                        {/* Product Details */}
                        <h5>Product Details</h5>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Product Type</label>
                            <input
                              type="text"
                              name="productType"
                              placeholder="Gold Type"
                              className={`form-control ${
                                this.state.errors.productType
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.productType}
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Product Purity</label>
                            <input
                              type="text"
                              name="productPurity"
                              placeholder="00K"
                              className={`form-control ${
                                this.state.errors.productPurity
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.productPurity}
                            </div>
                          </div>
                        </div>

                        {/* Diamond Details */}
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Diamond Color</label>
                            <input
                              type="text"
                              name="diamondColor"
                              placeholder="Color Of Diamond"
                              className={`form-control ${
                                this.state.errors.diamondColor
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.diamondColor}
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Diamond Pieces</label>
                            <input
                              type="text"
                              name="diamondPieces"
                              placeholder="00.00"
                              className={`form-control ${
                                this.state.errors.diamondPieces
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.diamondPieces}
                            </div>
                          </div>
                        </div>

                        {/* Stock and Quantity */}
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Stock</label>
                            <input
                              type="text"
                              name="stock"
                              placeholder="00"
                              className={`form-control ${
                                this.state.errors.stock ? "is-invalid" : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.stock}
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Quantity</label>
                            <input
                              type="number"
                              name="quantity"
                              placeholder="0"
                              className={`form-control ${
                                this.state.errors.quantity ? "is-invalid" : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.quantity}
                            </div>
                          </div>
                        </div>

                        <div className="row mb-4">
                          <div className="col-12">
                            <label className="form-label">Product Image</label>
                            <div className="d-flex gap-3 align-items-start">
                              <div className="flex-grow-1">
                                <input
                                  type="file"
                                  name="productImage"
                                  accept="image/png, image/jpeg, image/jpg"
                                  className={`form-control ${
                                    this.state.errors.productImage
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  onChange={this.handleFileChange}
                                />
                                <div className="invalid-feedback">
                                  {this.state.errors.productImage}
                                </div>
                                <small className="text-muted">
                                  Allowed formats: JPG, JPEG, PNG. Maximum size:
                                  5MB
                                </small>
                              </div>
                              {this.state.productImagePreview && (
                                <div
                                  style={{ width: "100px", height: "100px" }}
                                >
                                  <img
                                    src={this.state.productImagePreview}
                                    alt="Product preview"
                                    className="img-thumbnail"
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "cover",
                                    }}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="text-center py-3">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Add Product
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
        {/* Product Add Form End */}

        {/* Product Update Form Start */}
        {this.state.ProductUpdateForm && (
          <div className="p-4 d-flex justify-content-center align-items-center">
            <section className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                  <div
                    className="card shadow-lg"
                    style={{ borderRadius: "15px" }}
                  >
                    <div className="card-body">
                      <h1 className="text-black text-center mb-4">
                        Update Product
                      </h1>
                      <form onSubmit={this.handleSubmit}>
                        {/* Basic Details */}
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Product Name</label>
                            <input
                              type="text"
                              name="productName"
                              className={`form-control ${
                                this.state.errors.productName
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.productName}
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Category Name</label>
                            <input
                              type="text"
                              name="categoryName"
                              className={`form-control ${
                                this.state.errors.categoryName
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.categoryName}
                            </div>
                          </div>
                        </div>

                        {/* Price and Discount */}
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Price (Rs.)</label>
                            <input
                              type="text"
                              name="price"
                              placeholder="00.00"
                              className={`form-control ${
                                this.state.errors.price ? "is-invalid" : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.price}
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Discount</label>
                            <input
                              type="text"
                              name="discount"
                              placeholder="00.0 % off"
                              className={`form-control ${
                                this.state.errors.discount ? "is-invalid" : ""
                              }`}
                              onChange={this.handleChange}
                            ></input>
                            <div className="invalid-feedback">
                              {this.state.errors.discount}
                            </div>
                          </div>
                        </div>
                        <hr />
                        {/* Weight Details */}
                        <h5>Weight Details</h5>
                        <div className="row">
                          <div className="col-md-4 mb-3">
                            <label className="form-label">
                              Gold Weight (Gram)
                            </label>
                            <input
                              type="text"
                              name="goldWeight"
                              placeholder="0.00"
                              className={`form-control ${
                                this.state.errors.goldWeight ? "is-invalid" : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.goldWeight}
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <label className="form-label">
                              Diamond Weight (Gram)
                            </label>
                            <input
                              type="text"
                              name="diamondWeight"
                              placeholder="0.00"
                              className={`form-control ${
                                this.state.errors.diamondWeight
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.diamondWeight}
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <label className="form-label">
                              Gross Weight (Gram)
                            </label>
                            <input
                              type="text"
                              name="grossWeight"
                              placeholder="0.00"
                              className={`form-control ${
                                this.state.errors.grossWeight
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.grossWeight}
                            </div>
                          </div>
                        </div>
                        <hr />
                        {/* Price Details */}
                        <h5>Price Details</h5>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">
                              Gold Price (Rs.)
                            </label>
                            <input
                              type="text"
                              name="goldPrice"
                              placeholder="0000.00"
                              className={`form-control ${
                                this.state.errors.goldPrice ? "is-invalid" : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.goldPrice}
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">
                              Diamond Price (Rs.)
                            </label>
                            <input
                              type="text"
                              name="diamondPrice"
                              placeholder="00.00"
                              className={`form-control ${
                                this.state.errors.diamondPrice
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.diamondPrice}
                            </div>
                          </div>
                        </div>

                        {/* Charges */}
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">
                              Making Charges (Rs.)
                            </label>
                            <input
                              type="text"
                              name="makingCharges"
                              placeholder="000.00"
                              className={`form-control ${
                                this.state.errors.makingCharges
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.makingCharges}
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">
                              Overhead Charges (Rs.)
                            </label>
                            <input
                              type="text"
                              name="overheadCharges"
                              placeholder="000"
                              className={`form-control ${
                                this.state.errors.overheadCharges
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.overheadCharges}
                            </div>
                          </div>
                        </div>

                        {/* Base Price and Tax */}
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">
                              Base Price (Rs.)
                            </label>
                            <input
                              type="text"
                              name="basePrice"
                              placeholder="0000.00"
                              className={`form-control ${
                                this.state.errors.basePrice ? "is-invalid" : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.basePrice}
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Tax (Rs.)</label>
                            <input
                              type="text"
                              name="tax"
                              placeholder="00.00"
                              className={`form-control ${
                                this.state.errors.tax ? "is-invalid" : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.tax}
                            </div>
                          </div>
                        </div>

                        {/* Total Price */}
                        <div className="row">
                          <div className="col-12 mb-3">
                            <label className="form-label">
                              Total Price (Rs.)
                            </label>
                            <input
                              type="text"
                              name="totalPrice"
                              placeholder="0000.00"
                              className={`form-control ${
                                this.state.errors.totalPrice ? "is-invalid" : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.totalPrice}
                            </div>
                          </div>
                        </div>
                        <hr />
                        {/* Product Details */}
                        <h5>Product Details</h5>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Product Type</label>
                            <input
                              type="text"
                              name="productType"
                              placeholder="Gold Type"
                              className={`form-control ${
                                this.state.errors.productType
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.productType}
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Product Purity</label>
                            <input
                              type="text"
                              name="productPurity"
                              placeholder="00K"
                              className={`form-control ${
                                this.state.errors.productPurity
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.productPurity}
                            </div>
                          </div>
                        </div>

                        {/* Diamond Details */}
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Diamond Color</label>
                            <input
                              type="text"
                              name="diamondColor"
                              placeholder="Color Of Diamond"
                              className={`form-control ${
                                this.state.errors.diamondColor
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.diamondColor}
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Diamond Pieces</label>
                            <input
                              type="text"
                              name="diamondPieces"
                              placeholder="00.00"
                              className={`form-control ${
                                this.state.errors.diamondPieces
                                  ? "is-invalid"
                                  : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.diamondPieces}
                            </div>
                          </div>
                        </div>

                        {/* Stock and Quantity */}
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Stock</label>
                            <input
                              type="text"
                              name="stock"
                              placeholder="00"
                              className={`form-control ${
                                this.state.errors.stock ? "is-invalid" : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.stock}
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Quantity</label>
                            <input
                              type="number"
                              name="quantity"
                              placeholder="0"
                              className={`form-control ${
                                this.state.errors.quantity ? "is-invalid" : ""
                              }`}
                              onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">
                              {this.state.errors.quantity}
                            </div>
                          </div>
                        </div>

                        <div className="row mb-4">
                          <div className="col-12">
                            <label className="form-label">Product Image</label>
                            <div className="d-flex gap-3 align-items-start">
                              <div className="flex-grow-1">
                                <input
                                  type="file"
                                  name="productImage"
                                  accept="image/png, image/jpeg, image/jpg"
                                  className={`form-control ${
                                    this.state.errors.productImage
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  onChange={this.handleFileChange}
                                />
                                <div className="invalid-feedback">
                                  {this.state.errors.productImage}
                                </div>
                                <small className="text-muted">
                                  Allowed formats: JPG, JPEG, PNG. Maximum size:
                                  5MB
                                </small>
                              </div>
                              {this.state.productImagePreview && (
                                <div
                                  style={{ width: "100px", height: "100px" }}
                                >
                                  <img
                                    src={this.state.productImagePreview}
                                    alt="Product preview"
                                    className="img-thumbnail"
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "cover",
                                    }}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="text-center py-3">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Update Product
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
        {/* Product Update Form End */}
      </center>
    );
  }
}

export default AdPro;
