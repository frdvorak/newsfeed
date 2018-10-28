import React, { Component } from 'react';
import Article from '../components/article';

class Latest extends Component {
    state = {
        city: 'London',
        articles: [],
    }
    componentDidMount = async () => {
        let articleArray = [];
        let id = 1;
        // call api, convert it to JSON, save that in variable 'data'
        const api_call = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=09b4242d1a2847b1b520eeb23adabd9d');
        const data = await api_call.json();
        console.log(data.articles[0]);
        // iterate through the data and push it into articleArray in state
        
        data.articles.forEach((article)=> {
            console.log(article.urlToImage);
            let oneArticle = <Article key={id} title={article.title} time={article.publishedAt} source={article.source.name} url={article.url} content={article.content} image={article.urlToImage}/>;
            articleArray.push(oneArticle);
            //console.log(oneArticle);
            id++;
        })
        //console.log(articleArray);
        this.setState({articles: articleArray})
    };

    render(){
        return(
            <div>
                <h1>Latest Page</h1>
                <a href='https://newsapi.org/'>https://newsapi.org/</a>
                {this.state.articles}
                <p></p>
            </div>
        )
    }
}

export default Latest;