import React, { Component } from 'react'
import "./App.css";
import Pallete from "./Pallete";
import seedColors from "./seedColors";


export default class App extends Component {
  render() {
    return (
      <div>
        <Pallete {...seedColors}/>
      </div>
    )
  }
}

