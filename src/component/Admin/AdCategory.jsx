import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { Component } from "react";
import c1 from "../images/C1.jpg";
export class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowCategoryView: true,
      showCategoryForm: false,
      UpdateCategoryForm: false,
      categoryName: "",
      categoryGender: "",
      categoryImage: null,
      categoryImagePreview: null,
      categoryStatus: "",
      errors: {},
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      errors: { ...this.state.errors, [event.target.name]: "" },
    });
  };

  handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      this.setState({
        categoryImage: file,
        categoryImagePreview: previewUrl,
        errors: { ...this.state.errors, categoryImage: "" },
      });
    }
  };

  validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!this.state.categoryName.trim()) {
      errors.categoryName = "Category name is required";
      isValid = false;
    }

    if (!this.state.categoryGender) {
      errors.categoryGender = "Category gender is required";
      isValid = false;
    }

    if (!this.state.categoryImage) {
      errors.categoryImage = "Category image is required";
      isValid = false;
    }

    if (!this.state.categoryStatus) {
      errors.categoryStatus = "Category status is required";
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm()) {
      alert("Category added successfully");
    }
  };

  ShowCategoryForm = () => {
    this.setState({ ShowCategoryView: true });
    this.setState({ UpdateCategoryForm: false });
    this.setState({ showCategoryForm: true });
  };
  UpdateCategory = () => {
    this.setState({ UpdateCategoryForm: true });
    this.setState({ ShowCategoryView: true });
    this.setState({ showCategoryForm: false });
  };
  render() {
    return (
      <center>
        <div className="container mt-5 pt-2">
          <div className="row mt-5 mb-4 align-items-center">
            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start mb-2 mb-md-0">
              <h2 className="text-center text-md-left"> Category View</h2>
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

            {/* Add Category Button */}
            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end">
              <button
                id="toggleFormBtnI"
                className="btn btn-success w-30 fs-5"
                onClick={this.ShowCategoryForm}
              >
                Add Category
              </button>
            </div>
          </div>
        </div>
        {/* Category View */}
        {this.state.ShowCategoryView && (
          <div className="row mt-5">
            <div className="col-1 offset-1 col-md-10 ">
              <div className="table-responsive">
                <table className="table table-bordered text-center align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>Sr No</th>
                      <th>Category Image</th>
                      <th>Category Name</th>
                      <th>Gender</th>
                      <th>Status</th>
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
                      <td>Gold</td>
                      <td>Male</td>
                      <td className="text-success fw-bold">Active</td>

                      <td>
                        <button
                          className="btn btn-primary "
                          onClick={this.UpdateCategory}
                        >
                          <i className="bi bi-arrow-down"></i>
                          Update
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-danger ">
                          <i className="bi bi-trash"></i>
                          delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        {/* Add Category Form  */}
        {this.state.showCategoryForm && (
          <div className="p-4 d-flex justify-content-center align-items-center">
            <section className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                  <div
                    className="card shadow-lg"
                    style={{ borderRadius: "15px" }}
                  >
                    <div className="card-body text-start">
                      <h1 className="text-black text-center mb-4">
                        Add Category
                      </h1>
                      <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                          <label className="form-label p-2 fs-5">
                            Category Name
                          </label>
                          <input
                            type="text"
                            name="categoryName"
                            className={`form-control ${
                              this.state.errors.categoryName ? "is-invalid" : ""
                            }`}
                            onChange={this.handleChange}
                          />
                          <div className="invalid-feedback">
                            {this.state.errors.categoryName}
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label p-2 fs-5">Gender</label>
                          <div>
                            <label className="me-3">
                              <input
                                type="radio"
                                name="categoryGender"
                                value="Male"
                                onChange={this.handleChange}
                              />
                              Male
                            </label>
                            <label>
                              <input
                                type="radio"
                                name="categoryGender"
                                value="Female"
                                onChange={this.handleChange}
                              />
                              Female
                            </label>
                          </div>
                          <div className="text-danger">
                            {this.state.errors.categoryGender}
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label fs-5">
                            Category Image
                          </label>
                          <input
                            type="file"
                            accept="image/png, image/jpeg, image/jpg"
                            className={`form-control ${
                              this.state.errors.categoryImage
                                ? "is-invalid"
                                : ""
                            }`}
                            onChange={this.handleFileChange}
                          />
                          <div className="invalid-feedback">
                            {this.state.errors.categoryImage}
                          </div>
                          {this.state.categoryImagePreview && (
                            <div
                              className="mt-2"
                              style={{ width: "100px", height: "100px" }}
                            >
                              <img
                                src={this.state.categoryImagePreview}
                                alt="Category Preview"
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

                        <div className="mb-3">
                          <label className="form-label fs-5">
                            Category Status
                          </label>
                          <div>
                            <label className="me-3">
                              <input
                                type="radio"
                                name="categoryStatus"
                                value="Active"
                                onChange={this.handleChange}
                              />
                              Active
                            </label>
                            <label>
                              <input
                                type="radio"
                                name="categoryStatus"
                                value="Inactive"
                                onChange={this.handleChange}
                              />
                              Inactive
                            </label>
                          </div>
                          <div className="text-danger">
                            {this.state.errors.categoryStatus}
                          </div>
                        </div>

                        <div className="text-center py-3">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Add Category
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

        {/* Category Update From start*/}
        {this.state.UpdateCategoryForm && (
          <div className="p-4 d-flex justify-content-center align-items-center">
            <section className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                  <div
                    className="card shadow-lg"
                    style={{ borderRadius: "15px" }}
                  >
                    <div className="card-body text-start">
                      <h1 className="text-black text-center mb-4">
                        Update Category
                      </h1>
                      <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                          <label className="form-label p-2 fs-5">
                            Category Name
                          </label>
                          <input
                            type="text"
                            name="categoryName"
                            className={`form-control ${
                              this.state.errors.categoryName ? "is-invalid" : ""
                            }`}
                            onChange={this.handleChange}
                          />
                          <div className="invalid-feedback">
                            {this.state.errors.categoryName}
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label p-2 fs-5">Gender</label>
                          <div>
                            <label className="me-3">
                              <input
                                type="radio"
                                name="categoryGender"
                                value="Male"
                                onChange={this.handleChange}
                              />
                              Male
                            </label>
                            <label>
                              <input
                                type="radio"
                                name="categoryGender"
                                value="Female"
                                onChange={this.handleChange}
                              />
                              Female
                            </label>
                          </div>
                          <div className="text-danger">
                            {this.state.errors.categoryGender}
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label fs-5">
                            Category Image
                          </label>
                          <input
                            type="file"
                            accept="image/png, image/jpeg, image/jpg"
                            className={`form-control ${
                              this.state.errors.categoryImage
                                ? "is-invalid"
                                : ""
                            }`}
                            onChange={this.handleFileChange}
                          />
                          <div className="invalid-feedback">
                            {this.state.errors.categoryImage}
                          </div>
                          {this.state.categoryImagePreview && (
                            <div
                              className="mt-2"
                              style={{ width: "100px", height: "100px" }}
                            >
                              <img
                                src={this.state.categoryImagePreview}
                                alt="Category Preview"
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

                        <div className="mb-3">
                          <label className="form-label fs-5">
                            Category Status
                          </label>
                          <div>
                            <label className="me-3">
                              <input
                                type="radio"
                                name="categoryStatus"
                                value="Active"
                                onChange={this.handleChange}
                              />
                              Active
                            </label>
                            <label>
                              <input
                                type="radio"
                                name="categoryStatus"
                                value="Inactive"
                                onChange={this.handleChange}
                              />
                              Inactive
                            </label>
                          </div>
                          <div className="text-danger">
                            {this.state.errors.categoryStatus}
                          </div>
                        </div>

                        <div className="text-center py-3">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Update Category
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
        {/* Category Update From end*/}
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
      </center>
    );
  }
}

export default AddCategory;
