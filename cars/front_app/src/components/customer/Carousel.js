import React, { Component } from 'react'
import Mercedes from '../../img/Mercedes.jpeg'
import Porsche from '../../img/Porsche.jpeg'
import HeroHeaderAudi from '../../img/HeroHeaderAudi.jpg'
import HeroHeaderAudi2 from '../../img/HeroHeaderAudi2.jpg'
import './Carousel.css'


class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div class="container">

                <div id="carouselExemple" class="carousel slide" data-ride="carousel" data-interval="3000">
        
                    <ol class="carousel-indicators">
                        <li class="active" data-target="#carouselExemple" data-slide-to="0"></li>
                        <li data-target="#carouselExemple" data-slide-to="1"></li>
                        <li data-target="#carouselExemple" data-slide-to="2"></li>
                    </ol>
        
                    <div class="carousel-inner">
        
                        <div class="carousel-item active">
                            <img src={HeroHeaderAudi2}  class="d-block"/> 
                        </div>
        
                        <div class="carousel-item">
                            <img  src={Porsche} class="d-block"/> 
                        </div>
                        <div class="carousel-item">
                            <img  src={HeroHeaderAudi} class="d-block"/> 
                        </div>
        
                    </div>
        
                        <a href="#carouselExemple"
                            class="carousel-control-prev" role="button"
                            data-slide="prev">
                                <span class="carousel-control-prev-icon"
                                aria-hidden="true"></span>
                                <span class="sr-only">Précedent</span>
                        </a> 
                        
                        <a href="#carouselExemple"
                            class="carousel-control-next" role="button"
                            data-slide="next">
                            <span class="carousel-control-next-icon"
                                aria-hidden="true"></span>
                            <span class="sr-only">Suivant</span>  
                        </a>
                </div>  
         </div>
         );
    }
}
 
export default Carousel;