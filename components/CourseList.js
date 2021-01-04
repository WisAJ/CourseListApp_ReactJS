import React, { Component, Fragment } from 'react';



class CourseList extends Component {

    state = {
        updating: false
      }

renderCourse = ()=>{
    return <li>
    <span>{this.props.details.name}</span> 
    <button className="favorite styled" onClick={()=>{this.toggle()}}>Edit Course</button>
    <button className="favorite styled" onClick={()=>{this.props.deletme(this.props.index)}}>Delete Course</button>
    </li>
}

renderUpdate = () =>{
    return <form onSubmit={this.updateCourse}>
        <input type='text'  defaultValue={this.props.details.name} ref={(v) => {this.input = v}}/>
        <button className="favorite styled">Update Me</button>
            </form>
}

toggle =() =>{ let {updating} = this.state
   
    return this.setState({
        updating:!updating
    })
}

updateCourse = (e) => {
    e.preventDefault(); 
    this.props.editCourse(this.props.index, this.input.value);
    this.toggle();
}



    render() { 

        return ( 
            <Fragment>

              {this.state.updating ? this.renderUpdate(): this.renderCourse()} 
              
            </Fragment>
         );
    }
}
 
export default CourseList;


     