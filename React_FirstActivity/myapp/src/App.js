import EmployeeForm from "./EmployeeForm/EmployeeForm";
import React from "react";
import {Route} from "react-router-dom"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: "Welcome To Food Order App" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({content: " You have to register first.."})
    }, 1000)
  }
 
  render() {
    return (
      <>
      <h1>{this.state.content}</h1>
        <div id="mydiv">
          <EmployeeForm /> 
        </div>   
      </> 
    )
  }
} 
export default App;

