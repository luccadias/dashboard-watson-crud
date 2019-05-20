import React, { Component } from 'react'

import Workspace from './Workspace';
import Assistant from './Assistant';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class Main extends Component {

 
  render() {
    return (
      <Router>
        <Route exact path="/" component={Workspace} />
        <Route path="/workspace" component={Assistant} />
      </Router>
    )
  }
}
