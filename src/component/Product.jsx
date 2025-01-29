import { Component } from "react";
import pro1 from "./images/pro1.png";
import pro2 from "./images/pro2.png";
import pro3 from "./images/pro3.png";
import pro4 from "./images/pro4.png";

export class Product extends Component {
  render() {
    return (
        <div> <center><h2>Products</h2></center>
      <div className="container-flex">
        
        {/* Card 1 */}
        <div className="card-custom">
          <img src={pro1} alt="Avatar" className="card-image" />
          <div className="card-content">
            <h4 className="card-title">John Doe</h4>
            <p className="card-subtitle">Architect & Engineer</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card-custom">
          <img src={pro2} alt="Avatar" className="card-image" />
          <div className="card-content">
            <h4 className="card-title">John Doe</h4>
            <p className="card-subtitle">Architect & Engineer</p>
          </div>
        </div>

          {/* Card 3 */}
          <div className="card-custom">
          <img src={pro3} alt="Avatar" className="card-image" />
          <div className="card-content">
            <h4 className="card-title">John Doe</h4>
            <p className="card-subtitle">Architect & Engineer</p>
          </div>
        </div>
          {/* Card 4 */}
          <div className="card-custom">
          <img src={pro4} alt="Avatar" className="card-image" />
          <div className="card-content">
            <h4 className="card-title">John Doe</h4>
            <p className="card-subtitle">Architect & Engineer</p>
          </div>
        </div>
        </div>
        <br></br><br></br>
        </div> 
    );
  }
}

export default Product;
