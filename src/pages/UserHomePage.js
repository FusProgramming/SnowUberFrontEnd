import React from 'react';
import withRouter from "react-router-dom/es/withRouter";

class UserHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style= {{   marginLeft: '11rem', marginTop: '4rem'}}>
                <h1 >
                    Userhomepage
                </h1>
            </div>
        );
    }
}
export default withRouter(UserHomePage);