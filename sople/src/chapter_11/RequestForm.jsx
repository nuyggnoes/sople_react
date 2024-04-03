import React, { useState } from "react";

function RequestForm(props) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("입력한 요청사항: " + value);
    }

    return (
        <div style={{ margin: 100 }}>
            <form onSubmit={handleSubmit}>
                <label>요청사항:
                    <textarea value={value} onChange={handleChange} placeholder="요청사항을 입력해주세요."/>
                </label>
                <button type="submit">제출</button>
            </form>
        </div>
    )
}
export default RequestForm;