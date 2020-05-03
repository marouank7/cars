import React from 'react';
// import ModelesPage from './components/ModelesPage'
// import NavBar from './components/NavBar'
// import HeroHeader from './components/HeroHeader'
// import Footer from './components/Footer'
// import Contact from './components/Contact'
// import AddModel from './components/admin/AddModel'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ClientPage from './components/customer/customerPage/ClientPage'
import AdminPage from './components/admin/AdminPage'
import Delete from './components/admin/Delete'
import UpdatePage from './components/admin/UpdatePage'
import ViewPage from './components/admin/ViewPage'
import AddCarPage from './components/admin/AddCarPage'
import AddCar from './components/admin/AddCar'
import ModelesPage from './components/customer/customerPage/ModelesPage'
import NotreEquipe from './components/customer/NotreEquipe'

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={ClientPage}/>
        <Route exact path="/adminpage" component={AdminPage}/>
        <Route exact path="/delete" component={Delete}/>
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
