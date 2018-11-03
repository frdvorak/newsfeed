import React, { Component } from 'react';
import './controls.css';


class Controls extends Component {
    onChangeCountry = (e) => {
        e.preventDefault();
        let country = e.target.value;
        this.props.updateCountry(country);
    }
    render(){
        
        return(
            <div className='controls' onChange={this.onChangeCountry}>
                <select name="coutries">
                    <option value="gb">UK</option>
                    <option value="us">US</option>
                    <option value="fr">FR</option>
                    <option value="it">IT</option>
                </select>
                <select name="sources">
                    <option value="ign">IGN</option>
                    <option value="new-scientist">New Scientist</option>
                    <option value="wired">Wired</option>
                    <option value="mtv-news">MTV News</option>
                </select>
            </div>
        )
    }
}

export default Controls;