import React from 'react';
import styled from 'styled-components';

const StyledComments = styled.div`
    padding: 0px 0px 10px 10px; 
    box-sizing: border-box;
`;

const Comment = props => {
    console.log("Comment props ", props);
    return (
        <>
        <StyledComments>
        <strong>{props.comment.username + " - "}</strong>
        {props.comment.text}
        </StyledComments>
        </>
    );
};


export default Comment;