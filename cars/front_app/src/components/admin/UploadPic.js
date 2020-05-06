import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';


class UploadPic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFiled : null,   
         }
         
    }

   
    fileSelectedHandler = (event) => {
        this.setState({ selectedFiled : event.target.files[0] });
        console.log(event.target.files[0])
    }

    render() { 
        return ( 
            <div class="container-fluid">
                <h2 class="py-3">Photo</h2>
                <div>
                    <input type="file" onChange={this.fileSelectedHandler}></input>
                </div>            
            </div>
         );
    }
}
 
export default withRouter(UploadPic);