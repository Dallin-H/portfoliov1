import React, { Component } from 'react'
import './Skills.css'

export default class Skills extends Component {
  render() {
    return (
      <div className='Skills'>
        <h4 className='Skills_Title'>My Tech</h4>
        <div className="Skills_List_Container">

        <ul className='Skills_List_Left'>
          <li>Javascript ES6</li>
          <li>React</li>
          <li>Node</li>
          <li>Redux</li>
          <li>HTML</li>
          </ul>
          <ul className="Skills_List_Right">
          <li>CSS</li>
          <li>Flexbox</li>
          <li>SQL</li>
          <li>Bcrypt</li>
          <li>Jest</li>
        </ul>
        </div>

      </div>
    )
  }
}
