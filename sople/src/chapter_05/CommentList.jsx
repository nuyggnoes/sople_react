import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "임성균",
        comment: "안녕하세요. 소플 리액트 공부 중입니다."
    },
    {
        name: "사용자1",
        comment: "리액트 공부 재밌네요."
    },
    {
        name: "사용자2",
        comment: "컴포넌트를 사용해보고 있습니다."
    }
];


function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                )
            })}
        </div>
    )
}
export default CommentList;