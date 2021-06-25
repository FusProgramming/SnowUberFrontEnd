import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {withRouter} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import ShovelLogo from "../assets/shovellogo.png";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import MrPlowHomer from "../assets/MrPlowHomer.jpg";
import TextField from "@material-ui/core/TextField/TextField";


function RegistrationPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [emailAddressTwo, setEmailAddressTwo] = useState("");
    const [userPassword, setPassword] = useState("");
    const [userPasswordTwo, setPasswordTwo] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { firstName, lastName, emailAddress, emailAddressTwo, userPassword, userPasswordTwo};
            const response = await fetch("http://localhost:4100/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response);
        } catch (err) {
            console.log(firstName, lastName, emailAddress, emailAddressTwo, userPassword, userPasswordTwo);
            console.error(err.message);
        }
    };

    return (
        <div>

            <Grid container component="main" maxWidth="xs">
                <CssBaseline/>
                <Grid item xs={false} sm={4} md={6}>
                    <img style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        marginTop: '5rem',
                        marginLeft: '6rem',
                        height: '75vh'
                    }}
                         src={MrPlowHomer} alt="Photo"/>
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
                    <form noValidate onSubmit={onSubmitForm}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={6}>

                                <TextField id="standard-name"
                                           label="First Name"
                                           margin="normal"
                                           value={firstName}
                                           onChange={e => setFirstName(e.target.value)}
                                           variant= 'outlined'
                                           fullWidth
                                           required
                                />

                            </Grid>
                            <Grid item xs={12} sm={6}>

                                <TextField id="standard-name"
                                           label="Last Name"
                                           value={lastName}
                                           onChange={e => setLastName(e.target.value)}
                                           margin="normal"
                                           variant= 'outlined'
                                           fullWidth
                                           required
                                />

                            </Grid>
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
                                    label="Email address"
                                    margin="normal"
                                    variant= 'outlined'
                                    value={emailAddressTwo}
                                    onChange={e => setEmailAddressTwo(e.target.value)}
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

                                <TextField id="standard-name"
                                           label="Password"
                                           margin="normal"
                                           value={userPasswordTwo}
                                           onChange={e => setPasswordTwo(e.target.value)}
                                           variant= 'outlined'
                                           fullWidth
                                           required
                                />

                            </Grid>
                            <Grid item xs={12}>

                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />

                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Sign Up
                            </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link href="/LoginPage" variant="body2">
                                        Already have an account? Sign in
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

export default withRouter(RegistrationPage);