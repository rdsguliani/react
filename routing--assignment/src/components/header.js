import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
class header extends Component {


    render() {
        return (
            <header>
            <nav>
                <ul className="ulLink">
                <li>
                    <NavLink to='/courses'>Courses</NavLink>
                </li>
                <li>
                    <NavLink to='/users'>Users</NavLink>
                </li>
                </ul>
            </nav>
        </header> 
        )
    }
}

export default header