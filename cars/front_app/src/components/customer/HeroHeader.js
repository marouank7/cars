import React, { Component } from 'react'
import './HeroHeader.css'

class HeroHeader extends Component {
    
    render() { 
        return ( 
            <header class="text-center" id="HeroHeader">
                <div class="text-intro text-light">
                    <div class="preTxt font-italic" style={{color:"#e0d3be"}}><strong>Sanders Cars</strong></div>
                        <h1 style={{color:"#e0d3be"}}>ACHAT - VENTE</h1>
                        <h2>Payement CASH avec ou sans controle Tech.</h2>
                        <h2>Accidentées ou beaucoup de KM</h2>
                        <h2>Dépannage National et Inter.</h2>
                    </div>
            </header>
         );
    }
}
 
export default HeroHeader;