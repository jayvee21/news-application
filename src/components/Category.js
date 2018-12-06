import React, { Component } from 'react';

class Category extends Component {
    constructor(props){
        super(props);
        this.categories = [ 'general', 'entertainment', 'business', 'health', 'science', 'sports', 'technology' ]
    }
    onChangehandler = (event) => {
       this.props.onChangeCategory( event.target.value )
    }

    render(){
        return(
            <div>
                <select onChange={this.onChangehandler} value={this.props.category}>
                    { this.categories.length > 0 ? this.categories.map( 
                        (category, index) => 
                            <option key={index}> {category} </option> 
                        ) 
                        : <option> No categories to display </option> 
                    }
                </select>           
            </div>
        )
    }

}

export default Category