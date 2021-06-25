import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

function EmailInput() {

        return <TextField id="standard-name"
                          label="Email address"
                          margin="normal"
                          variant= 'outlined'
                          fullWidth
                          required
        />

}

export default EmailInput;