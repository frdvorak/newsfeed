import React, { Component } from 'react';
import Article from './Article';
import Headline from './Headline';
import Calendar from './Calendar';
import Controls from './Controls';

class TopHeadlines extends Component {
    state = {
        articles: [],
        headlines: [],
        country: 'gb',
        category: 'science',
    }
    updateCountry = async (newCountry) => {
        await this.setState({country: newCountry});
        this.bringArticles();
    };
    
    bringArticles = async () => {
        let articleArray = [];
        let headlineArray = [];
        let id = 1;

        // call api, convert it to JSON, save that in variable 'data'
        const url = 'https://newsapi.org/v2/top-headlines?country='+ this.state.country + '&category='+ this.state.category + '&apiKey=09b4242d1a2847b1b520eeb23adabd9d';
        const api_call = await fetch(url);
        const data = await api_call.json();
        console.log(url);
        
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
            }

            id++;
        })
        this.setState({articles: articleArray, headlines:headlineArray});
    };

    componentDidMount = () => {
        this.bringArticles();
    };

    

    render(){
        return(
            <div className='latestPageContent'>
                <div className='leftCollumn'>
                    {this.state.articles}
                </div>
                <div className='rightCollumn'>
                    <Controls updateCountry={this.updateCountry}/>
                    <Calendar /> 
                    <div className='headlines'>
                        {this.state.headlines}
                        <a href='https://newsapi.org/'>https://newsapi.org/</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopHeadlines;