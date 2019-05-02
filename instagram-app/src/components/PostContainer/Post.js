import React from "react";
import LikeSection from './LikeSection';
import PostHeader from "./PostHeader";
import CommentSection from "../CommentSection/CommentSection";


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
            <div className="eachPostContainer">
            <div>
            <PostHeader 
                username={this.props.post.username}// defines username for Postheader.js to use
                thumbnailUrl={this.props.post.thumbnailUrl}//defines thumbnailurl for Postheader.js to use
            />
            </div>
            <img className="main-post-image" alt="post item" src={this.props.post.imageUrl}/>
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
            </div>
            </>
        );
    }
}

export default Post;