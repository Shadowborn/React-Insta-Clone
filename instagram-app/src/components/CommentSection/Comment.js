import React from 'react';

const Comment = props => {
    console.log("Comment props ", props);
    return (
        <>
        <div>
        <strong>{props.comment.username + " - "}</strong>
        {props.comment.text}
        </div>
        </>
    );
};


export default Comment;