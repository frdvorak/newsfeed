import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Latest from '../components/latest';
import About from '../components/about';
import Other from '../components/other';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Latest} />
        <Route exact path="/latest" component={Latest} />
        <Route exact path="/other" component={Other} />
        <Route exact path="/about" component={About} />
    </Switch>
)

export default Main;