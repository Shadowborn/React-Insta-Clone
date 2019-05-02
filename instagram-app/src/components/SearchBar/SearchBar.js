import React from 'react';
// import CameraLogo from '../../assets/igcameralogo.png';
import IGLogo from '../../assets/iglogo.png';
import './SearchBar.css';

const SearchBar = props => {
    return (
      <div className="header">
      <div className="divider">|</div>
        <div className="logoHeader">
          {/* <img alt="instagram camera" src={CameraLogo} /> */}
          
          <img alt="instagram logo" src={IGLogo} />
        </div>
        <div className="inputWrap">
          <div className="fas fa-search" />
          <input className="search"
            type="text"
            placeholder="Search"
            onKeyDown={props.searchPosts}
          />
        </div>
        <div className="iconWrap">
          <div>
            <i className="far fa-compass" />
          </div>
          <div>
            <i className="far fa-heart" />
          </div>
          <div>
            <i className="far fa-user-circle" />
          </div>
        </div>
      </div>
    );
  };

export default SearchBar;