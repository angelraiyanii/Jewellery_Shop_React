// life cycle class components
import React,{ Component } from "react";
import LifeCycle from "./components/lifecycle";
import UseStateFun from "./components/functionCom";
export default class App extends Component {
  render() {
  return (
   <>
   <LifeCycle></LifeCycle>
  <UseStateFun></UseStateFun>
   </>
  );
}
}