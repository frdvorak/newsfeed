import React, { Component } from 'react';


class Article extends Component {
    

    render(){
        //let backgroundImage = 'url(' +{this.props.image} +')';
        //let Background = {this.props.image};
        return(
            <div className="article">
                <header style={{backgroundImage: `url(${this.props.image})`}}>
                    <img src={this.props.image} alt='' />
                    <h5>{this.props.title}</h5>
                    <div className='subheader'>
                        <span className='articleSource'>source: {this.props.source}</span>
                        <span className='articleTime'>{this.props.time}</span>
                    </div>
                </header>
               
                <p>{this.props.content} <a href={this.props.url} target='_blank' rel="noopener noreferrer">full article</a></p>
                
               
                
            </div>
        )
    }
}

export default Article;