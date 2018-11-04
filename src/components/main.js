import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Newspage from './Newspage';
import About from './About';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Newspage} />
        <Route exact path="/top-headlines" component={Newspage} />
        <Route exact path="/business" component={Newspage} />
        <Route exact path="/entertainment" component={Newspage} />
        <Route exact path="/health" component={Newspage} />
        <Route exact path="/science" component={Newspage} />
        <Route exact path="/sports" component={Newspage} />
        <Route exact path="/technology" component={Newspage} />

        <Route exact path="/about" component={About} />

    </Switch>
)

export default Main;