import React from 'react';
import './CommentSection.css';

const CommentInput = props => {
    return (
        <form onSubmit={props.submitComment}>
            <input className="commentInput"
                type="text"
                value={props.comment}
                placeholder="Add new comment..."
                onChange={props.changeComment}
            />
        </form>
    )
}

export default CommentInput;