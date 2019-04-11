import React, { Component } from 'react'

import './Projects.css'

export default class Projects extends Component {
  render() {
    return (
      <div className='Projects'>
        <div className="Projects_Title">
          My Recent Work
        </div>
        <div className="Projects_Container_Edudecks">
          <strong className="Projects_Container_Edudecks_Title">
            EduDecks
          </strong>
          <div className="Projects_Container_Edudecks_Body">
            A flash card solution where users can create a deck of multiple choice questions. Made with the PERN stack.
          </div>
        </div>
        <div className="Projects_Container_Frealxp">
          <strong className="Projects_Container_Frealxp_Title">
            FrealXP
          </strong>
          <div className="Projects_Container_Frealxp_Body">
            FrealXP helps people to get out and enjoy the outdoors. Users accept challenges and earn rewards! Made with the Pern stack.
          </div>
        </div>
      </div>
    )
  }
}
