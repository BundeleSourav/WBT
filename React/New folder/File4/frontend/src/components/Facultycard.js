import { useState,useEffect } from "react";
import {Link,useLocation} from "react-router-dom";
import {PenFill,PersonCircle,Trash} from 'react-bootstrap-icons';



const Facultycard=()=>{
    let[ftyarr,setftyarr]=useState([]);
    let state=useLocation().state;

    useEffect(()=>{
        setftyarr({...state.faculty});
    },[]);

    return(
        <div>
            <div><PersonCircle></PersonCircle>&nbsp;&nbsp;&nbsp;
            {ftyarr.id}&nbsp;{ftyarr.name}
            <PenFill></PenFill>&nbsp;&nbsp;&nbsp;
            <Trash></Trash></div>
            <div>
                <Link to="/list">
                    <button type="button" name="btn" id="btn" className="btn btn-success">Back</button>
                </Link>
            </div>
        </div>
    )
}

export default Facultycard;