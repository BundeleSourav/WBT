import { useState } from "react";
import { useHistory } from "react-router-dom";
import Facultyservice from "./Facultyservice";

const Facultyadd=()=>{
    let[facarr,setfacarr]=useState({id:"",name:"",email:"",experience:""});
    let history=useHistory();

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setfacarr({...facarr,[name]:value});
    }

    const addData=()=>{
        Facultyservice.addPlayer(facarr).then((result)=>{
            history.push("/list");
        }).catch(()=>{});
    }

    return(
        <div>
            <form>
                <div class="form-group">
                        <label for="id">Enter ID</label>
                        <input type="number" name="id" id="id" class="form-control"
                        value={facarr.id}
                        onChange={handleChange}
                        placeholder="Enter Id"></input>
                </div>
                <div class="form-group">
                        <label for="name">Enter ID</label>
                        <input type="text" name="name" id="name" class="form-control"
                        value={facarr.name}
                        onChange={handleChange}
                        placeholder="Enter Name"></input>
                </div>
                <div class="form-group">
                        <label for="email">Enter ID</label>
                        <input type="text" name="email" id="email" class="form-control"
                        value={facarr.email}
                        onChange={handleChange}
                        placeholder="Enter Email"></input>
                </div>
                <div class="form-group">
                        <label for="experience">Enter ID</label>
                        <input type="number" name="experience" id="experience" class="form-control"
                        value={facarr.experience}
                        onChange={handleChange}
                        placeholder="Enter Experience"></input>
                </div>
                <div>
                    <button type="button" name="btn" id="btn" className="btn btn-success" onClick={addData}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Facultyadd;