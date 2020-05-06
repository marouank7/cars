import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';


class OptionsCar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        const listCheckBox = [{option : "4x4", id : 1 }, {option : "ABS", id : 2 }, {option : "Phares directionnels", id : 3  }, {option : "Régulateur de distance" },
         {option : "Airbags" }, {option : "Air conditionné" }, {option : "Alarme" }, {option : "Intérieur cuir" },
         {option : "Bluetooth" }, {option : "Ordinateur de bord" }, {option : " Verrouillage central" }, {option : "Air conditionné automatique" },
         {option : "Cruise Control" }, {option : "Avertisseur d'angle mort" }, {option : "Hayon arrière électrique" }, {option : "Rétroviseurs électriques" },
         {option : "Sièges électriques" }, {option : "Vitres électriques" }, {option : "Assistance au freinage d'urgence" }, {option : "Isofix" },
         {option : "Verrouillage centralisé sans clé" }, {option : "Verrouillage centralisé sans clé" }, {option : "Jantes en alliage léger" }, {option : "Peinture métallisée" },
         {option : "Phares antibrouillard" }, {option : "Système de navigation" }, {option : "Toit ouvrant / panoramique" }, {option : "Toit panoramique" },
         {option : "Pilote automatique de stationnement" }, {option : "Caméra" }, {option : "Capteur de stationnement" }, {option : "Radio" },
         {option : "Porte coulissante" }, {option : "Pack sport" }, {option : "Sièges sport" }, {option : "Commande vocale" },
         {option : "Interruption de démarrage" }, {option : "Système Start/Stop" }, {option : "Sièges massants" }, {option : "Sièges ventilés" },
         {option : "Sièges chauffants" }, {option : "Sièges chauffants" }, {option : "Volant chauffant" }, {option : "Système Start/Stop" },
         {option : "Anti démarrage" }, {option : "Attache-remorque" }, {option : "USB" }, {option : "Détection des panneaux routiers" },
         {option : "Système de détection de la somnolence" }, {option : "Rétroviseurs extérieur chauffants" }, {option : "Phares au xénon" }
        ]

        return ( 
            <div class="container-fluid">
                <h2 class="py-3">Options</h2>
                <div class="row">
                    {listCheckBox.map((them)=>
                    <ul>
                        <div class="form-check" style={{width:"300px"}}>
                            <input class="form-check-input" type="checkbox" value="true" id={them.id} onChange={this.updateField}/>
                            <label class="form-check-label" for="defaultCheck1">
                                {them.option}
                            </label>
                        </div>
                    </ul>)}
                </div>
            </div>
         );
    }
}
 
export default withRouter(OptionsCar);