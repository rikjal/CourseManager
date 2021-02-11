import React, {useEffect} from 'react'
import {Link} from 'react-router-dom/cjs/react-router-dom.min'
import {Container, Jumbotron} from 'reactstrap'
const Home = () => {
    useEffect( () => {
        document.title = "Home"
    }, [] )
    return (
        <div>
            <Jumbotron className="text-center">
                <h1>Course Manager Application</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores rem autem quod debitis adipisci, harum nihil in, aliquam iure quaerat, temporibus dolorum architecto eius? Eveniet inventore distinctio cumque possimus quod.
                </p>
                <Container>
                    <Link to="/add-course" className="btn btn-outline-primary">Start Using</Link>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Home
