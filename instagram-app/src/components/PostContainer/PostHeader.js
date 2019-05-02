import React from 'react';
import styled from 'styled-components';

// div
const StyledHeader = styled.div`
    display: flex;
    padding: 11px;

`;
const StyledHeaderImageContainer = styled.div`
    width: 10%;
`;
const StyledProfileImg = styled('img')`
    width: 100%;
    border-radius: 50%;
`;
const StyledUsername = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
`;

const PostHeader = props => {
    return (
        <>
        <StyledHeader>
        <StyledHeaderImageContainer>
            <StyledProfileImg 
                alt="user profile"
                className="post-profile"
                src={props.thumbnailUrl}
            />
        </StyledHeaderImageContainer>
        <StyledUsername>
            <strong>{props.username}</strong>
        </StyledUsername>
        </StyledHeader>
        </>
    )
    
}
export default PostHeader;