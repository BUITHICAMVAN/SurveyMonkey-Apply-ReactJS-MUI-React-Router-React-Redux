import React from 'react'
import "../css/index.css";

export default function Header() {
  return (
     <header className="container">
        <div className="header_main">
            <div className='header_row'>
                <div className="header_col header_col-left">
                    <div className='header_brand'>
                        <div className="header_logo"><img className="header_logo-img" src="../assets/workable-website-favicon-color.png" alt="logo" /></div>
                        <div className="header_name"><h1>FAMILIES USING TECHNOLOGY SURVEY</h1></div>
                    </div>
                </div>
                <div className="header_col header_col-right">
                    <div className="header_route">
                        <a href="">I HAVE CHANGED MY MIND</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
