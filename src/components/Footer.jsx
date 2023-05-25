import React from 'react'
import logo from '../assets/workable-website-favicon-color.png';
import "../css/index.css"

export default function Footer() {
  return (
    <div className='footer_main'>
        <div className='footer_row'>
            <div className='footer_col'><p>in collaboration with</p></div>
            <div className='footer_col'><img src={logo} alt="logo footer" /></div>
        </div>
    </div>
  )
}
