import React from 'react';
// import CameraLogo from '../../assets/igcameralogo.png';
import IGLogo from '../../assets/iglogo.png';

const SearchBar = props => {
  return (
    <>
    
    <input
          type="text"
          placeholder="Search"
          onKeyDown={props.searchPosts}
        />
    </>
  );
};

export default SearchBar;