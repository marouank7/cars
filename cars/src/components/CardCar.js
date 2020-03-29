import React, { Component } from 'react'



class CardCar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {model, kilometrage, annee, co2, etiquette, garantie, photo} = this.props

        return ( 
            <section id="modeles" class="my-5 text-center">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="card-body">
                            <img src={photo} alt="voiture" class="img-fluid w-50 mb-3" ></img>
                            {/* <img src="img/visage1.jpg" alt="visage" class="img-fluid rounded-circle w-50 mb-3"> */}
                            <h3 class="">{model}</h3>
                            <h5 class="text-muted"><strong>kilometrage: </strong> {kilometrage}</h5>
                            <h5 class="text-muted"><strong>Année:</strong> {annee}</h5>
                            <h5 class="text-muted"><strong>CO2:</strong> {co2}</h5>
                            <h5 class="text-muted"><strong>Etiquette:</strong> {etiquette}</h5>
                            <h5 class="text-muted"><strong>Garantie:</strong> {garantie}</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae optio, laborum saepe asperiores non dicta maxime doloribus.</p>
                            <div class="d-flex justify-content-center">
                                <div class="p-4">
                                    <a href="http://facebook.com">
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="http://twitter.com">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="http://instagram.com">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
         );
    }
}
 
export default CardCar;