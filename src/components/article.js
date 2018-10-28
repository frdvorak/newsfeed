import React, { Component } from 'react';

class Article extends Component {
    render(){
        return(
            <div className="article">
                <h5>{this.props.title}</h5>
                <p>{this.props.content}</p>
                <p>{this.props.time}</p>
                <p>{this.props.source}</p>
                <p>{this.props.url}</p>
                <img src={this.props.image} />
            </div>
        )
    }
}

export default Article;