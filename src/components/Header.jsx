import React from 'react';
import { Link, createBrowserRouter } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import logo from '../assets/workable-website-favicon-color.png';

import '../css/index.css'

export default function Header() {

  return (
    <header className="container">
      <div className="header_main">
        <div className='header_row'>
          <div className="header_col header_col-left">
            <div className='header_brand'>
              <Link className ='brand_link' to='/'>
              <div className="header_logo">
                <img className="header_logo-img" src={logo} alt="logo" />
              </div>
              <div className="header_name">
                <h1>FAMILIES USING TECHNOLOGY SURVEY</h1>
              </div></Link>
            </div>
          </div>
          <div className="header_col header_col-right">
            <div className="header_route">
              <Link className='link-white header_route-white' to="/ChangeMind" underline="none"><h4>I HAVE CHANGED MY MIND</h4><ChevronRightIcon/></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}