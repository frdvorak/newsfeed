import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NewsArticles from './NewsArticles';
import About from './About';


const Main = () => (
    <Switch>
        <Redirect exact from="/" to="/dashboard" />
        
        <Route exact path="/dashboard" component={NewsArticles} />
        <Route exact path="/newsfeed" component={NewsArticles} />
        <Route exact path="/newsfeed/news-articles" component={NewsArticles} />
        <Route exact path="/newsfeed/about" component={About} />

    </Switch>
)

export default Main;