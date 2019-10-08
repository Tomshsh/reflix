import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import { Catalog } from './Catalog';

export class User extends Component{
    render(){
        let {match,data,rentMovie,search}=this.props
        let budget= JSON.parse(data.budget)
        let movies= JSON.parse(data.movies)
        let searchVal= JSON.parse(data.searchVal)
        return(
            <Catalog budget={budget} movies={movies}
                search={search} rentMovie={rentMovie} searchVal={searchVal}  />
        )
    }
} 