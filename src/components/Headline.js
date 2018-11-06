import React, { Component } from 'react';
import './headline.css';


class Headline extends Component {

    render(){
        let firstLetter = this.props.title.match(/[a-zA-Z]/).join('').toUpperCase().substring(0,1);
        return(
            <div className="headline">
            <a href={this.props.url} target='_blank' rel="noopener noreferrer"><span className='firstLetter'>{firstLetter}</span><p>{this.props.title}</p></a>
            </div>
        )
    }
}

export default Headline;