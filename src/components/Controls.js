import React, { Component } from 'react';
import './controls.css';


class Controls extends Component {
    
    onChangeCountry = (e) => {
        e.preventDefault();
        let country = e.target.value;
        this.props.updateCountry(country);
    }
    onChangeSource = (e) => {
        e.preventDefault();
        let source = e.target.value;
        this.props.updateSource(source);
        //document.getElementById('countrySelector').setAttribute("value", "gb");
    }
    render(){
        
        return(
            <div className='controls'>
                <select id='countrySelector' name="coutries"  onChange={this.onChangeCountry}>
                    <option value="gb">United Kingdom</option>
                    <option value="us">United States</option>
                    <option value="fr">France</option>
                    <option value="it">Italy</option>
                </select>
                <select name="sources" onChange={this.onChangeSource}>
                <option value="">All sources</option>
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