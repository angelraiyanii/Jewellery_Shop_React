import { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaUserPlus,
  FaUserCircle,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa"; // Import icons

// Helper function to use navigate inside a class component
function withRouter(Component) {
  return (props) => <Component {...props} navigate={useNavigate()} />;
}

class Naverbar extends Component {
  render() {
    const { navigate } = this.props; // Access navigate from props
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p">
          <a className="navbar-brand" href="#">React</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/Slider">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contain">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Product">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/SiglePro">Single Product</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  Account
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Login">
                      <FaUser className="me-2" />
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Register">
                      <FaUserPlus className="me-2" />
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Wishlist">
                      <FaHeart className="me-2" />
                      Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Cart">
                      <FaShoppingCart className="me-2" />
                      Your Cart
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <Link className="dropdown-item" to="/Account">
                      <FaUserCircle className="me-2" />
                      Account
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  Admin
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Admin/AdPro">
                      <FaUser className="me-2" />
                      Add Product
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Admin/AdCategory">
                      <FaUserPlus className="me-2" />
                      Add Category
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Fix Button Navigation */}
            <button className="btn btn-success" onClick={() => navigate("/Login")}>
              Login
            </button>
            <button className="btn btn-success ms-2" onClick={() => navigate("/Register")}>
              Register
            </button>
          </div>
        </nav>
      </>
    );
  }
}

// Wrap Naverbar with the HOC for navigation
export default withRouter(Naverbar);
