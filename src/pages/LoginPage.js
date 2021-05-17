import React from 'react';
import withRouter from "react-router-dom/es/withRouter";
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





class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: " ",
            password: " ",
            handleClick: ' ',
            isAuthenticated: false
        };

        this.handleEmailAddressChange = this.handleEmailAddressChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleRegisterOpen = this.handleRegisterOpen.bind(this);
        this.handleHomeOpen = this.handleHomeOpen.bind(this);
        this.handleAdminHome= this.handleAdminHome.bind(this);
        this.handleUserHome = this.handleUserHome.bind(this);
    }


    /**
     * Called when the 'Home' button is pressed.
     * Navigates to the {@link HomePage}.
     */
    handleHomeOpen = () => {
        const { history } = this.props;
        history.push('/HomePage')
    };

    /**
     * Called when the 'Register' button is pressed.
     * Navigates to the {@link RegisterPage}.
     */
    handleRegisterOpen = () => {
        const { history } = this.props;
        history.push('/RegisterPage')
    };
    handleAdminHome = () => {
        const { history } = this.props;
        history.push('/AdminHomePage')
    };

    handleUserHome = () => {
        const { history } = this.props;
        history.push('/UserHomePage')
    };
    //handles email address entered
    handleEmailAddressChange(event) {
        console.log("Change: " + event.target.value);
        this.setState({emailAddress: event.target.value})
    }

    //handles password address entered
    handlePasswordChange(event) {
        console.log("Change: " + event.target.value);
        this.setState({password: event.target.value})
    }
    render() {

        const {emailAddress} = this.state;
        const {password} = this.state;


        return (
            <div>
                <Grid container component="main">
                    <CssBaseline />
                    <Grid item xs={false} sm={4} md={6} >
                        <img style={{   backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '100vh'}}
                                        src={MrPlow} alt="Photo"/>
                    </Grid>
                    <Grid item xs={12} sm={7} md={5} elevation={1} square>
                    <div style={{   marginTop: '9rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',}}>
                        <Avatar>
                            <img style={{blockSize: '75%'}}
                                 src={ShovelLogo} alt="Photo"/>
                        </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    </div>
                    <div>
                       <form>
                           <Grid container>
                               <Grid item xs={12}>
                                       <EmailInput emailAddress={emailAddress}
                                                   onChange={this.handleEmailAddressChange}
                                       />
                               </Grid>
                               <Grid item xs={12}>
                                       <PasswordInput password={password}
                                                      onChange={this.handlePasswordChange}
                                       />
                               </Grid>
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
                               <Grid item xs={9}>
                                   <Button style={{     marginTop: '1rem',
                                                        marginLeft: '4rem' }}
                                           onClick={this.handleUserHome}
                                           label="Login" primary={true}
                                           fullWidth
                                           variant = 'contained'
                                           color = 'primary'>Login</Button>
                               </Grid>
                           </Grid>
                       </form>
                    </div>

                    </Grid>
                </Grid>
            </div>


        );
    }
}
export default withRouter(LoginPage);