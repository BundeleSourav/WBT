import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Studadd from './components/Studadd';
import StudEdit from './components/StudEdit';
import Studdetails from './components/Studdetails';
import Header from './components/Header';
import Studlist from './components/Studlist';

function App() {
  // let[strarr,setstrarr]=useState({rollno:strarr.rollno,name:strarr.name,course:strarr.course,DOA:strarr.DOA,marks:strarr.marks,phoneno:strarr.phoneno});
  // const updateData=(ob)=>{
  //   setstrarr(...ob);
  // }
  return (
    <div>
      <Header></Header>
        <Router>
          <Switch>
            <Route path="/" exact component={Studlist}></Route>
            <Route path="/list" component={Studlist}></Route>
            <Route path="/addstud" component={Studadd}></Route>
            <Route path="/edit/:rollno" component={StudEdit}></Route>
            <Route path="/view/:rollno" component={Studdetails}></Route>
          </Switch>
        </Router> 
        {/* <div>
            <Studlist UpdateStud={updateData}></Studlist>
        </div> */}
    </div>
  );
}

export default App;
