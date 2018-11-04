import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
        <Route exact path="/" component={TopHeadlines} />
        <Route exact path="/top-headlines" component={TopHeadlines} />
        <Route exact path="/business" component={Business} />
        <Route exact path="/entertainment" component={Entertainment} />
        <Route exact path="/health" component={Health} />
        <Route exact path="/science" component={Science} />
        <Route exact path="/sports" component={Sports} />
        <Route exact path="/technology" component={Technology} />

        <Route exact path="/about" component={About} />

    </Switch>
)

export default Main;