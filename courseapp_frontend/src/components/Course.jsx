import axios from 'axios'
import React from 'react'
import {Link} from 'react-router-dom/cjs/react-router-dom.min'
import {toast} from 'react-toastify'
import {Card, CardBody, CardTitle, CardText, Container, Button} from 'reactstrap'
import base_url from './../api/bootapi'

const Course = ( {course, update} ) => {
    async function deleteCourse( id ) {
        await axios.delete( `${base_url}/courses/${id}` ).then(
            ( res ) => {
                toast.warning( "Deleted!", {position: 'bottom-left'} )
                update( id )
            },
            ( error ) => {
                toast.error( "Error occured while deleting the course!", {position: 'bottom-left'} )
            }
        )
    }
    return (
        <Card className="text-center w-50 text-dark mx-auto mb-3">
            <CardBody>
                <CardTitle className="font-weight-bold">{course.title}</CardTitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={() => {deleteCourse( course.id )}}>Delete</Button>
                    <Link className="btn btn-warning ml-3" to={{
                        pathname: '/update-course',
                        aboutProps: {
                            id: course.id
                        }
                    }}>Update</Link>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course
