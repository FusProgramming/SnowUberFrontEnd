import React from 'react';
import withRouter from "react-router-dom/es/withRouter";

class ForgotPasswordPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>
                    Forgot Password Page
                </h1>
            </div>
        );
    }
}
export default withRouter(ForgotPasswordPage);