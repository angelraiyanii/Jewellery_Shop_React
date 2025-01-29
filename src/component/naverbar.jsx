import { Component } from "react";
import { Link } from "react-router-dom";

export class Naverbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p ">
          <a className="navbar-brand" href="#">

          </a>
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
                <Link className="nav-link active" to="/Slider">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contain">
                  About
                </Link>
              </li> <li className="nav-item">
                <Link className="nav-link" to="/Product">
                  Producr
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/Login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Registor">
                      Registor
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Account
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </>
    );
  }
}

export default Naverbar;
