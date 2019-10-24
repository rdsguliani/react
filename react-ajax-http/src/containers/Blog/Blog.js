import React, { Component, Suspense } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
// import Post from '../../components/Post/Post';
// import FullPost from '../../components/FullPost/FullPost';
// import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Posts from '../Posts/Posts';
// import NewPost from '../NewPost/NewPost';

const NewPost = React.lazy( () => {
    return import('../NewPost/NewPost')
})

// import asyncComponent from './../../hoc/asyncComponent'
// import NewPost from '../NewPost/NewPost';
// import FullPost from '../FullPost/FullPost';
// const AsyncNewPost = asyncComponent ( () => {
//     return import("../NewPost/NewPost")
// })


class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    };
    
    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
        // const posts = this.state.posts.map( post => {
        //     return <Post key={post.id} title={post.title}  author={post.author}
        //                 clicked={ () => this.postSelectedHandler(post.id)} />
        // });

        return (
            <div>
                {/* <React.Fragment> */}
                    <header className="Blogs">
                        <nav>
                            <ul>
                                <li><NavLink to="/" exact>Posts</NavLink></li>
                                <li><NavLink exact to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }} href="/new-post">New Post</NavLink></li>
                            </ul>
                        </nav>
                    </header>

                <Switch>
                        {/* <Route path="/new-post" component={NewPost} Laz /> */}
                        <Route path="/new-post" render={() => (
                            <Suspense fallback={<div>loading...</div>}>
                                <NewPost />
                            </Suspense> )} >
                        </Route>
                        <Route path="/posts" component={Posts} />
                        <Redirect from="/" to="/posts" ></Redirect>     
                        {/* <Route path="/" component={Posts} /> */}
                </Switch>

               {/* </React.Fragment> */}
                {/* <Posts></Posts> */}
                
                {/* <section className="Posts">
                    { posts}
                </section> */}
                {/* <section>
                   <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;