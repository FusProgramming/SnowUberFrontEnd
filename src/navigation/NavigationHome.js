import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import Badge from "@material-ui/core/Badge";
import MailIcon from '@material-ui/icons/Mail';
import {AccountCircle } from "@material-ui/icons";
import NotificationsIcon from '@material-ui/icons/Notifications';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {withStyles} from "@material-ui/core";
import SnowLogo from "../assets/SnowLogo.png";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from "react-router-dom";

function NavigationHome() {
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(false);
    };


    const handleLogin = () => {
        history.push('/LoginPage')
    };

    const handleRegister = () => {
        history.push('/RegistrationPage')
    };



    return (
            <div style={{
                            width: '100%'}}>
                <AppBar position= { "fixed" }
                        style= {{   background: '#121212',
                                    width: '100%'}}>
                    <Toolbar>
                        <div style={{   display: 'flex',
                                        align: 'right'}}>

                            <div>
                                <img style={{width: '31%'}}
                                     src={SnowLogo} alt="Photo"/>
                            </div>
                        </div>
                        <div style={{ marginLeft: 'auto'}}>
                            <Button style={{color: 'white'}} onClick={handleLogin}>
                                Login
                            </Button>
                            <Button style={{color: 'white'}} onClick={handleRegister}>
                                Register
                            </Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>

        );


}

export default withRouter(NavigationHome);