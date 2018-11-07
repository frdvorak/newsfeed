import React, { Component } from 'react';
import './App.css';
import { Layout, Drawer, Navigation, Content, Header} from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <div style={{height: '100vh', position: 'relative'}}>
        
        <Layout>
        <div className='header'>
            <h1><strong>Live</strong> News</h1>
            <img src='./planet.png' alt='planet'/>
        </div>
            <Header scroll>
                <Navigation>
                    <Link to="/newsfeed/top-headlines"><strong>Top</strong> headlines</Link>
                    <Link to="/newsfeed/business"><strong>B</strong>usiness</Link>
                    <Link to="/newsfeed/entertainment"><strong>E</strong>ntertainment</Link>
                    <Link to="/newsfeed/health"><strong>H</strong>ealth</Link>
                    <Link to="/newsfeed/science"><strong>S</strong>cience</Link>
                    <Link to="/newsfeed/sports"><strong>S</strong>ports</Link>
                    <Link to="/newsfeed/technology"><strong>T</strong>echnology</Link>
                </Navigation>
            </Header>
        <Drawer title="Live News">
            <Navigation>
                <Link to="/newsfeed/top-headlines"><strong>Top</strong> headlines</Link>
                <Link to="/newsfeed/business"><strong>B</strong>usiness</Link>
                <Link to="/newsfeed/entertainment"><strong>E</strong>ntertainment</Link>
                <Link to="/newsfeed/health"><strong>H</strong>ealth</Link>
                <Link to="/newsfeed/science"><strong>S</strong>cience</Link>
                <Link to="/newsfeed/sports"><strong>S</strong>ports</Link>
                <Link to="/newsfeed/technology"><strong>T</strong>echnology</Link>
            </Navigation>
        </Drawer>
        <Content>
            <Main />
        </Content>
    </Layout>
</div>
      </div>
    );
  }
}

export default App;
