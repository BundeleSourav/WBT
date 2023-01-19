import { useEffect,useState } from 'react';
import { useLocation,useHistory } from "react-router-dom";
import Studservice from "./Studservice";

const StudEdit=()=>{
    let[sarr,setsarr]=useState({rollno:"",name:"",course:"",DOA:"",marks:"",phoneno:""});
    let state=useLocation().state;
    let history=useHistory();
    

    useEffect(()=>{
        setsarr({...state.student});
    },[]);

    const updateData=()=>{
        Studservice.editStudent(sarr).then((result)=>{console.log(result.data);history.push("/list");}).catch(()=>{});
    };


    const handleChange=(event)=>{
        const{name,value}=event.target;
        setsarr({...sarr,[name]:value});
        
    }

    return(
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="rollno">Enter RollNo</label>
                    <input type="number" className="form-control" name="rollno" id="rollno"
                    value={sarr.rollno}
                    onChange={handleChange}
                    placeholder="Enter Rollno"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Enter Name</label>
                    <input type="text" className="form-control" name="name" id="name"
                    value={sarr.name}
                    onChange={handleChange}
                    placeholder="Enter Name"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="course">Enter Course</label>
                    <input type="text" className="form-control" name="course" id="course"
                    value={sarr.course}
                    onChange={handleChange}
                    placeholder="Enter Course"></input>
                </div>
                <div className="form-group">
                <label htmlFor="DOA">Enter Date of Addmission</label>
                <input type="date" className="form-control" name="DOA" id="DOA"
                value={sarr.DOA}
                onChange={handleChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="marks">Enter Marks</label>
                    <input type="number" className="form-control" name="marks" id="marks"
                    value={sarr.marks}
                    onChange={handleChange}
                    placeholder="Enter Marks"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="phoneno">Enter Phone No.</label>
                    <input type="number" className="form-control" name="phoneno" id="phoneno"
                    value={sarr.phoneno}
                    onChange={handleChange}></input>
                </div>
                
                    <button type="button" className="btn btn-primary" onClick={updateData}>Submit</button>
                
            </form>
        </div>
    )
}

export default StudEdit;