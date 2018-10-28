import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Latest from './Latest';
import About from './About';
import Other from './Other';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Latest} />
        <Route exact path="/latest" component={Latest} />
        <Route exact path="/other" component={Other} />
        <Route exact path="/about" component={About} />
    </Switch>
)

export default Main;