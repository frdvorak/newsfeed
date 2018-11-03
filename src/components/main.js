import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TopHeadlines from './TopHeadlines';
import TopHeadlinesUS from './TopHeadlinesUS';
import Ign from './Ign';
import NewScientist from './NewScientist';
import Wired from './Wired';
import MtvNews from './MtvNews';

const Main = () => (
    <Switch>
        <Route exact path="/" component={TopHeadlines} />
        <Route exact path="/top-headlines" component={TopHeadlines} />
        <Route exact path="/top-headlines-us" component={TopHeadlinesUS} />
        <Route exact path="/ign" component={Ign} />
        <Route exact path="/new-scientist" component={NewScientist} />
        <Route exact path="/wired" component={Wired} />
        <Route exact path="/mtv-news" component={MtvNews} />
    </Switch>
)

export default Main;