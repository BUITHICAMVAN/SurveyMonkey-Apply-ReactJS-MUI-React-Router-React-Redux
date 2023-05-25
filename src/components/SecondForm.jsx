import React, {useEffect, useState} from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';
import { TablePagination } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function SecondForm() {
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
      <div className='second_form-main'>
        <div className='second_form-top'>
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
        <div className='second_form-bottom'>
          <div className='form_bottom-title'>
            <h2>What language is spoken in your household?</h2>
          </div>
          <div className='form_bottom-checkbox checkbox-autocomplete'>
             <Autocomplete
              multiple
              id="checkboxes-tags-demo"
              options={language}
              disableCloseOnSelect
              getOptionLabel={(option) => option.title}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.title}
                </li>
              )}
              style={{ width: 500 }}
              renderInput={(params) => (
                <TextField {...params} label="Checkboxes" placeholder="Favorites" />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const language = [
  { title: 'English', id: 1},
  { title: 'Chinese', id: 2},
  { title: 'Vietnamese', id: 3},
  { title: 'Korean', id: 4},
  { title: 'French', id: 5},
  { title: 'Mexican', id: 6},
  { title: 'Italian', id: 7},
  { title: 'Indonesia', id: 8},
];
