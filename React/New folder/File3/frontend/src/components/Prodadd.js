import { useState } from "react";
import { useHistory } from "react-router-dom";
import ProdServices from "./ProdServices";

const Prodadd=()=>{
    let[pob,setpob]=useState({prodid:"",pname:"",desc:"",price:""});
    let history=useHistory();
const handleChange=(event)=>{
    const{name,value}=event.target;
    setpob({...pob,[name]:value});
}

const addData=()=>{
    ProdServices.addprod(pob)
    .then((result)=>{
        history.push("/");
    }).catch(()=>{})
}
    return(
        <div>
            <form >
                <div className="form-group">
                <label htmlFor="prodid">Product ID</label>
                <input type="text" className="form-control" id="prodid" name="prodid"
                value={pob.prodid}
                onChange={handleChange}
                placeholder="Enter Product ID"/></div>

                <div className="form-group">
                <label htmlFor="pname">Product Name</label>
                <input type="text" className="form-control" id="pname" name="pname"
                value={pob.pname}
                onChange={handleChange}
                placeholder="Enter Product Name"/></div>
                
                <div className="form-group">
                <label htmlFor="desc">Product Description</label>
                <input type="text" className="form-control" id="desc" name="desc"
                value={pob.desc}
                onChange={handleChange}
                placeholder="Enter Product Description"/></div>
                
                <div className="form-group">
                <label htmlFor="price">Product Price</label>
                <input type="text" className="form-control" id="price" name="price"
                value={pob.price}
                onChange={handleChange}
                placeholder="Enter Product Salary"/></div>
                <button type="button" class="btn btn-primary" id="btn" onClick={addData}>Add Employee</button>
            </form>
        </div>
    )
}

export default Prodadd;