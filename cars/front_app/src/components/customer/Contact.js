import React, { Component } from 'react'
import './contact.css'


class Contact extends Component {
    
    render() { 
        return ( 
            <section class="text-white py-5 backgroundForm1" id="contact">
                <div class="container ">
                    <div class="container p-5 backgroundForm2">

                    <h2 class="titreContact text-center mb-1 fontText">Nous Contacter</h2>
                    <hr class="mb-5" style={{width:"40px", height:"2px", backgroundColor :"#340809"}}/>
                        <div class="row">
                            <div class="col-10 mx-auto"> 
                                <form id="contact-form" role="form" action="https://formspree.io/marouan_k@live.be" method="POST">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="d-flex align-items-start">
                                                <div>
                                                    <i class="fas fa-map-marked fontText"></i>
                                                </div>
                                                <div>
                                                    <div class="pl-2 item-h1 fontText"><strong>Adresse</strong></div>
                                                    <p class="pl-2 fontText"> Ottignies</p>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-start">
                                                <div>
                                                    <i class="fas fa-envelope fontText"></i>
                                                </div>
                                                <div>
                                                    <div class="pl-2 item-h1 fontText"><strong>E-MAIL</strong></div>
                                                    <p class="pl-2 fontText"> marouan_k@live.be</p>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-start">
                                                <div>
                                                    <i class="fas fa-business-time fontText"></i>
                                                </div>
                                                <div>
                                                    <div class="pl-2 item-h1 fontText"><strong>HORAIRE</strong></div>
                                                    <p class="pl-2 fontText">Lundi - Vendredi</p>
                                                    <p class="pl-2 fontText">09H00 - 18H00</p>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-start">
                                                <div>
                                                    <i class="fas fa-phone-alt fontText"></i>
                                                </div>
                                                <div>
                                                    <div class="pl-2 item-h1 fontText"><strong>TÉLÉPHONE</strong></div>
                                                    <p class="pl-2 fontText">(+32) 488.28.08.31</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                </div>
                                                <input type="text" id="form_prenom" class="form-control" name="prenom" placeholder="Prénom" required="required"/>
                                                <div class="input-group-prepend">
                                                </div>
                                            </div>

                                            {/* <h6 id="validePrenom">Vous devez inscire votre prénom.</h6> */}

                                            <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                </div>
                                                <input type="text" id="form_nom" class="form-control" name="nom" placeholder="Nom" required="required"/>
                                                <div class="input-group-prepend">
                                                </div>
                                            </div>

                                            {/* <h6 id="valideNom">Vous devez inscrire votre Nom.</h6> */}

                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                </div>
                                                <input type="email" id="form_email" class="form-control" name="email" placeholder="Email" required="required"/>
                                                <div class="input-group-prepend">
                                                </div>
                                            </div>

                                            {/* <h6 id="valideEmail">Votre email n'est pas valide.</h6> */}
                                            
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                </div>
                                                <input type="number" id="form_phone" class="form-control" name="phone" placeholder="Téléphone"/>
                                                <div class="input-group-prepend">
                                                </div>
                                            </div>
                                            
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                </div>
                                                <textarea class="form-control" name="message" id="form_message" rows="4" required="required"  placeholder="Message"></textarea>
                                                 <div class="input-group-prepend">
                                                </div>
                                            </div>
                                            {/* <h6 id="valideMessage">Votre message doit contenir plus de 10 caractères.</h6> */}
                                            <div class="text-center">
                                                <div class="input-group-prepend">
                                                </div>
                                                <input type="submit" class="btn btn-send mt-3 text-light" style={{background : "#340809", borderRadius : "0%"}} value="Envoyez" id="submitt"/>
                                                <div class="input-group-prepend">
                                                </div>                                  
                                            </div>
                                            


                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
         );
    }
}
 
export default Contact;