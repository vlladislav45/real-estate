import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import './style.css';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width: '35ch',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1),
    },
}));

const SearchBar = React.forwardRef((props,ref) => {
    const classes = useStyles();

    return (
        <div ref={ref} className='container'>
            <div className='shell'>
                <FormControl style={{width:500}} variant="outlined" className={classes.formControl}>
                    <TextField
                        id="outlined-search"
                        label="Enter property, location, landmark..."
                        type="search"
                        variant="outlined" />
                </FormControl>

                <FormControl style={{width:250}} variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Select City</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        // value={age}
                        // onChange={handleChange}
                        label="Select City"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'Varna'}>Varna</MenuItem>
                        <MenuItem value={'Dobrich'}>Dobrich</MenuItem>
                        <MenuItem value={'Veliko Tarnovo'}>Veliko Tarnovo</MenuItem>
                        <MenuItem value={'Sofia'}>Sofia</MenuItem>
                        <MenuItem value={'Sv. Vlast'}>Sv. Vlast</MenuItem>
                        <MenuItem value={'Sunny Beach'}>Sunny Beach</MenuItem>
                        <MenuItem value={'Plovdiv'}>Plovdiv</MenuItem>
                    </Select>
                </FormControl>

                <Button
                    style={{width:250}}
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SearchIcon />}
                >
                    Search
                </Button>
            </div>
        </div>
    );
});

export default SearchBar;