import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {toast} from 'react-toastify'
import {Button, Container, Form, FormGroup, Input} from 'reactstrap'
import base_url from './../api/bootapi'


const UpdateCourse = ( props ) => {

    const [course, setCourse] = useState( {} )
    const cId = props.location.aboutProps.id
    async function fetchDetails() {
        await axios.get( `${base_url}/courses/${cId}` ).then(
            ( res ) => {
                setCourse( {id: cId, title: res.data.title, description: res.data.description} )
            },
            ( error ) => {
                toast.error( "Error occured!", {position: 'bottom-left'} )
            }
        )
    }
    async function updateCourse() {
        await axios.put( `${base_url}/courses`, course ).then(
            ( res ) => {toast.warning( "Updated successfully!", {position: 'bottom-left'} )},
            ( error ) => {
                toast.error( "Error ocurred while updating!", {position: 'bottom-left'} )
            }
        )
    }
    useEffect( () => {
        document.title = `Update Course`
        fetchDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )
    const handleForm = ( e ) => {
        e.preventDefault()
        updateCourse()
    }
    return (
        <React.Fragment>
            <Container className="text-light">
                <h1 className="text-center my-3">Update the course details</h1>
                <Form onSubmit={handleForm}>
                    <FormGroup>
                        <label for="title">Course Title</label>
                        <Input type="text" placeholder="Enter title here" name="title" id="title" value={course.title} onChange={
                            ( e ) => {setCourse( {...course, title: e.target.value} )}
                        } required />
                    </FormGroup>
                    <FormGroup>
                        <label for="description">Course Description</label>
                        <Input type="textarea" placeholder="Enter description here" name="description" id="description"
                            style={{height: 150}} value={course.description}
                            onChange={( e ) => {setCourse( {...course, description: e.target.value} )}} required />
                    </FormGroup>
                    <Container className="mb-5 text-center">
                        <Button color="success" type="submit">Update Course</Button>
                        <Button color="warning ml-2" type="reset" onClick={() => {setCourse( {title: "", description: ""} )}}>Clear</Button>
                    </Container>
                </Form>
            </Container>
        </React.Fragment>
    )
}

export default UpdateCourse
