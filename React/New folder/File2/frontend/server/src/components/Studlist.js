import { useState,useEffect } from "react";
import Studservice from './Studservice';
import {Link,useHistory} from 'react-router-dom';

const Studlist=()=>{
    // {rollno:"",name:"",course:"",DOA:"",marks:"",phoneno:""}
    let[studarr,setstud]=useState([]);
    let[flag,setflag]=useState(false);
     let history=useHistory();
    useEffect(()=>{
        Studservice.getStudent().
        then((response)=>{
            setstud(response.data)
        })
        .catch((err)=>{console.log("Error Occured",err)});
    },[]);
    
    useEffect(()=>{
        Studservice.getStudent()
        .then((response)=>{
            console.log(response.data);
            history.push("/list")
            setstud(response.data)
        })
        .catch((err)=>{console.log("Error Occured",err)});
    },[flag]);

    const deleteData=(id)=>{
        Studservice.deleteStudent(id).then((result)=>
        {
            console.log(result.data);
            
        })
        .catch((err)=>{console.log("Error Occurred",err)});
        setflag(true);
    }

    // const sendData=()=>{
    //     props.UpdateStud(studarr);
    // }onClick={sendData}
    const renderList=(props)=>{
        return studarr.map((st1)=>{
            return <tr key={st1.rollno}><td>{st1.rollno}</td>
            <td>{st1.name}</td>
            <td>{st1.course}</td>
            <td>{st1.DOA}</td>
            <td>{st1.marks}</td>
            <td>{st1.phoneno}</td>
            <td>
                <button type="button" className="btn btn-danger" name="btn" id="delete" onClick={()=>deleteData(st1.rollno)}>Delete</button>
                <Link to={{pathname:`/edit/${st1.rollno}`,state:{student:st1}}}>
                        <button type="button" className="btn btn-primary" name="btn" id="edit"  >Edit</button>
                </Link>
                <Link to={{pathname:`/view/${st1.rollno}`,state:{student:st1}}}>
                    <button type="button" className="btn btn-success" name="btn" id="view">View</button>
                </Link>
            </td></tr>
        })
    }

    return(
        <div>
        <Link to="/addstud">
            <button type="btn" id="btn" name="btn" className="btn btn-primary" >Add Student</button>
        </Link>
            <table border="2px">
            <thead>
                <tr>
                    <th>
                        RollNo
                    </th>
                    <th>
                        Student Name
                    </th>
                    <th>
                        Course
                    </th>
                    <th>
                        DOA
                    </th>
                    <th>
                        Marks
                    </th>
                    <th>
                        Phone No.
                    </th>
                </tr>
            </thead>
            <tbody>
                {renderList()}
            </tbody>

            </table>
        </div>
    )
}

export default Studlist;