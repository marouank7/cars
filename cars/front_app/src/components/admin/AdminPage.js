import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './AdminPage.css'


class AdminPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            listCars : []
         }
    }

    componentDidMount(){
        this.getDataAddCar()
    }

    
    getDataAddCar = () => {
        axios.get('http://localhost:3005/api/cars')
        .then((response) => {
            // handle success
            this.setState({ listCars : response.data})
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })
        .finally(() => {
            // always executed
        });
    };

    removeCars = (id) =>{
        axios.delete(`http://localhost:3005/api/cars/${id}`)
        .then(res => {
            this.getDataAddCar()
      })
    }
    

    render() { 
        
        return ( 
            <section class="admin1">
                <h1 class="text-center py-5 text-light">Sanders cars</h1>
                <div class="container-fluid admin2">
                    <div class="row">
                        <h1><strong>Liste des items    </strong><Link to={{pathname : "/create-a-car", state : {id :false} }} class="btn btn-success btn-lg"><i class="fas fa-plus"></i> Ajouter</Link></h1>
                        <table class="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Marque</th>
                                    <th>Modèle</th>
                                    <th>Prix</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                    {this.state.listCars.map((propsCar, index) => 
                                        <tr key={index}>
                                            <td>{propsCar.id}</td>
                                            <td>{propsCar.brand}</td>
                                            <td>{propsCar.model}</td>
                                            <td>{propsCar.price}</td>
                                            <td style={{width:"350px"}}>

                                                <Link to={{ 
                                                    pathname : "/viewpage",
                                                    state : {...propsCar}
                                                    }}
                                                    class="btn btn-light"
                                                    ><i class="far fa-eye"></i> Voir
                                                </Link>
                                                <Link 
                                                    to={{
                                                    pathname :"/update-a-car",
                                                    state : {...propsCar}
                                                    }} 
                                                    class="btn btn-primary ml-2">
                                                    
                                                    <i class="fas fa-pencil-alt"></i> Modifier
                                                </Link>

                                                <button to="/delete" class="btn btn-danger ml-2" onClick={() => this.removeCars(propsCar.id)} ><i class="far fa-eye"></i> Supprimer</button>
                                            </td>
                                        </tr>
                                    )}
                            </tbody>
                        </table>
                    </div>   
                </div>
            </section>
         );
    }
}
 
export default withRouter(AdminPage);