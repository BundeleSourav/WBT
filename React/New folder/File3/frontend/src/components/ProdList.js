import {useEffect,useState} from "react";
import ProdServices from './ProdServices';
import {Link,useHistory} from 'react-router-dom';

const ProdList=()=>{
    let[prarr,setprarr]=useState([]);
    let[flag,setflag]=useState(false)
    let history=useHistory();

    useEffect(()=>{
        ProdServices.getProduct().
        then((response)=>{
            console.log(response.data);
            setprarr(response.data);
        })
        .catch((err)=>{console.log("Error Occured ",err)});
    },[]);

    useEffect(()=>{
        ProdServices.getProduct().
        then((response)=>{
            console.log(response.data)
            setprarr(response.data)
        })
        .catch((err)=>{console.log("Error Occured",err)});

    },[flag]);

    const deleteData=(id)=>{
        ProdServices.deleteProd(id)
        .then((result)=>{
            history.push("/");
            setflag(true);
        })
        .catch((err)=>{console.log("Error Occurred",err);})
    }

    const renderList=()=>{
        return prarr.map((pr)=>{
            return <tr key={pr.prodid}><td>{pr.prodid}</td><td>{pr.pname}</td><td>{pr.desc}</td><td>{pr.price}</td>
            <td>
                <button type="button" className="btn btn-danger" name='btn' id="delete" onClick={()=>deleteData(pr.prodid)}>Delete</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={{pathname:`/edit/${pr.prodid}`,state:{product:pr}}}>
                    <button type="button" className="btn btn-primary" name='btn' id="edit">Edit</button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={{pathname:`/view/${pr.prodid}`,state:{product:pr}}}>
                    <button type="button" name='btn' className="btn btn-successs" id="view">View</button>
                </Link>
            </td>
            </tr>
        });
    }
    return(
        <div>
            <Link to="/addprod">
                <button type="button" name="btn" id="btn" className="btn btn-primary">Add Employee</button>
            </Link>
            <table border="2">
             <thead>
             <tr><th>Product Id</th><th>Product Name</th><th>Description</th><th>Price</th></tr>
             </thead>
             <tbody>
                {renderList()}
             </tbody>   
            </table>
        </div>
    )
}

export default ProdList;