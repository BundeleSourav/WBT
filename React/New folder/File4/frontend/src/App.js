
import {BrowserRouter as Routes,Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Facultylist from './components/Facultylist';
import Facultyadd from './components/Facultyadd';
import Facultyedit from './components/Facultyedit';
import Facultycard from './components/Facultycard';

function App() {
  return (
    <div>
        <Router>
            <Routes path="/" exact component={Facultylist}></Routes>
            <Routes path="/list" component={Facultylist}></Routes>
            <Routes path="/addfaculty" component={Facultyadd}></Routes>
            <Routes path="/edit/:id" component={Facultyedit}></Routes>
            <Routes path="/view/:id" component={Facultycard}></Routes>
        </Router>
    </div>
  );
}

export default App;
