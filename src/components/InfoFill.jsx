import React, { useEffect } from 'react';
import {TextField} from '@mui/material';

import "../css/index.css"

export default function InfoFill() {
     useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <div className='info_main'>
        <div className='info_content'>
            <div className='info_top'>
                <h3>Thank you for take the time to complete our survey. Your help is very much appreciated.</h3>
                <p>If you have any questions or concerns, please email the lead researchers.</p>
                <li><span>Research Group </span>(research@gameloft.com)</li>
                <hr/>
            </div>
            <div className='info_middle'>
                <h3>Interested in a summary of a survey?</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente qui ea vel harum rem earum, veniam ducimus pariatur corrupti similique voluptate repellendus consectetur iure nihil quod laborum nesciunt ratione suscipit.</p>
            </div>
            <div className='info_bottom'>
                <div className='info_bottom-input input_first'>
                    <p>{/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}Your Name</p>
                    <TextField
                    helperText="Please enter your name"
                    id="demo-helper-text-misaligned"
                    label="Name"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
