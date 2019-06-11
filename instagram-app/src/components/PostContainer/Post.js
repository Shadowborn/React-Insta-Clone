import React from "react";
import LikeSection from './LikeSection';
import PostHeader from "./PostHeader";
import CommentSection from "../CommentSection/CommentSection";
import styled from 'styled-components';

// div
const StyledEachPostContainer = styled.div`
    border: 1px solid #00000033;
    border-radius: 3px;
    text-align: left;
    margin-bottom: 10%;
    background: white;
    display: flex;
    flex-direction: column;
    min-width: 600px;
`;
const StyledMainPostImg = styled('img')`
    min-height: 600px;
    max-width: 600px;
    width:100%;
`;

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        };
        console.log("likes props from Post.js",this.props);
    }
    // incrementLike = () => {
    //     let likes = this.state.likes + 1;
    //     this.setState({ likes });
    // };

    incrementLike = () => {
        if(!this.state.liked){
            this.setState(prevState => ({
                likes: prevState.likes + 1, 
                liked: !prevState.liked
            }))} else if (this.state.liked) {
                this.setState(prevState => ({ 
                    likes: prevState.likes - 1,
                    liked: !prevState.liked
                 }))
            }
        }

    render() {
        console.log("Likes State from Post.js ", this.state);
        return (
            <>
            <StyledEachPostContainer>
            <div>
            <PostHeader 
                username={this.props.post.username}// defines username for Postheader.js to use
                thumbnailUrl={this.props.post.thumbnailUrl}//defines thumbnailurl for Postheader.js to use
            />
            </div>
            <StyledMainPostImg alt="post item" src={this.props.post.imageUrl}/>
            <div>
            <LikeSection
                incrementLike={this.incrementLike}
                likes={this.state.likes}
            />
            </div>
            <div>
            <CommentSection 
                postId={this.props.post.imageUrl}
                comments={this.props.post.comments}
            />
            </div>
            </StyledEachPostContainer>
            </>
        );
    }
}

export default Post;