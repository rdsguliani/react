import React, { Component } from 'react';

class Course extends Component {

    render () {
        console.log(this.props)
        const title = this.props.location.search.split('?')[1].split('=')[1]
        console.log(title)
        return (
            <div>
                {title  ? <h2>{unescape(title)}</h2>: null}
                <p> You selected the Course with ID</p>
                {this.props.match.params.id  ? <h3>{this.props.match.params.id}</h3> : null} 
            </div>
        );
    }
}

export default Course;