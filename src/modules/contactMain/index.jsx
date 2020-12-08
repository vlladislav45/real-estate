import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from "@material-ui/icons/Room";

import './style.css';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width: '35ch',
    },
    input: {
      marginTop: theme.spacing(2),
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(1),
    },
}));

const ContactMain = () => {
    const classes = useStyles();

    return (
        <div>
            <div className='shell'>
                <div className='main-contact-container'>
                    <div className='about-us-section'>
                        <h2>Contact Info</h2>

                        <div className='hours-days'>
                            <div className='days'>Monday - Friday</div>

                            <div className='hours'>09 AM - 19 PM</div>
                        </div>

                        <div className='hours-days'>
                            <div className='days'>Saturday</div>

                            <div className='hours'>09 AM - 14 PM</div>
                        </div>

                        <div className='hours-days'>
                            <div className='days'>Sunday</div>

                            <div className='hours'>Closed</div>
                        </div>


                        <div id='phone' className='contacts'>
                            <PhoneIcon /> +45 677 8993000 223
                        </div>
                        <div className='contacts'>
                            <EmailIcon /> office@template.com
                        </div>
                        <div className='contacts'>
                            <RoomIcon /> Main Str. no 45-46, b3, 56832, Los Angeles, CA
                        </div>
                    </div>

                    <FormControl style={{width:500}} variant="outlined" className={classes.formControl}>
                        <TextField
                            className={classes.input}
                            label="Your name"
                            type="text"
                            variant="outlined" />

                        <TextField
                            className={classes.input}
                            label="Your phone"
                            type="text"
                            variant="outlined" />

                        <TextField
                            className={classes.input}
                            label="Your email"
                            type="email"
                            variant="outlined" />

                        <TextField
                            id="outlined-multiline-flexible"
                            className={classes.input}
                            label="Your Message"
                            multiline
                            rows={6}
                            variant="outlined" />

                        <Button
                            style={{width:250}}
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.button}
                            startIcon={<EmailIcon />}
                        >
                            Send message
                        </Button>
                    </FormControl>
                </div>
            </div>
        </div>
    );
}

export default ContactMain;