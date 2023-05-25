import React, {useEffect, useState} from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';
import { TablePagination } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Button } from '@mui/material';

import '../css/index.css'

export default function ThirdForm() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event) => {
    setPage(event.target.value);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
  };

  return (
    <div className='container'>
      <div className='third_form-main'>
        <div className='third_form-top'>
          <div className='top-item back_form'>
            <Link className='link-black back_button' to="/FirstForm" underline="none"><h4><ChevronLeftIcon/>Back</h4></Link>
          </div>
          <div className='top-item form-pagination'>
            <TablePagination
              component="div"
              count={3}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              />
          </div>
        </div>
        <div className='third_form-bottom'>
          <div className='form_bottom-title'>
            <h2>Please tell us which touchscreen game, app or story you use most often with your child and why?</h2>
          </div>
          <div className='form_bottom-text'>
            
            <div className='form_bottom-button'>
              <Button className = 'button button_captcha-contained' variant="contained"><Link className='link-white' to="/ThirdForm">Continue</Link></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
