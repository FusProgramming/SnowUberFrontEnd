import React from 'react';
import withRouter from "react-router-dom/es/withRouter";

function UserNotificationPage() {

    return (
        <div style= {{   marginLeft: '11rem', marginTop: '4rem'}}>
            <h1>
                User Messages Page :)
            </h1>
        </div>
    );

}
export default withRouter(UserNotificationPage);