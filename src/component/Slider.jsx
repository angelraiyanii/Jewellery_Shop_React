
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import slider1 from "./images/slide1.png"
import slider2 from "./images/slide2.png";
import slider3 from "./images/slide3.png";

const Slider = () => {
  return (
    <div className="container-fluid bgcolor mt-5">
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slider1} className="d-block w-100" alt="First slide" style={{ height: "550px", objectFit: "cover" }}/>
        </div>
        <div className="carousel-item">
          <img src={slider2} className="d-block w-100" alt="Second slide" style={{ height: "550px", objectFit: "cover" }}/>
        </div>
        <div className="carousel-item">
          <img src={slider3} className="d-block w-100" alt="Third slide" style={{ height: "550px", objectFit: "cover" }}/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  );
};

export default Slider;