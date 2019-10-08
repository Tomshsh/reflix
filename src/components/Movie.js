import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'


export class Movie extends Component{
    rentMovie= ()=>{
        this.props.rentMovie(this.props.movie.id)
    }
    render(){
        let movie= this.props.movie
        return (
            <div className='movies' id={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                <img src={movie.img} style={{height:'200px'},{width:'200px'}}></img>
                </Link>
                <button onClick={this.rentMovie}>{movie.isRented? "-":"+"}</button>
            
            </div>
        )
    }
}