import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';


class DescriptiveText extends Component {
   
    render() {
        const {placeholder, value, action} = this.props
        return ( 
            <div class="container-fluid">
                <h2 class="py-3">Description</h2>
                <div>
                    <textarea class="form-control" name="message" id="DescriptionText" rows="4" required="required"  placeholder={placeholder} value={value} onChange={action}></textarea>
                </div>
                
            </div>
         );
    }
}
 
export default withRouter(DescriptiveText);