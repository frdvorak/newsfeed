import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TopHeadlines from './TopHeadlines';
import About from './About';


const Main = () => (
    <Switch>
        <Route exact path="/" component={TopHeadlines} />
        <Route exact path="/top-headlines" component={TopHeadlines} />
        <Route exact path="/business" component={TopHeadlines} />
        <Route exact path="/entertainment" component={TopHeadlines} />
        <Route exact path="/health" component={TopHeadlines} />
        <Route exact path="/science" component={TopHeadlines} />
        <Route exact path="/sports" component={TopHeadlines} />
        <Route exact path="/technology" component={TopHeadlines} />

        <Route exact path="/about" component={About} />

    </Switch>
)

export default Main;