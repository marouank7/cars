import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ClientPage from './components/customer/customerPage/ClientPage'
import AdminPage from './components/admin/AdminPage'
import UpdatePage from './components/admin/UpdatePage'
import ViewPage from './components/admin/ViewPage'
import AddCarPage from './components/admin/AddCarPage'
import AddCar from './components/admin/AddCar'


function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={ClientPage}/>
        <Route exact path="/adminpage" component={AdminPage}/>
        <Route exact path="/update" component={UpdatePage}/>
        <Route exact path="/viewpage" component={ViewPage}/>
        <Route exact path="/addcarpage" component={AddCarPage}/>
        <Route exact path="/create-a-car" component={AddCar}/>
        <Route exact path="/update-a-car" component={AddCar}/>
        <Route exact path="/addcar" component={AddCar}/>
      </Router>
    </div>
  );
}

export default App;
