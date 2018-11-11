import React, { Component } from 'react';
import '../components/header.css';


class Header extends Component {
    

    render(){
        
        return(
            <div className="header">
                <h1>Live News</h1>
                <img src='../planet.png' alt='planet' />
            </div>
        )
    }
}

export default Header;