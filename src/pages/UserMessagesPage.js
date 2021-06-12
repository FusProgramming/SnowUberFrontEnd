import React from 'react';
import withRouter from "react-router-dom/es/withRouter";

function UserMessagesPage() {

    return (
        <div>
            <h1 style={{ marginTop: '4rem'}}>
                User Messages Page :)
                This will handle user messages to one another using websockets :0
            </h1>
        </div>
    );

}
export default withRouter(UserMessagesPage);