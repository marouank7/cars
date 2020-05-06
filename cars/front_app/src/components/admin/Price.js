import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';


class Price extends Component {
   
    render() {
        const {price, action} = this.props
        return ( 
            <div class="container-fluid">
                <h2 class="py-3">Prix</h2>
                <input type="text" class="form-control" id="prix" placeholder={price} value={price} onChange={action}/>
            </div>
         );
    }
}
 
export default withRouter(Price);