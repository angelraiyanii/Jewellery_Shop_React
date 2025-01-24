import React,{Component} from "react";
export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {Demo : "Hello Angel"};
  }
  componentWillMount() {
    alert("Component Will Mount");
}
    componentDidMount() {
    alert("Component Did Mount");
    }
   changeState() {
    this.setState({Demo : "Hello Angel Raiyani"});
    }
    render() {
        return (
          <>
         <h1>{this.state.Demo}</h1>
         <h2><a onClick={this.changeState.bind(this)}>click to Change</a>
         </h2>
          </>
        );
      }
      shouldComponentUpdate(nextProps,nextSate)
      {
        alert("should be update");
        return true;
      }
      
    
}