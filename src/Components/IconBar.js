import React, { Component } from 'react'
import './IconBar.css'

export default class IconBar extends Component {
  render() {
    return (
      <div className="IconBar">
          <a href="https://www.facebook.com/dallinhyde"><img src="https://img.icons8.com/ios-glyphs/30/000000/facebook.png" alt="facebook_icon" /></a>
          <a href="https://www.linkedin.com/in/dallinhyde/"><img src="https://img.icons8.com/material-rounded/30/000000/linkedin.png" alt="linkedIn_icon" /></a>
          <a href="https://github.com/Dallin-H"><img src="https://img.icons8.com/material-rounded/30/000000/github.png" alt="github_icon" /></a>
          <a href='mailto:dallinhyde@gmail.com'><img src="https://img.icons8.com/material-rounded/30/000000/filled-message.png" alt="email_icon" /></a>
      </div>
    )
  }
}
