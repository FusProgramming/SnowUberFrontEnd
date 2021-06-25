import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

function EmailInputTwo() {

    return <TextField id="standard-name"
                      label="Email address"
                      margin="normal"
                      variant= 'outlined'
                      fullWidth
                      required
    />

}

export default EmailInputTwo;