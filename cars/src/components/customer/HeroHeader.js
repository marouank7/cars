import React, { Component } from 'react'
import './HeroHeader.css'

class HeroHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <header class="text-center" id="HeroHeader">
                <div class="text-intro">
                    <div class="preTxt font-italic"><strong>Sanders Cars</strong></div>
                        <h1>ACHAT - VENTE</h1>
                        <h2>Payement CASH avec ou sans controle Tech.</h2>
                        <h2>Accidentées ou beaucoup de KM</h2>
                        <h2>Dépannage National et Inter.</h2>
                </div>
            </header>
         );
    }
}
 
export default HeroHeader;