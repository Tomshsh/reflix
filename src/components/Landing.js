import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import { User } from './User';


export class Landing extends Component {
    constructor(){
        super()
        this.state={
            users:[
                {name:'Tomer',color: 'blue'},
                {name: 'gissele', color:'purple'}
            ]
        }
    }
    render(){
        return (
            this.state.users.map(u=>{
            return<Link to={`/${u.name}`}>
            <div className='userImg' style={{backgroundColor:u.color}}>
                {u.name}
            </div>
            </Link>})
        )
    }
}