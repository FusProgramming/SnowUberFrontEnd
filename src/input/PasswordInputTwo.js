import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';


function PasswordInputTwo() {
    //Info for about the password textfield
    return <TextField id="standard-name"
                      label="Password"
                      margin="normal"
                      variant= 'outlined'
                      fullWidth
                      required
    />

}

export default PasswordInputTwo;