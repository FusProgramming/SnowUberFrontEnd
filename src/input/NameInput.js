import React from 'react';
import TextField from '@material-ui/core/TextField';

function NameInput() {

        return <TextField id="standard-name"
                          label="First Name"
                          margin="normal"
                          variant= 'outlined'
                          fullWidth
                          required
        />



}

export default NameInput;