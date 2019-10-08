import React, {Component} from 'react'
import {Movie} from './Movie'
import Rented from './Rented'
export class Catalog extends Component{
    render(){
        let {searchVal,budget,search,rentMovie,movies}=this.props
        return(
            <div id='movie-container'>
                <span>{budget}</span>
                <div id='search'><input type='text' value={searchVal} onChange={search}></input></div>
                <div id='rented-section'><Rented rentMovie = {rentMovie}movies={movies} /></div>
                {movies.filter(m=>!m.isRented).map(m=><Movie rentMovie={rentMovie} movie={m}  />)}
            </div>
        )
    }
}
