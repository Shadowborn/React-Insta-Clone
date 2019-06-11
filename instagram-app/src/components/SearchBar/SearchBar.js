import React from 'react';
import CameraLogo from '../../assets/igcameralogo.png';
import IGLogo from '../../assets/iglogo.png';
import styled from 'styled-components';

// div
const StyledDiv = styled.div`
    display:flex;
    width: 600px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    padding: 2% 0;
    border-bottom: 1px solid #0000005e;
    margin-bottom: 3%;
`;
const StyledLogos = styled.div`
   display:flex;
   align-items: center;
`;
const StyledLogo = styled.div`
    width: 80px;
`;
const StyledImg = styled('img')`
    width: 50%;
`;
const StyledInstagramImg = styled('img')`
    width: 20%;
    height: 10%;
`;
const StyledDivider = styled.div`
   
`;
const StyledSearch = styled.div`
    display:flex;
    align-items: center;
    width:100%;
`;
const StyledSearchBar = styled.input`
    width: 100%;
    padding: 1px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;
const StyledIcons = styled.div`
    display:flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
`;


const SearchBar = props => {
return (
<StyledDiv>

<StyledLogos>
    <StyledLogo>
        <StyledImg alt="instagram camera" src={CameraLogo} />
    </StyledLogo>
    <StyledDivider>
        |
    </StyledDivider>
    <StyledInstagramImg alt="instagram logo" src={IGLogo} />
</StyledLogos>

<StyledSearch>
    <div className="fas fa-search" />
    <StyledSearchBar
    type="text"
    placeholder="Search"
    onKeyDown={props.searchPosts}
    />
</StyledSearch>
<StyledIcons>
    <div>
    <i className="far fa-compass" />
    </div>
    <div>
    <i className="far fa-heart" />
    </div>
    <div>
    <i className="far fa-user-circle" />
    </div>
</StyledIcons>
</StyledDiv>
);
};

export default SearchBar;