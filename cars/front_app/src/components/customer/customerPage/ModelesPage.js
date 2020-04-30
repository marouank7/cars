import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './ModelesPage.css'
import axios from 'axios'
import Carousel from '../Carousel'
import CardCar from '../CardCar'
import Mercedes from '../../../img/Mercedes.jpeg'
import Porsche from '../../../img/Porsche.jpeg'

class ModelesPage extends Component {
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
            console.log('this.state.listCars9999999', this.state.listCars)
            
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })
        .finally(() => {
            // always executed
        });
    };

    render() { 
        // console.log("je suis dans modelsPage je teste ma props", this.props.location.state)
        return ( 
            <div class="container" class="py-5 text-center" id="containerModelePage" >
                <div class="row">
                    <div class="col">
                        <div class="info-header">
                            <h2 id="NosModeles">Nos modèles</h2>
                            <hr class="mb-5" style={{width:"40px", height:"2px" ,backgroundColor :"#340809"}}/>
                            <p class="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fuga quasi quaerat iusto consequuntur laboriosam!
                            </p>
                            {this.state.listCars.map((propsCars2, index) => 
                                 <section id="modeles" class="my-5 text-center">
                                 <div class="row">
                                     <div class="col-lg-12 col-md-12">
                                         <div class="card-body">
                                             <Carousel/>
                                             {/* <img src={photo} alt="voiture" class="img-fluid w-50 mb-3" ></img> */}
                                             {/* <img src="img/visage1.jpg" alt="visage" class="img-fluid rounded-circle w-50 mb-3"> */}
                                             <div class="py-3">
                                             <h3 class="text-muted"><strong>Marque: </strong> {propsCars2.marque}</h3>
                                             <h4 class="text-muted"><strong>Modèle: </strong> {propsCars2.modele}</h4>
                                             <h4 class="text-muted"><strong>Prix: </strong> {propsCars2.prix}</h4>
                                             </div>
                                             <div class="row d-flex justify-content-center">
                                                 <div class="col-lg-3">
                                                     <h5 class="text-muted"><strong>Carburant: </strong> {propsCars2.carburant}</h5>
                                                     <h5 class="text-muted"><strong>kilometrage: </strong> {propsCars2.kilometrage}</h5>
                                                     <h5 class="text-muted"><strong>NombreDePlaces </strong> {propsCars2.NombreDePlaces}</h5>
                                                     <h5 class="text-muted"><strong>CO2:</strong> {propsCars2.co2}</h5>
                                                     <h5 class="text-muted"><strong>Etiquette:</strong> {propsCars2.classeEmission}</h5>
                                                     <h5 class="text-muted"><strong>Couleur: </strong> {propsCars2.couleur}</h5>
                                                     <h5 class="text-muted"><strong>Interieur: </strong> {propsCars2.interieur}</h5>
                                                     {/* <h5 class="text-muted"><strong>Garantie:</strong> {garantie}</h5> */}
                                                      
                                                 </div>
                                                 <div class="col-lg-3">
                                                     <h5 class="text-muted"><strong>transmission: </strong> {propsCars2.transmission}</h5>
                                                     <h5 class="text-muted"><strong>Portes: </strong> {propsCars2.portes}</h5>
                                                     <h5 class="text-muted"><strong>Carrosserie: </strong> {propsCars2.carrosserie}</h5>
                                                     <h5 class="text-muted"><strong>Cylindree: </strong> {propsCars2.cylindree}</h5>
                                                     <h5 class="text-muted"><strong>UrlCarPass: </strong> {propsCars2.UrlCarPass}</h5>
                                                     <h5 class="text-muted"><strong>Année de fabrication: </strong> {propsCars2.AnneeDeFabrication}</h5>
                                                 </div>
                                             </div>
                                             <h2 class="mt-5">{propsCars2.DescriptionText}</h2>
                                         </div>
                                     </div>
                 
                                 </div>
                             </section>
                            )}
                            
                            {/* {this.state.listCars.map((propsCar, index) => 

                                <CardCar propsCar={propsCar.marque}/>

                            )} */}

                        </div>
                    </div>
                </div>
                        
            </div>
         );
    }
}
 
export default withRouter(ModelesPage);