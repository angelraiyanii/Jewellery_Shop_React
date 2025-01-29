import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import  { Component } from 'react'
import about from './images/aboutus.png'
export class Contain extends Component {
  render() {
    return (
        
          <div className="container mt-5">
        <div className="row align-items shadow p-3 rounded">
          {/* Image Column */}
          <div className="col-md-4 text-center">
            <img
              src={about}
              alt="Avatar"
              className="img-fluid rounded"
              style={{ height: "200px", objectFit: "cover" }}
            />
        </div>
            <div className="col-md-8">
            <h5 className="color">
                <h2>About As</h2>
             <br></br>
             <b>Heres an example of customizing the Bootstrap grid at the mediumbreakpoint and above. Weve increased the .col padding with .px-md-5 and then counteracted that with .mx-md-n5 on the parent .row.Heres an example of customizing the Bootstrap grid at the mediumbreakpoint and above. Weve increased the .col padding with .px-md-5 and then counteracted that with .mx-md-n5 on the parent .row.Heres an example of customizing the Bootstrap grid at the mediumbreakpoint and above. Weve increased the .col padding with .px-md-5 and then counteracted that with .mx-md-n5 on the parent .row.</b>
            </h5>
        
    
        </div>
          
       
        </div>
        <br></br> <br></br> <br></br>
      </div>
    )
  }
}

export default Contain
