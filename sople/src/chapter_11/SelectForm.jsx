import React, { useState } from "react";

function SelectForm(props) {
    const [value, setValue] = useState('orange');

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('선택한 과일은 : ' + value);
    }

    return (
        <form onSubmit={handleSubmit} style={{margin:60}}>
            <label>
                과일을 골라주세요.
                <select value={value} onChange={handleChange}>
                    <option value="apple">사과</option>
                    <option value="grape">포도</option>
                    <option value="orange">오렌지</option>
                    <option value="banana">바나나</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}
export default SelectForm;