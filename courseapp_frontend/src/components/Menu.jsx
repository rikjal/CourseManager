import React from 'react'
import {Link} from 'react-router-dom'
import {ListGroup} from 'reactstrap'

const Menu = () => {
    return (
        <ListGroup className="bg-me2 p-3">
            <Link className="list-group list-group-item-action pb-1" to="/">Home</Link>
            <Link className="list-group list-group-item-action pb-1" to="/add-course" action>Add Course</Link>
            <Link className="list-group list-group-item-action pb-1" to="/view-courses" action>View Courses</Link>
            <Link className="list-group list-group-item-action pb-1" to="#" action>About</Link>
            <Link className="list-group list-group-item-action pb-1" to="#" action>Contact Us</Link>
        </ListGroup>
    )
}

export default Menu
