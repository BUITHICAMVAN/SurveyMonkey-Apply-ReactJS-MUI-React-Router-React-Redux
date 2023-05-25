import React, {useEffect, useState} from 'react'
import { TablePagination, Checkbox, FormGroup, FormControlLabel } from '@mui/material';

export default function FillForm() {
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
        <div className='fill_main'>
            <div className='fill-first'>
                <div className='fill_page-counted'>
                    <TablePagination
                component="div"
                count={3}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                />
                </div>
                <div className='fill_title'><h2>What is your role within the family?</h2></div>
                <div className='fill_checkbox'>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox/>} label="Mother" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Father" />
                        <FormControlLabel control={<Checkbox/>} label="Prefer not say" />
                    </FormGroup>
                </div>
            </div>
            <div className='fill-second'>
            </div>
            <div className='fill-third'></div>
        </div>
    </div>
  );
}
