import React from 'react';
import styled from 'styled-components';

const StyledLikeSection = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 10%;
`;
const StyledLikeCount = styled.div`
    display: flex;
    padding-left: 10px;
`;

const LikeSection = props => {
    console.log("Like section props", props)
    return [
      <StyledLikeSection
        key="likes-icons-container"
        onClick={props.incrementLike}
      >
        <div className="like-section-wrapper">
          <i className="far fa-heart" />
        </div>
        <div className="like-section-wrapper">
          <i className="far fa-comment" />
        </div>
      </StyledLikeSection>,
      <StyledLikeCount key="likes-container">
        <div className="like-section-wrapper">{props.likes} likes</div>
      </StyledLikeCount>
    ];
  };
  
  export default LikeSection;
  