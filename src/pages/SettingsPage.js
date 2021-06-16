import React from 'react';
import { useState } from "react";
import withRouter from "react-router-dom/es/withRouter";
import {ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";

function SettingsPage() {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createMuiTheme({
        palette: {
            type: darkMode ? "dark" : "light",
        },
    });





    return (
        <ThemeProvider theme={theme}>
            <Paper>
        <div>
            <h1>
                Settings Page :)
            </h1>
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}>

            </Switch>
        </div>
            </Paper>
        </ThemeProvider>


    );

}
export default withRouter(SettingsPage);