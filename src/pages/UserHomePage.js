import React, {useEffect, useState} from 'react';
import withRouter from "react-router-dom/es/withRouter";

function UserHomePage() {
    const [firstName, setName] = useState("");
    const getProfile = async () => {
        try {
            const res = await fetch("http://localhost:4100/UserHomePage", {
                method: "POST",
                headers: { jwtToken: localStorage.token }
            });

            const parseData = await res.json();
            console.log("FIrstName" + firstName);
            console.log(parseData);
            setName(parseData.firstName);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getProfile();
    }, []);



        return (
            <div style= {{   marginLeft: '11rem', marginTop: '4rem'}}>
                <h1 >
                     FirstName: {firstName}
                </h1>
            </div>
        );
}
export default withRouter(UserHomePage);