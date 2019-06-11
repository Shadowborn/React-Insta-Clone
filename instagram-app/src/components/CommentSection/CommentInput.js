import React from 'react';
import styled from 'styled-components';

const StyledCommentInput = styled.input`
    width: 100%;
    padding: 12px 20px;
    display: inline-block;
    box-sizing: border-box;
`;

const CommentInput = props => {
    return (
        <form onSubmit={props.submitComment}>
            <StyledCommentInput
                type="text"
                value={props.comment}
                placeholder="Add new comment..."
                onChange={props.changeComment}
            />
        </form>
    )
}

export default CommentInput;