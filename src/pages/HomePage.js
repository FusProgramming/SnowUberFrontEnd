import React from 'react';
import withRouter from "react-router-dom/es/withRouter";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>
                    homepage
                </h1>
            </div>
        );
    }
}
export default withRouter(HomePage);