import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TopHeadlinesUK from './TopHeadlinesUK';


const Main = () => (
    <Switch>
        <Route exact path="/" component={TopHeadlinesUK} />
        <Route exact path="/top-headlines-uk" component={TopHeadlinesUK} />
        <Route exact path="/top-headlines-uk" component={TopHeadlinesUK} />
        <Route exact path="/top-headlines-uk" component={TopHeadlinesUK} />
        <Route exact path="/top-headlines-uk" component={TopHeadlinesUK} />
        <Route exact path="/top-headlines-uk" component={TopHeadlinesUK} />
        
    </Switch>
)

export default Main;