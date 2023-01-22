import { useState,useEffect } from "react";
import Facultyservice from './Facultyservice';
import {Link, useHistory} from 'react-router-dom';

const Facultylist=()=>{
    let[facob,setfacob]=useState([]);
    let[flag,setflag]=useState(false);
    let history=useHistory();

    useEffect(()=>{
        Facultyservice.getAllplayer().then((response)=>{
            setfacob(response.data);
        }).catch((err)=>{console.log("Error Occured",err)})
    },[]);

    useEffect(()=>{
        Facultyservice.getAllplayer().then((response)=>{
            history.push("/list");
            setfacob(response.data);
        }).catch((err)=>{console.log("Error Occured",err)})
    },[flag]);

    const deleteData=(id)=>{
        Facultyservice.deletePlayer(id).then((result)=>{
                console.log(result.data);
        }).catch((err)=>{console.log("Error Occurred in delete",err)});

        setflag(true);
    }
    const renderList=()=>{
        return facob.map((emp)=>{
            return <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.experience}</td>
            <td>
                <button type="submit" name="btn" id="btn" className="btn btn-danger" onClick={()=>{deleteData(emp.id)}}>Delete</button>
            </td>
            <td>
                <Link to={{pathname:`/edit/${emp.id}`,state:{faculty:emp}}}>
                    <button type="submit" name="btn1" className="btn btn-primary" id="btn1">Edit</button>
                </Link>
            </td>
            <td>
                <Link to={{pathname:`/view/${emp.id}`,state:{faculty:emp}}}>
                    <button type="submit" name="btn2" className="btn btn-primary" id="btn2">View</button>
                </Link>
            </td>
            </tr>
        });
    }
    return(
        <div>
           <table style={{"border":"2px solid black"}}>
           <thead>
            <tr>   
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Experience</th>
                
            </tr></thead>
                <tbody>
               
                {renderList()}
               
                </tbody>
            </table>
            <div>
            <Link to="/addstud">
                <button type="button" name="btn" id="btn" className="btn btn-success">Add</button>
            </Link>
            </div>
        </div>
    )
}

export default Facultylist;