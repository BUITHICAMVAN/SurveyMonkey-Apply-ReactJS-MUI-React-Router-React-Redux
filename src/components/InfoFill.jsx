import React, { useEffect } from 'react';

import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import "../css/index.css"

export default function InfoFill() {
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
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <TextField
                      id="input-with-icon-textfield"
                      label="Your name"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                </Box>
              </div>
              <div className='info_bottom-input input-second'>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <TextField
                      id="input-with-icon-textfield"
                      label="Email"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                </Box>
              </div>
              <div className='info_checkbox-bottom'>
                <FormGroup>
                  <FormControlLabel required control={<Checkbox />} label="I agree to receive a summary of the survey findings." />
                  <FormControlLabel required control={<Checkbox />} label="I agree to be contacted by Gameloft about future research." />
                </FormGroup>   
              </div>
              <div className='info_note'>
                <p><span>Please note: </span>your name and email address will not be linked with your survey answers.</p>
              </div>
              <div className='info_button'>
                <div className="button button-back" ><Button variant="outlined"><Link className='link_info link_text-blue' to='/ThirdForm'>Back to survey</Link></Button></div>
                <div className='button button-submit' ><Button variant="contained"><Link className='link_info' to='/SubmitSuccess'>Submit</Link></Button></div>
            </div>
            </div>
        </div>
    </div>
  )
}
