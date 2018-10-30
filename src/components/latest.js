import React, { Component } from 'react';
import Article from './Article';
import Headline from './Headline';
import Calendar from '../components/Calendar'

class Latest extends Component {
    state = {
        articles: [],
        headlines: [],
    }
    componentDidMount = async () => {
        let articleArray = [];
        let headlineArray = [];
        let id = 1;


        // call api, convert it to JSON, save that in variable 'data'
        const api_call = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=09b4242d1a2847b1b520eeb23adabd9d');
        const data = await api_call.json();
        

        // iterate through the data and push it into articleArray in state
        
        data.articles.forEach((article)=> {
            
            // change time into more readable string
            let timeString = article.publishedAt.substring(0,10) + ' ' + article.publishedAt.substring(11,16);
            
            // show only first 250 charactes or articles content
            let contentString;
            if (article.content){
                contentString = article.content.substring(0,250) + ' ...';
            }

            // filter latest articles that have an image
            if ((article.urlToImage != null)&&(contentString)) {
                let oneArticle = <Article key={id} title={article.title} time={timeString} source={article.source.name} 
                                url={article.url} content={contentString} image={article.urlToImage}/>;
                articleArray.push(oneArticle);
            }
            // filter latest articles that DONT have an image use the news for sidebar
            else {
                let oneArticle = <Headline key={id} title={article.title} time={timeString} source={article.source.name} 
                                url={article.url} content={contentString} image={article.urlToImage}/>;
                headlineArray.push(oneArticle);
                console.log(article.title);
            }

            id++;
        })
        this.setState({articles: articleArray, headlines:headlineArray});
    };

    render(){
        return(
            <div className='latestPageContent'>
                <div className='leftCollumn'>
                    {this.state.articles}
                    <a href='https://newsapi.org/'>https://newsapi.org/</a>
                </div>
                <div className='rightCollumn'>
                    {this.state.headlines}
                    
                <Calendar />  
                </div>
            </div>
        )
    }
}

export default Latest;