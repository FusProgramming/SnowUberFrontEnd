import React from 'react';
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
import EmailInput from "../input/EmailInput";
import NameInput from "../input/NameInput";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import PasswordInput from "../input/PasswordInput";
import LastNameInput from "../input/LastNameInput";
import MrPlowHomer from "../assets/MrPlowHomer.jpg";




class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            users: [],
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            handleClick: ' ',
            handleLoginOpen: false,
        };
        this.loadUsers = this.loadUsers.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailAddressChange = this.handleEmailAddressChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUserSubmit = this.handleUserSubmit.bind(this);

    }

    handleUserHome = () => {
        const { history } = this.props;
        history.push('/UserHomePage')
    };

    async componentDidMount() {
        // Load all of the users as soon as this component mounts
        await this.loadUsers()
    }

    //handles first name entered
    handleFirstNameChange(event) {
        console.log("Change: " + event.target.value);
        this.setState({firstName: event.target.value})
    }

    //handles last name entered
    handleLastNameChange(event) {
        console.log("Change: " + event.target.value);
        this.setState({lastName: event.target.value})
    }

    //handles email address entered
    handleEmailAddressChange(event) {
        console.log("Change: " + event.target.value);
        this.setState({emailAddress: event.target.value})
    }

    //handles password entered
    handlePasswordChange(event) {
        console.log("Change: " + event.target.value);
        this.setState({password: event.target.value})
    }


    /**
     * Reusable function that uses a GET request to load all users into a state.
     */
    async loadUsers() {

        try {

            const response = await Axios.get('/api/users');

            const {data} = response;

            this.setState({users: data});

        } catch (error) {

            console.error(error.message);
        }
    }

    /**
     * Called when the submit button is clicked.
     */
    async handleUserSubmit() {

        const {  firstName, lastName, emailAddress, password } = this.state;

        try {

            // This is the JSON payload that will be delivered to the server in 'request.body'
            const data = {
                firstName: firstName,
                lastName: lastName,
                emailAddress: emailAddress,
                password: password
            };
            console.log(data);

            // We are now doing a POST request because we are storing a new user plus switching to the login page for login
            await Axios.post('/api/users', data);
        }
        catch (error) {

            console.error(error.message);
        }

        // Reload the users straight from the server
        await this.loadUsers();
    }


    render() {
        const {firstName, lastName, emailAddress, password} = this.state;

        return (
            <div>

                <Grid container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Grid item xs={false} sm={4} md={6} >
                        <img style={{   backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        marginTop: '5rem',
                                        marginLeft: '6rem',
                                        height: '75vh'}}
                                        src={MrPlowHomer} alt="Photo"/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={5} elevation={1} square>
                    <div style={{   margin: 'auto',
                                    marginLeft: '14rem',
                                    marginTop: '5rem'}}>
                        <Avatar style={{    margin: 'auto',
                                            marginLeft: '1rem'}}>
                            <img style={{blockSize: '75%'}}
                                 src={ShovelLogo} alt="Photo"/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                    </div>
                    <form noValidate>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={6}>
                                <NameInput firstName={firstName}
                                           onChange={this.handleFirstNameChange}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <LastNameInput lastName={lastName}
                                               onChange={this.handleLastNameChange}/>
                            </Grid>
                            <Grid item xs={12}>
                                <EmailInput emailAddress={emailAddress}
                                            onChange={this.handleEmailAddressChange}/>
                            </Grid>
                            <Grid item xs={12}>
                                <PasswordInput password={password}
                                               onChange={this.handlePasswordChange}/>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={this.handleUserHome}
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
}

export default withRouter(RegistrationPage);