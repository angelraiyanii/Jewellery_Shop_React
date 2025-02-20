import React, { Component } from "react";

export class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <div className="p-4 d-flex justify-content-center align-items-center">
        <section className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="card shadow-lg" style={{ borderRadius: "15px" }}>
                <div className="card-body text-start">
                  <h1 className="text-black text-center mb-4">Add Category</h1>
                  <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label p-2 fs-5">Category Name</label>
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
                      <label className="form-label p-2 fs-5">Category Gender</label>
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
                      <label className="form-label fs-5">Category Image</label>
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/jpg"
                        className={`form-control ${
                          this.state.errors.categoryImage ? "is-invalid" : ""
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
                      <label className="form-label fs-5">Category Status</label>
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
                      <button type="submit" className="btn btn-primary btn-lg">
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
    );
  }
}

export default AddCategory;
