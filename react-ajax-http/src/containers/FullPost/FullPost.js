import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null,

    }

    componentDidMount() {
        // console.log('in full posts')
        // console.log(this.props)
        this.loadPost();
        // this.setState({
        //     id: id
        // });
        
    }

    componentDidUpdate() {
        this.loadPost();
    }

    loadPost() {
        const id = +this.props.match.params.id;
        if(!this.state.loadedPost || 
            (this.state.loadedPost && this.state.loadedPost.id !== id)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(response => {
                    console.log(response);
                    this.setState({
                        loadedPost: response.data
                    })
                })
            }
    }

    // componentDidUpdate() {
    //     const id = this.state.id;
    //     if(id) {
           
    //         if(!this.state.loadedPost || 
    //             (this.state.loadedPost && this.state.loadedPost.id !== id)) {
    //                 axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(response => {
    //                     console.log(response);
    //                     this.setState({
    //                         loadedPost: response.data
    //                     })
    //                 })
    //             }
    //     }
    // }

    deletePost = () => {
        if(this.state.loadedPost) {
            axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
                this.setState({loadedPost: null})
            })
        }
    }

    render () {
        let post = null;
        if( this.props.id) { 
            post = <p>Loadig .... </p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePost}>Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;