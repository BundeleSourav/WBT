import { useState,useEffect } from "react";
import {Link,useHistory, useLocation} from 'react-router-dom';

const Studdetails=()=>{
    let [arrst,setarrst]=useState([]);
    let state=useLocation().state;

    useEffect(()=>{
        setarrst({...state.student});
    },[]);
    return(
        <div>
        <div className="card" style={{"width":"18rem"}}>
            <div className="card-body">
                <h5 className="card-title" >
                    Student Details
                </h5>
                <h6 className="card-subtitle mb-2 text-muted"></h6>
                <p className="card-text">
                    RollNo:{arrst.rollno}&nbsp;&nbsp;&nbsp;<br></br>
                    Name:{arrst.name}&nbsp;&nbsp;&nbsp;<br></br>
                    Course:{arrst.course}&nbsp;&nbsp;&nbsp;<br></br>
                    DOA:{arrst.DOA}&nbsp;&nbsp;&nbsp;<br></br>
                    Marks:{arrst.marks}&nbsp;&nbsp;&nbsp;<br></br>
                    Phone No:{arrst.phoneno}&nbsp;&nbsp;&nbsp;<br></br>
                </p>
                <Link to="/list">
                    <button type="button" name="btn" id="btn" className="btn btn-success">Back</button>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default Studdetails;