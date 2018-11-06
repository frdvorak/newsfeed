import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import TopHeadlines from './TopHeadlines';
import Business from './Business';
import Entertainment from './Entertainment';
import Health from './Health';
import Science from './Science';
import Sports from './Sports';
import Technology from './Technology';

import About from './About';


const Main = () => (
    <Switch>
        <Redirect exact from="/" to="/dashboard" />
        
        <Route exact path="/dashboard" component={TopHeadlines} />
        <Route exact path="/newsfeed" component={TopHeadlines} />
        <Route exact path="/newsfeed/top-headlines" component={TopHeadlines} />
        <Route exact path="/newsfeed/business" component={Business} />
        <Route exact path="/newsfeed/entertainment" component={Entertainment} />
        <Route exact path="/newsfeed/health" component={Health} />
        <Route exact path="/newsfeed/science" component={Science} />
        <Route exact path="/newsfeed/sports" component={Sports} />
        <Route exact path="/newsfeed/technology" component={Technology} />

        <Route exact path="/about" component={About} />

    </Switch>
)

export default Main;