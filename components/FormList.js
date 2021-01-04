import React from 'react';


const FormList = (props) => {


    return ( 
       <form onSubmit={props.mySubmitHandler}>

<div className="group">      
      <input    type="text" required 
                onChange={props.myChangeHandler}
                value={props.current}
                name='name'/>
      {/* <span className="highlight"></span> */}
      <span className="bar"></span>
      <label>Course Name</label>
        </div>
      
        {/* <div className="group">      
      <input    type="text" required
                onChange={props.myChangeHandler}
                // value={props.current}
                name='email'/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Email</label>
        </div> */}

        <div>
    <input className="favorite styled" type="submit" value='Add Course' />
        </div>
  
       </form>

    );
}
 
export default FormList;