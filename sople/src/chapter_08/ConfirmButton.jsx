import React,{useState} from "react";

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const handleComfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };


    return (
        <>
            <button onClick={handleComfirm} disabled={isConfirmed}>
                {isConfirmed ? "확인됨": "확인하기"}
            </button>
        </>
    );
}
export default ConfirmButton;