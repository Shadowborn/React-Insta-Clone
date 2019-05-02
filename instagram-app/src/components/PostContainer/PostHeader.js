import React from 'react';
import './PostContainer.css';

const PostHeader = props => {
    return (
        <>
        <div className="post-header">
        <div className="post-profile-image">
            <img 
                alt="user profile"
                className="post-profile"
                src={props.thumbnailUrl}
            />
        </div>
        <div className="post-username">
            <strong>{props.username}</strong>
        </div>
        </div>
        </>
    )
    
}
export default PostHeader;