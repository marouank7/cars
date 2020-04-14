import React, { Component } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <nav class="navbar fixed-top navbar-expand-lg navBarBg" id="navBar1">
                <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarToggler" 
                    aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarToggler">
                    <ul class="navbar-nav w-100 d-flex justify-content-center align-items-center">
                        <li class="nav-item">
                            <a href="#accueil" class="nav-link buttonNav">Accueil</a>
                        </li>
                        <li class="nav-item">
                            <a href="#portfolio" class="nav-link buttonNav">Portefolio</a>
                        </li>
                        <li class="nav-item">
                            <a href="#about" class="nav-link buttonNav">À Propos</a>
                        </li>
                        <li class="nav-item">
                            <a href="#services" class="nav-link buttonNav">Services</a>
                        </li>
                        <li class="nav-item">
                            <a href="#contact" class="nav-link buttonNav">Contact</a>
                        </li>
                        <li class="nav-item">
                            <Link to="/adminpage" class="nav-link buttonNav">Admin</Link>
                        </li>
                    </ul>
                </div>
            </nav>
         );
    }
}
 
export default NavBar;
    