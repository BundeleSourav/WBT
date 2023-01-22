import { useState,useEffect } from "react";
import { useLocation,useHistory } from "react-router-dom";
import Facultyservice from "./Facultyservice";

const Facultyedit=()=>{
    let[arr,setarr]=useState=({id:"",name:"",email:"",experience:""});
    let state=useLocation().state;
    let history=useHistory();


    useEffect(()=>{
        setarr({...state.faculty});
    },[]);

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setarr({...arr,[name]:value});
    }

    const editData=()=>{
        Facultyservice.editPlayer(arr).then((result)=>{
            console.log(result.data);
            history.push("/list");
        }).catch(()=>{});
    }

    return(
        <div>
            <form>
                <div class="form-group">
                        <label for="id">Enter ID</label>
                        <input type="number" name="id" id="id" class="form-control"
                        value={arr.id}
                        onChange={handleChange}
                        placeholder="Enter Id"></input>
                </div>
                <div class="form-group">
                        <label for="name">Enter ID</label>
                        <input type="text" name="name" id="name" class="form-control"
                        value={arr.name}
                        onChange={handleChange}
                        placeholder="Enter Name"></input>
                </div>
                <div class="form-group">
                        <label for="email">Enter ID</label>
                        <input type="text" name="email" id="email" class="form-control"
                        value={arr.email}
                        onChange={handleChange}
                        placeholder="Enter Email"></input>
                </div>
                <div class="form-group">
                        <label for="experience">Enter ID</label>
                        <input type="number" name="experience" id="experience" class="form-control"
                        value={arr.experience}
                        onChange={handleChange}
                        placeholder="Enter Experience"></input>
                </div>
                <div>
                    <button type="button" name="btn" id="btn" className="btn btn-success" onClick={editData}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Facultyedit;