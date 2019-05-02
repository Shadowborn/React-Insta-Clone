import React from 'react';
import Post from './Post';
import styled from 'styled-components';

// div
const StyledPostContainer = styled.div`
  width: 100%;
  flex-wrap: wrap;
  align-content: center;
  margin: 0 auto;
  max-width: 600px;
`;


const PostsContainer = props => {
  return (
    <>
    <StyledPostContainer>
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </StyledPostContainer>
    </>
  );
};

export default PostsContainer;