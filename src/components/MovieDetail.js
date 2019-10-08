import React, { Component } from 'react';

class MovieDetail extends Component {
    render() {
        let movie= this.props.movies[this.props.match.params.movieID]
        return (
            <div id='details'>
                
                <img src={movie.img}></img>
                <span>{movie.year}</span>
                <p>{movie.descrShort}</p>
            </div>
        );
    }
}

export default MovieDetail;