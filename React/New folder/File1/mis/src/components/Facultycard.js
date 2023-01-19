import {PenFill,PersonCircle,Trash} from 'react-bootstrap-icons';

const Facultycard=function(props){

    const deleteFac=(id)=>{
        props.removeFac(id);
    }
    const editFac=(faculty2)=>{
        props.editFaculty(faculty2);
    }
    return (
        <div className="Body">
        <div className="container">
            <div className="row" style={{border:"2px dotted black",borderRadius:"6px"}}>
                <div className="col-md-1">
                    <PersonCircle></PersonCircle>
                </div>
                <div className="col-md-8">
                    <span>{props.faculty2.id}</span>&nbsp;&nbsp;
                    <span>{props.faculty2.firstname}</span>&nbsp;&nbsp;
                    <span>{props.faculty2.lastname}</span>&nbsp;&nbsp;
                    <span>{props.faculty2.course}</span>&nbsp;&nbsp;
                    <span>{props.faculty2.experience}</span>&nbsp;&nbsp;
                </div>
                <div className="col-md-1"  onClick={()=>{editFac(props.faculty2)}}>
                    <PenFill></PenFill>
                </div>
                <div className="col-md-2" onClick={()=>{deleteFac(props.faculty2.id)}}>
                    <Trash></Trash>
                </div>

            </div>
        </div>
        </div>
    )
}

export default Facultycard;