import React,{Component} from "react";

//function About(){//
    //return(
        //inline style

  //    <div style={{background:'green',color:'white'}}>
      //  <h1>This is my about page</h1>
    //  </div>
    //)

//export default About;
class about extends Component{
  render(){
    return(
      <div >
        
        <h1  style={{background:'orange'}}  >THis is about page with class component {this.props.name}</h1>
      </div>
    )
  }
}
export default about