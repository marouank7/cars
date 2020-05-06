import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';


class InputCar extends Component {
   
    render() {
        const {placeholder, name, action, value, label} = this.props
        return ( 
            <div class="form-group">
                    <label for="exampleFormControlInput1">{label}</label>
                    <input type="text" class="form-control" name={name} placeholder={placeholder} value={value} onChange={action}/>
                </div>
         );
    }
}
 
export default withRouter(InputCar);