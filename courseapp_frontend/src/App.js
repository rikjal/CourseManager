import {ToastContainer} from 'react-toastify'
import {Col, Container, Row} from 'reactstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AddCourse from './components/AddCourse'
import AllCourses from './components/AllCourses'
import Header from './components/Header'
import Home from './components/Home'
import Menu from './components/Menu'
import UpdateCourse from './components/UpdateCourse'

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8}>
              <Route exact path="/" component={Home} />
              <Route path="/add-course" component={AddCourse} />
              <Route path="/view-courses" component={AllCourses} />
              <Route
                path='/update-course'
                component={UpdateCourse} />
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App
