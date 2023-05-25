import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { TablePagination, Checkbox, FormGroup, FormControlLabel } from '@mui/material';

import "../css/index.css"

export default function FirstForm() {

    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event) => {
        setPage(event.target.value);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
    };


    //a hook that allow to navigate to another page
    const navigate = useNavigate();

    // checkbox have 3 states
    const [checkboxValues, setCheckboxValues] = useState({
    mother: false,
    father: false,
    preferNotSay: false,
    });

    // the function be called and updated state of checkbox values everytime it is clicked
    const handleCheckboxChange = (event) => {

        // get name and state check of the present checked box position
        const checkboxName = event.target.name;
        const isChecked = event.target.checked;

        setCheckboxValues((prevCheckboxValue) => ({
            // spreading operator help to get all the states declared above for each checkbox
            ...prevCheckboxValue,
            // then change value of the box that is checked
            [checkboxName] : isChecked,
        }));
    };

    // example of spread operator: 
    // const people = {
    //     name: 'John',
    //     age: 30
    // };

    // const updatedPerson = {
    //     ...people,
    //     age: 31
    // }

    // console.log(updatedPerson);
    
    // Output: John 31

    useEffect(() => {
        if (checkboxValues.mother || checkboxValues.father || checkboxValues.preferNotSay) {
            setTimeout(() => {
                navigate('/SecondForm');
            }, 1000)
        }
    }, [checkboxValues, navigate])
    // listed out all of the things that change inside the hook

    //useEffect(() => {function}, [dependency array])

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
                <div className='fill_title'>
                    <h2>What is your role within the family?</h2>
                </div>
                <div className='fill_checkbox'>
                    <FormGroup>
                        <FormControlLabel className='checkbox checkbox-mother'
                        control={<Checkbox checked={checkboxValues.mother} onChange={handleCheckboxChange} name="mother" />}
                        label="Mother"
                        />
                        <FormControlLabel className='checkbox checkbox-father'
                        control={<Checkbox checked={checkboxValues.father} onChange={handleCheckboxChange} name="father" />}
                        label="Father"
                        />
                        <FormControlLabel className='checkbox checkbox-notsay'
                        control={<Checkbox checked={checkboxValues.preferNotSay} onChange={handleCheckboxChange} name="preferNotSay" />}
                        label="Prefer not say"
                        />
                    </FormGroup>
                </div>
            </div>
        </div>
    </div>
  );
}
