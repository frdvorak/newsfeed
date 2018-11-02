import React, { Component } from 'react';
import './headline.css';


class Headline extends Component {

    render(){
        let firstLetter = this.props.title.toUpperCase().substring(0,1);
        console.log(firstLetter);
        return(
            <div className="headline">
                <span className='firstLetter'>{firstLetter}</span><p><a href={this.props.url} target='_blank' rel="noopener noreferrer">{this.props.title}</a></p>
            </div>
        )
    }
}

export default Headline;