import React, { Component } from "react";
import CourseList from './components/CourseList';
import FormList from './components/FormList';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Container, Row , Col, Button, Alert, Breadcrumb, Form} from 'react-bootstrap';


class App extends Component { 

    state = {
        courses : [ {name:'HTML'},
                    {name:'CSS'},
                    {name:'JavaScript'}
                ],
                current:''
            }

myChangeHandler = (e) => {this.setState({current:e.target.value}) }
mySubmitHandler = (e) => {e.preventDefault(); 
                            let courses = this.state.courses;
                            let current = this.state.current;
                            courses.push({name: current})
                            this.setState({
                                current,
                                current:''
                               
                            })
                        }

deletme = (index) => {
    let courses = this.state.courses;
    console.log(index);
    courses.splice(index,1);
    this.setState({courses})

}

editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index]
    course['name'] = value
    this.setState({
        courses
    })


}

render () {
            const {courses} = this.state
            const courseList = courses.map((course, index) =>{
                return <CourseList details={course} 
                                    key={index}
                                    index={index}
                                    deletme={this.deletme}
                                    editCourse={this.editCourse}
                                   />;
             
            })
           

    return (
        
        <section className="container App">

        <h1>Courses List</h1>
        <FormList current={this.state.current} myChangeHandler={this.myChangeHandler} 
                   mySubmitHandler={this.mySubmitHandler} />
        {courseList.length ? <ul>{courseList}</ul> : <h1>Please enter some information</h1> }

        </section>
    )
    }}


    
export default App




