import React, { useState } from "react";
import Button from "./Button";
import Greeting from "./Greeting";

function LoginControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {isLoggedIn
                ? <Button name={"로그아웃"} onClick={handleLogoutClick} />
                : <Button name={"로그인"} onClick={handleLoginClick} />}
        </div>
    )
}
export default LoginControl;