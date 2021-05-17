import React from 'react';
import { withRouter } from 'react-router-dom'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";



class NavigationHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleLoginOpen = this.handleLoginOpen.bind(this);
        this.handleRegisterOpen = this.handleRegisterOpen.bind(this);

    }

    /**
     * Called when the 'Login' button is pressed.
     * Navigates to the {@link /}.
     */
    handleLoginOpen = () => {
        const { history } = this.props;
        history.push('/LoginPage')
    };

    handleRegisterOpen = () => {
        const { history } = this.props;
        history.push('/RegistrationPage')
    };

    render() {
        return (
            <div style={{   marginRight: '2rem',
                            width: '100%'}}>
                <AppBar position= { "fixed" }
                        style= {{   background: '#868c91',
                                    width: '100%'}}>
                    <Toolbar>
                        <div style={{   display: 'flex',
                                        align: 'right'}}>
                            <div style={{marginRight: '1rem'}} >
                                <Button onClick={this.handleLoginOpen}
                                        variant="outlined" color="black">Login</Button>
                            </div>
                            <div style={{marginRight: '2rem'}}>
                                <Button onClick={this.handleRegisterOpen} variant="outlined" color="black" >Register</Button>
                            </div>
                        </div>

                    </Toolbar>
                </AppBar>
            </div>

        )

    }
}

export default withRouter(NavigationHome);