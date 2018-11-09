import React, { Component } from 'react';
import '../components/article.css';


class Article extends Component {
    

    render(){
        // show only part of content and always end with 'space' not mid-word
        const articleContent = this.props.content.substring(0,230); //remove the last space as every article.content ends with space
        const lastSpaceAt = articleContent.lastIndexOf(" ");        //determine last space in that substring
        const content = articleContent.substring(0, lastSpaceAt) + '...'; //cut the string where the space is
        //console.log(content.length);

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
                <p>{content} <a href={this.props.url} target='_blank' rel="noopener noreferrer">full article</a></p>
            </div>
        )
    }
}

export default Article;