import React, { Component } from 'react'
import ModelesPage from './ModelesPage'
import NavBar from '../NavBar'
import HeroHeader from '../HeroHeader'
import Footer from '../Footer'
import Contact from '../Contact'
import NotreEquipe from '../NotreEquipe'
import Services from '../Services'
import BreakImage from '../BreakImage'

class clientPage extends Component {
   
    render() { 
        return ( 
            <>
                <NavBar/>
                <HeroHeader/>
                <Services/>
                <ModelesPage/>
                <NotreEquipe/>
                <BreakImage/>
                <Contact/>
                <Footer/>
            </>
         );
    }
}
 
export default clientPage;