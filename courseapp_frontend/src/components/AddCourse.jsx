import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {toast} from 'react-toastify'
import {Container, Form, FormGroup, Input, Button} from 'reactstrap'
import base_url from './../api/bootapi'

const AddCourse = () => {
    const history = useHistory()
    useEffect( () => {
        document.title = "Add new course"
    }, [] )
    const [course, setCourse] = useState( {} )
    const handleForm = ( e ) => {
        postData( course )
        e.preventDefault()
    }
    async function postData( data ) {
        await axios.post( `${base_url}/courses`, data ).then(
            ( response ) => {
                console.log( response )
                setCourse( {title: '', description: ''} )
                toast.dark( "Course has been added!", {position: 'bottom-right'} )
                history.push( `/view-courses` )
            },
            ( error ) => {toast.error( error, {position: 'bottom-left'} )}
        )
    }
    return (
        <React.Fragment>
            <Container className="text-light">
                <h1 className="text-center my-3">Fill in course details</h1>
                <Form onSubmit={handleForm}>
                    <FormGroup>
                        <label for="title">Course Title</label>
                        <Input type="text" placeholder="Enter title here" name="title" id="title" value={course.title} onChange={
                            ( e ) => {setCourse( {...course, title: e.target.value} )}
                        } required />
                    </FormGroup>
                    <FormGroup>
                        <label for="desc">Course Description</label>
                        <Input type="textarea" placeholder="Enter description here" name="desc" id="desc"
                            style={{height: 150}} value={course.description}
                            onChange={( e ) => {setCourse( {...course, description: e.target.value} )}} required />
                    </FormGroup>
                    <Container className="mb-5 text-center">
                        <Button onClick={handleForm} className="btn btn-success" type="submit">Add Course</Button>
                        <Button color="warning ml-2" type="reset" onClick={() => {setCourse( {} )}}>Clear</Button>
                    </Container>
                </Form>
            </Container>
        </React.Fragment>
    )
}

export default AddCourse
