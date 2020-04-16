import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './AdminPage.css'

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section class="admin1">
                <h1 class="text-center py-5 text-light">Sanders cars</h1>
                <div class="container-fluid admin2">
                    <div class="row">
                        <h1><strong>Liste des items    </strong><Link to="addcar" class="btn btn-success btn-lg"><i class="fas fa-plus"></i> Ajouter</Link></h1>
                        <table class="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Description</th>
                                    <th>Prix</th>
                                    <th>Catégorie</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Item 1</td>
                                    <td>Description 1</td>
                                    <td>Prix 1</td>
                                    <td>Catégorie 1</td>
                                    <td style={{width:"350px"}}>
                                        <Link to="/viewpage" class="btn btn-light"><i class="far fa-eye"></i> Voir</Link>
                                        <Link to="/update" class="btn btn-primary ml-2"><i class="fas fa-pencil-alt"></i> Modifier</Link>
                                        <Link to="/delete" class="btn btn-danger ml-2"><i class="far fa-eye"></i> Supprimer</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Item 2</td>
                                    <td>Description 2</td>
                                    <td>Prix 2</td>
                                    <td>Catégorie 2</td>
                                    <td style={{width:"350px"}}>
                                        <Link to="/viewpage" class="btn btn-light"><i class="far fa-eye"></i> Voir</Link>
                                        <Link to="/update" class="btn btn-primary ml-2"><i class="fas fa-pencil-alt"></i> Modifier</Link>
                                        <Link to="/delete" class="btn btn-danger ml-2"><i class="far fa-eye"></i> Supprimer</Link>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                       
                </div>
                
            </section>
         );
    }
}
 
export default AdminPage;