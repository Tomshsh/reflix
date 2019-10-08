import React, { Component } from 'react';
import {Movie} from './Movie'


class Rented extends Component {
    render() {
        return (
            <div className='rented'>
                {this.props.movies.filter(m=>m.isRented===true).map(m=><Movie rentMovie={this.props.rentMovie} movie={m} />) }
                <hr/>
            </div>
        );
    }
}

export default Rented;