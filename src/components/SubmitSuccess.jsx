import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

export default function SubmitSuccess() {
  return (
    <div className='submit_main'>
        <h4>Thank you!</h4>
        <p>We appreciate your time so far!</p>
        <div className="button button-submit" >
            <Button variant="contained">
                <Link className='link_submit' to='/'>Back to Workable
                </Link>
            </Button>
        </div>
    </div>
  )
}
