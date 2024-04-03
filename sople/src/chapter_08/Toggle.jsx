import React, { useState, useEffect } from "react";

function Toggle(props) {
    const [isToggleOn, setIsToggleOn] = useState(true);
    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }
    return (
        <>
            <button onClick={handleClick}>클릭</button>
            <h1>{isToggleOn ? '켜짐':'꺼짐'}</h1>
        </>
    );
}
export default Toggle;