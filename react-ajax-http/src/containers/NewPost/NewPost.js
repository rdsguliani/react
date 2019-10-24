import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';

import './NewPost.css';
import axios from 'axios';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: '1',
        submitted: false
    }

    addPost = () => {
        if(this.state.title !== '' && this.state.content !== '') {
            const data = { title: this.state.title, 
                         content: this.state.content, 
                         author: this.state.author }
            axios.post('https://jsonplaceholder.typicode.com/posts', (data)).then(response => {
                console.log(response);
                this.props.history.push('/posts');
                // this.setState({
                //     // title: '',
                //     // content: '',
                //     // author: '1',
                //     submitted: true
                // })
            })
        }
    }

    render () {
        // console.log('rendering new post', this.props)
        // let redirect = null
        // if(this.state.submitted) {
        //     redirect = <Redirect to="/posts" />
        // }
        return (
            <div className="NewPost">
                {/* {redirect} */}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="1">Max</option>
                    <option value="2">Manu</option>
                </select>
                <button onClick={this.addPost}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;