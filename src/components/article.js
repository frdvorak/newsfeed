import React, { Component } from 'react';
import '../components/article.css';


class Article extends Component {
    

    render(){
        // adjust substring coming from this.props.content to end with space, not mid-word
        function endsWith(str){
            let charCount = 20; // remove this many characters from the string and find a space there
            for(let i=str.length-charCount; i<str.length; i++){
                if(str[i]===' '){       //if we find a space, set variable spaceAt to that value
                    var spaceAt = i;    // needs to be VAR not LET, we need function scoped
                }else{
                    i++;
                }
            }
            return str.substring(0, spaceAt)+ '...'; //cut the string where the space is
        }
        const articleContent = endsWith(this.props.content);

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
                <p>{articleContent} <a href={this.props.url} target='_blank' rel="noopener noreferrer">full article</a></p>
            </div>
        )
    }
}

export default Article;