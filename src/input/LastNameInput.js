import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

function LastNameInput() {

        return <TextField id="standard-name"
                          label="Last Name"
                          margin="normal"
                          variant= 'outlined'
                          fullWidth
                          required
        />

}

export default LastNameInput;