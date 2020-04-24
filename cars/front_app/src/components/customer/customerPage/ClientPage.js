import React, { Component } from 'react'
import ModelesPage from './ModelesPage'
import NavBar from '../NavBar'
import HeroHeader from '../HeroHeader'
import Footer from '../Footer'
import Contact from '../Contact'
import NotreEquipe from '../NotreEquipe'
import BreakImage from '../BreakImage'

class clientPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <NavBar/>
                <HeroHeader/>
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