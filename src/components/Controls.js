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
    onChangeCategory = (e) => {
        e.preventDefault();
        let category = e.target.dataset.category;
        this.props.updateCategory(category);
    }
    render(){
        
        return(
            <div className='controls'>
                <div className="navigation">
                    <ul>
                        <li onClick={this.onChangeCategory} data-category='top-headlines'>Headlines</li>
                        <li onClick={this.onChangeCategory} data-category='business'>Business</li>
                        <li onClick={this.onChangeCategory} data-category='entertainment'>Entertainment</li>
                        <li onClick={this.onChangeCategory} data-category='health'>Health</li>
                        <li onClick={this.onChangeCategory} data-category='science'>Science</li>
                        <li onClick={this.onChangeCategory} data-category='sports'>Sports</li>
                        <li onClick={this.onChangeCategory} data-category='technology'>Technology</li>
                    </ul>
                </div>
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