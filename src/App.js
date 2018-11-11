import React, { Component } from 'react';
import './App.css';
import { Layout, Drawer, Navigation, Content, Header} from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';
import NewsArticles from './components/NewsArticles';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div style={{height: '100vh', position: 'relative'}}>
            <NewsArticles />
    
        </div>
    </div>
    );
  }
}

export default App;
