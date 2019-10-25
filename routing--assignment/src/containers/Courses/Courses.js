import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import Course from '../Course/Course';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    courseClicked = (id) => {
        console.log(this.props)
        console.log('clicked', id);
        this.props.history.push( {
            pathname: '/courses/' + id,
            search: 'title='+this.state.courses[+id-1].title
        })
        // this.props.history.push('/courses/' + id +'/' + this.state.courses[+id-1].title);
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <article onClick={() => {this.courseClicked(course.id)}} className="Course" key={course.id}>{course.title}</article>;
                        } )
                    }
                </section>

                <Route path="/courses/:id" component={Course}></Route>

            </div>
        );
    }
}

export default Courses;