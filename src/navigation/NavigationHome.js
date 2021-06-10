import React from 'react';
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

function NavigationHome() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(false);
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

                            <IconButton style={{color: '#03e3fc'}}>
                                <Badge>
                                <MailIcon style={{color: '#03e3fc'}}/>
                                </Badge>
                            </IconButton>
                            <IconButton style={{color: '#03e3fc'}}>
                                <Badge>
                                    <NotificationsIcon style={{color: '#03e3fc'}}/>
                                </Badge>
                            </IconButton>
                            <IconButton style={{color: '#03e3fc'}}>
                                <AccountCircle  style={{color: '#03e3fc'}}
                                                aria-controls="customized-menu"
                                                aria-haspopup="true"
                                                variant="contained"
                                                onClick={handleOpen}>
                                </AccountCircle>
                                <Menu style={{ marginTop: '3rem', color: '#121212'}}
                                      aria-controls="customized-menu"
                                      id="login-menu"
                                      anchorEl={anchorEl}
                                      keepMounted
                                      open={Boolean(anchorEl)}
                                      aria-haspopup="true"
                                      onClose={handleClose}>
                                    <MenuItem onClick={handleClose}>
                                        <AccountCircle style={{ marginRight: '1rem'}} />
                                        Profile
                                    </MenuItem>
                                    <Divider/>
                                    <MenuItem onClick={handleClose}>
                                        <SettingsIcon style={{ marginRight: '1rem'}} />
                                         Settings
                                    </MenuItem>
                                    <Divider/>
                                    <MenuItem onClick={handleClose}>
                                        <ExitToAppIcon style={{ marginRight: '1rem'}} />
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>

        );


}

export default withRouter(NavigationHome);