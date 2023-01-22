import { useEffect, useState } from "react";
import { useLocation,Link } from "react-router-dom";

const Proddetails=(props)=>{
 let[prodob,setpob]=useState({prodid:" ",pname:" ",desc:" ",price:" "})
 let state=useLocation().state;
 useEffect(()=>{
    setpob({...state.prodob})
 },[])
 
 return(
    <div>
        <div className="card" style={{"width":"18rem"}}>
         <div className="card-body">
         <h5 className="card-title">Product details</h5>
         <h6 className="card-subtitle mb-2 text-muted">{prodob.prodid}</h6>
         <p className="card-text">
            ID:{prodob.prodid}
            Name:{prodob.pname}
            Description:{prodob.desc}
            Price:{prodob.price}
         </p>
         <Link to="/products">
            <button type="button" name="btn" id="btn" className="btn btn-success">Back</button>
         </Link>
        </div>
    </div>
    </div>
 )
}

export default Proddetails;