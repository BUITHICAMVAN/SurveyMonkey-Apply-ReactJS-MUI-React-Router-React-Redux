import React from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import "../css/index.css"

export default function ChangeMind() {
  return (
    <div className='container'>
      <div className='change_main'>
        <div className='change_row change_consent'>
          <h3>"I no longer want to participate in the survey"</h3>
          <p>Your progress will be lost. <br />
            You can learn more about the purpose of the survey by contacting our lead researchers if you have further questions.</p>
          <hr />

          Are you sure you no longer want to take the survey?
        </div>
        <div className='change_row button_change'>
          <div className='button button_change-contained' ><Button variant="contained"><Link className='link_change' to='/'>I have changed my mind</Link></Button></div>
          <div className="button button_change-outlined" ><Button variant="outlined"><Link className='link-back' to='/FirstForm'>Back to survey</Link></Button></div>
        </div>
      </div>
    </div>
  )
}
