import React, { Component } from 'react';


class Article extends Component {
    render(){
        return(
            <div className="headline">
                <p><a href={this.props.url} target='_blank' rel="noopener noreferrer">{this.props.title}</a></p>
                
            </div>
        )
    }
}

export default Article;