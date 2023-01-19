
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './components/Header';
import ProdList from './components/ProdList';
import Prodadd from './components/Prodadd';
import './App.css';
import Proddetails from './components/Proddetails';
import { useState } from 'react';

function App() {

  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/" exact component={ProdList}></Route>
          <Route path="/products" component={ProdList}></Route>
          <Route path="/add" component={Prodadd}></Route>
          <Route path="/edit/:prodid" component={ProdList}></Route>
          <Route path="/view/:prod" component={Proddetails}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
