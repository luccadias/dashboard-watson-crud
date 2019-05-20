import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center"><img  width={115}src="https://www.cbronline.com/wp-content/uploads/2016/07/ibm.png"/></a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        {/* <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li> */}
      </ul>
    </div>
  </nav>
        
      </div>
    )
  }
}
