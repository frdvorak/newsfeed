import React, { Component } from 'react';
import Article from './Article';

class Latest extends Component {
    state = {
        articles: [],
    }
    componentDidMount = async () => {
        let articleArray = [];
        let id = 1;
        // call api, convert it to JSON, save that in variable 'data'
        const api_call = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=09b4242d1a2847b1b520eeb23adabd9d');
        const data = await api_call.json();
        
        // iterate through the data and push it into articleArray in state
        
        data.articles.forEach((article)=> {
            
        // change time into more readable string
            
            // filter articles that have an image
            if (article.urlToImage != null) {
                let oneArticle = <Article key={id} title={article.title} time={article.publishedAt} source={article.source.name} 
                                url={article.url} content={article.content} image={article.urlToImage}/>;
                console.log(article.urlToImage);
                articleArray.push(oneArticle);
            }
            // filter articles that DONT have an image

            // 


            //console.log(oneArticle);
            id++;
        })
        
        this.setState({articles: articleArray})
    };

    render(){
        return(
            <div className='latestGrid'>
                
                {this.state.articles}
                <a href='https://newsapi.org/'>https://newsapi.org/</a>
                
            </div>
        )
    }
}

export default Latest;