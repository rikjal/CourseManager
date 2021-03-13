import React, {useEffect, useState} from 'react'
import Course from './Course'
import base_url from './../api/bootapi'
import axios from 'axios'
import {toast} from 'react-toastify'

const AllCourses = () => {
    useEffect( () => {
        document.title = "All Courses"
    }, [] )
    const [courses, setCourses] = useState( [] )
    async function getAllCourses() {
        await axios.get( `${base_url}/courses` ).then(
            ( response ) => {
                toast.success( "Courses have been loaded!", {position: 'bottom-left'} )
                setCourses( response.data )
            },
            ( error ) => {
                toast.error( "Error while loading", {position: 'bottom-left'} )
            }
        )
    }
    const updateCourses = ( id ) => {
        setCourses( courses.filter( ( c ) => c.id !== id ) )
    }
    useEffect( () => {
        getAllCourses()
    }, [] )
    return (
        <div className="text-light text-center">
            <h2>All Courses</h2>
            <p>List of courses:</p>
            {
                courses.length > 0 ? courses.map( ( item ) => <Course key={item.id} course={item} update={updateCourses} /> ).reverse() : "No Course Found"
            }

        </div>
    )
}

export default AllCourses
