import React from 'react';
import styled from 'styled-components';

const StyledLikeSection = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 10%;
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
      <div className="like-section" key="likes-container">
        <div className="like-section-wrapper">{props.likes} </div>
      </div>
    ];
  };
  
  export default LikeSection;
  