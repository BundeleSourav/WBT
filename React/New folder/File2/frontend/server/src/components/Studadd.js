import { useState } from "react";
import {useHistory} from 'react-router-dom';
import Studservice from "./Studservice";

const Studadd=()=>{

    let[starr,setstarr]=useState({rollno:"",name:"",course:"",DOA:"",marks:"",phoneno:""});
    let history=useHistory();

    const handleChange=(event)=>{
            const {name,value}=event.target;
            setstarr({...starr,[name]:value});
    }

    const addData=()=>{
        Studservice.addStudent(starr)
        .then((result)=>{
            console.log(result.data)
            history.push("/list");
        })
        .catch(()=>{})
    }

    return(
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="rollno">Enter RollNo</label>
                    <input type="number" className="form-control" name="rollno" id="rollno"
                    value={starr.rollno}
                    onChange={handleChange}
                    placeholder="Enter Rollno"></input>
                </div>
                <div className="form-group">
                    <label for="name">Enter Name</label>
                    <input type="text" className="form-control" name="name" id="name"
                    value={starr.name}
                    onChange={handleChange}
                    placeholder="Enter Name"></input>
                </div>
                <div className="form-group">
                    <label for="course">Enter Course</label>
                    <input type="text" className="form-control" name="course" id="course"
                    value={starr.course}
                    onChange={handleChange}
                    placeholder="Enter Course"></input>
                </div>
                <div className="form-group">
                <label for="DOA">Enter Date of Addmission</label>
                <input type="date" className="form-control" name="DOA" id="DOA"
                value={starr.DOA}
                onChange={handleChange}></input>
                </div>
                <div className="form-group">
                    <label for="marks">Enter Marks</label>
                    <input type="number" className="form-control" name="marks" id="marks"
                    value={starr.marks}
                    onChange={handleChange}
                    placeholder="Enter Marks"></input>
                </div>
                <div className="form-group">
                    <label for="phoneno">Enter Phone No.</label>
                    <input type="number" className="form-control" name="phoneno" id="phoneno"
                    value={starr.phoneno}
                    onChange={handleChange}></input>
                </div>
                <div>
                    <button type="button" className="btn btn-primary" name="btn" id="btn" onClick={addData}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Studadd;