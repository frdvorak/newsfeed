import React, { Component } from 'react';

class Latest extends Component {
    componentDidMount = async () => {
        // call api, convert it to JSON, save that in variable 'data'
        const api_call = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=09b4242d1a2847b1b520eeb23adabd9d');
        const data = await api_call.json();
        console.log(data.articles[0]);
        
      };
    render(){
        return(
            <div>
                <h1>Latest Page</h1>
                <a href='https://newsapi.org/'>https://newsapi.org/</a>

                <p></p>
            </div>
        )
    }
}

export default Latest;