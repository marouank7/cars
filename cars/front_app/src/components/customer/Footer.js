import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <footer id="main-footer" class="text-center p-4 footer text-light">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <p>Copyright &copy; <span id="year"></span> Sanders Car</p>
                        </div>
                    </div>
                </div>
            </footer>
         );
    }
}
 
export default Footer;