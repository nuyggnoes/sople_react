import React from "react";

const students = [
    {
        id:'2019123123',
        name: 'Inje',
    },
    {
        id:'2019123124',
        name: "Steve",
    },
    {
        id:'2019123125',
        name: "Bill",
    },
    {
        id:'2019123126',
        name: "Jeff",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    );
}
export default AttendanceBook;