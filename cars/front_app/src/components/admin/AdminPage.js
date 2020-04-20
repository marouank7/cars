import React, { Component } from 'react'
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
        axios.get('http://localhost:3005/api/getcar')
        .then((response) => {
            // handle success
            console.log("response",response.data)
            this.setState({ listCars : response.data})
            // this.setState({ movies : response.data.movies})
            console.log("iciiii",response.data)
            console.log('this.state', this.state.listCars[0])
            
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
        axios.delete(`http://localhost:3005/api/getcar/${id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
            this.getDataAddCar()
      })
    }

    // delete = (index) => {
    //     const NewListCars = this.state.listCars;
    //     NewListCars.splice(index, 1);
    //     this.setState({
    //         listCars : NewListCars
    //     })
    // }

    render() { 
        
        return ( 
            <section class="admin1">
                <h1 class="text-center py-5 text-light">Sanders cars</h1>
                <div class="container-fluid admin2">
                    <div class="row">
                        <h1><strong>Liste des items    </strong><Link to="addcarpage" class="btn btn-success btn-lg"><i class="fas fa-plus"></i> Ajouter</Link></h1>
                        <table class="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    {/* <th>{this.state.listCars[5].marque}</th> */}
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
                                            <td>{propsCar.marque}</td>
                                            <td>{propsCar.modele}</td>
                                            <td>{propsCar.prix}</td>
                                            <td style={{width:"350px"}}>
                                                <Link to="/viewpage" class="btn btn-light"><i class="far fa-eye"></i> Voir</Link>
                                                <Link to="/update" class="btn btn-primary ml-2"><i class="fas fa-pencil-alt"></i> Modifier</Link>
                                                <button to="/delete" class="btn btn-danger ml-2" onClick={() => this.removeCars(propsCar.id)} ><i class="far fa-eye"></i> Supprimer</button>
                                                
                                            </td>
                                        </tr>
                                    )}
                            
                                {/* <tr>
                                    <td>Id</td>
                                    <td>Description 1</td>
                                    <td>Prix 1</td>
                                    <td>Catégorie 1</td>
                                    <td style={{width:"350px"}}>
                                        <Link to="/viewpage" class="btn btn-light"><i class="far fa-eye"></i> Voir</Link>
                                        <Link to="/update" class="btn btn-primary ml-2"><i class="fas fa-pencil-alt"></i> Modifier</Link>
                                        <Link to="/delete" class="btn btn-danger ml-2"><i class="far fa-eye"></i> Supprimer</Link>
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                       
                </div>
                
            </section>
         );
    }
}
 
export default AdminPage;