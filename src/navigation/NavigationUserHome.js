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
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { makeStyles } from "@material-ui/core/styles";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ShopIcon from '@material-ui/icons/Shop';

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    }
}));

function NavigationHome() {

    const classes = useStyles();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const drawBarList = [
        {
            text: "Profile",
            icon: <AccountCircle/>,
            onClick: () => handleProfile(),
        },
        {
            text: "Messages",
            icon: <MailIcon/>,
            onClick: () => handleUserMessagePage(),
        },
        {
            text: "Plow Home",
            icon: <LocalShippingIcon/>,
            onClick: () => handlePlowPage(),
        },
        {
            text: "Transactions",
            icon: <ShopIcon/>,
            onClick: () => handleTransactionsPage(),
        }
    ];

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(false);
    };

    const handleProfile = () => {
        history.push('/UserHomePage')
    };

    const handleUserMessagePage = () => {
      history.push('/UserMessagesPage')
    };

    const handleUserNotificationPage = () => {
      history.push('/UserNotificationPage')
    };

    const handleSettingsPage = () => {
        history.push('/SettingsPage')
    };

    const handleTransactionsPage = () => {
        history.push('/UserTransactionsPage')
    };

    const handlePlowPage = () => {
        history.push('/UserPlowPage')
    };

    const handleLogOut = () => {
        history.push('/HomePage')
    };

    const getProfile = async () => {
        try {
            const response = await fetch("http://localhost:5000/navigation", {
                method: "POST",
                headers: { }
            });
        } catch {
            console.error('1');
        }
    };

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <div style={{ display: 'flex',
            width: '100%'}}>
            <AppBar position= { "fixed" }  className={classes.appBar}
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
                    <div style={{ marginLeft: 'auto', display: 'flex'}}>
                        <div>
                            <h3> Welcome </h3>
                        </div>
                        <div style={{ marginTop: '.5rem'}}>
                        <IconButton style={{color: '#03e3fc'}}>
                            <Badge>
                                <MailIcon style={{color: '#03e3fc'}} onClick={handleUserMessagePage}/>
                            </Badge>
                        </IconButton>
                        <IconButton style={{color: '#03e3fc'}}>
                            <Badge>
                                <NotificationsIcon style={{color: '#03e3fc'}} onClick={handleUserNotificationPage} />
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
                                <MenuItem  onClick={handleSettingsPage}>
                                    <SettingsIcon style={{ marginRight: '1rem'}}
                                    />
                                    Settings
                                </MenuItem>
                                <Divider/>
                                <MenuItem onClick={handleLogOut}>
                                    <ExitToAppIcon style={{ marginRight: '1rem'}} />
                                    Logout
                                </MenuItem>
                            </Menu>
                        </IconButton>
                    </div>
                    </div>
                </Toolbar>

            </AppBar>
            <div>
                <Drawer variant="permanent" style= {{   background: '#1c8191'}} >
                    <div style= {{ paddingTop: '4rem' }}>
                        <List>
                            {drawBarList.map((item, index) => {
                                const { text, icon, onClick } = item;
                                return (
                                    <ListItem button key={text} onClick={onClick}>
                                        {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                        <ListItemText primary={text}/>
                                    </ListItem>
                                );
                            })};
                        </List>
                    </div>
                    <Divider />
                </Drawer>
            </div>
        </div>

    );


}

export default withRouter(NavigationHome);