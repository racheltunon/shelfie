import React, { Component } from "react";
import axios from "axios";


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        image: "",
        name: "",
        price: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render(){
      return(
          <div>
              <h1>form</h1>
        <input>image</input>
        <input>name</input>
        <input>price</input>
          </div>
      )
  }
}

