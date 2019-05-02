import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostsContainer from './PostsContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            filteredPosts: [],
        };
    }
    componentDidMount() {
        this.setState({ posts:dummyData});
        console.log("PostsPage.js State on DidMount ", this.state);
    }
    searchPostsHandler = event => {
        // eslint-disable-next-line
        const posts = this.state.posts.filter(p => {
            if (p.username.includes(event.target.value)) {
                return p;
            }
        });
        this.setState({ filteredPosts: posts});
        console.log("PostsPage.js State on search Handler ", this.state);
    }
    render() {
        console.log("PostsPage.js State on render ", this.state);
        return (
            <>
             <SearchBar
                searchTerm={this.state.searchTerm}
                searchPosts={this.searchPostsHandler}
                />
            <PostsContainer
                posts={
                    this.state.filteredPosts.length > 0
                    ? this.state.filteredPosts
                    : this.state.posts
                }
            />
            </>
        )
    }
}

export default PostsPage;