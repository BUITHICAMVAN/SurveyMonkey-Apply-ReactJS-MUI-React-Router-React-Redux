import React, {useEffect, useState} from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';
import { TablePagination } from '@mui/material';
import { Button } from '@mui/material';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';

import '../css/index.css'

function MyFormHelperText() {
  const { focused, value} = useFormControl() || {};

    const remainingChars = React.useMemo(() => {
    const maxChars = 2000;
    const charsLeft = maxChars - (value ? value.length : 0);
    return charsLeft >= 0 ? charsLeft : 0;
  }, [value]);

  const helperText = React.useMemo(() => {
    if (focused) {
      return `${remainingChars} characters left`;
    }
  }, [focused, remainingChars]);
  
  return <FormHelperText>{helperText}</FormHelperText>;
}

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
            <FormControl sx={{ width: '80%'}}>
              <OutlinedInput placeholder="Please enter text" />
              <MyFormHelperText />
            </FormControl>
          </div>

          <div className='form_bottom-button'>
            <Button className = 'button button_captcha-contained' variant="contained"><Link className='link-white' to="/ThirdForm">Continue</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
