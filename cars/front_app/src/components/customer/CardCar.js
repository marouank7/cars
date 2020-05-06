import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Carousel from './Carousel'



class CardCar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {
                id, marque, modele, prix, DescriptionText, carburant,
                classeEmission, carrosserie, portes, transmission, couleur, interieur,
                co2, NombreDePlaces, cylindree, UrlCarPass, kilometrage, AnneeDeFabrication
            } = this.props.location.state

            console.log("this.props.location.state", this.props.location.state)

        return ( 
            <section id="modeles" class="my-5 text-center">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="card-body">
                            <Carousel/>
                            <div class="py-3">
                            <h3 class="text-muted"><strong>Marque: </strong> {marque}</h3>
                            <h4 class="text-muted"><strong>Modèle: </strong> {modele}</h4>
                            <h4 class="text-muted"><strong>Prix: </strong> {prix}</h4>
                            </div>
                            <div class="row d-flex justify-content-center">
                                <div class="col-lg-3">
                                    <h5 class="text-muted"><strong>Carburant: </strong> {carburant}</h5>
                                    <h5 class="text-muted"><strong>kilometrage: </strong> {kilometrage}</h5>
                                    <h5 class="text-muted"><strong>NombreDePlaces </strong> {NombreDePlaces}</h5>
                                    <h5 class="text-muted"><strong>CO2:</strong> {co2}</h5>
                                    <h5 class="text-muted"><strong>Etiquette:</strong> {classeEmission}</h5>
                                    <h5 class="text-muted"><strong>Couleur: </strong> {couleur}</h5>
                                    <h5 class="text-muted"><strong>Interieur: </strong> {interieur}</h5>
                                    {/* <h5 class="text-muted"><strong>Garantie:</strong> {garantie}</h5> */}
                                     
                                </div>
                                <div class="col-lg-3">
                                    <h5 class="text-muted"><strong>transmission: </strong> {transmission}</h5>
                                    <h5 class="text-muted"><strong>Portes: </strong> {portes}</h5>
                                    <h5 class="text-muted"><strong>Carrosserie: </strong> {carrosserie}</h5>
                                    <h5 class="text-muted"><strong>Cylindree: </strong> {cylindree}</h5>
                                    <h5 class="text-muted"><strong>UrlCarPass: </strong> {UrlCarPass}</h5>
                                    <h5 class="text-muted"><strong>Année de fabrication: </strong> {AnneeDeFabrication}</h5>
                                </div>
                            </div>
                            <h2 class="mt-5">{DescriptionText}</h2>
                        </div>
                    </div>

                </div>
            </section>
         );
    }
}
 
export default withRouter(CardCar);