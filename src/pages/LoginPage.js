import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import MrPlow from "../assets/Mr.Plow.png";
import ShovelLogo from "../assets/shovellogo.png";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import EmailInput from "../input/EmailInput";
import PasswordInput from "../input/PasswordInput";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField/TextField";
import MrPlowHomer from "../assets/MrPlowHomer.jpg";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";



function LoginPage(setAuth) {

    const [emailAddress, setEmailAddress] = useState("");
    const [userPassword, setPassword] = useState("");


        return (
            <div>

                <Grid container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Grid item xs={false} sm={4} md={6} >
                        <img style={{   backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100vh'}}
                             src={MrPlow} alt="Photo"/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={5} elevation={1} square>
                        <div style={{
                            margin: 'auto',
                            marginLeft: '23rem',
                            marginTop: '5rem'
                        }}>
                            <Avatar style={{
                                margin: 'auto',
                                marginLeft: '1rem'
                            }}>
                                <img style={{blockSize: '75%'}}
                                     src={ShovelLogo} alt="Photo"/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign up
                            </Typography>
                        </div>
                        <form noValidate>
                            <Grid container spacing={0}>
                                <Grid item xs={12}>

                                    <TextField id="standard-name"
                                               label="Email address"
                                               margin="normal"
                                               value={emailAddress}
                                               onChange={e => setEmailAddress(e.target.value)}
                                               variant= 'outlined'
                                               fullWidth
                                               required
                                    />

                                </Grid>
                                <Grid item xs={12}>

                                    <TextField id="standard-name"
                                               label="Password"
                                               margin="normal"
                                               value={userPassword}
                                               onChange={e => setPassword(e.target.value)}
                                               variant= 'outlined'
                                               fullWidth
                                               required
                                    />

                                </Grid>

                                <Grid item xs={12}>

                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                        label="Remember Password"
                                    />

                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                >
                                    Login
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </div>


        );
}
export default withRouter(LoginPage);