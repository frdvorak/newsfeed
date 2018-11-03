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
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}>Live </span><strong>News</strong></span>}>
            <Navigation>
                <Link to="/top-headlines"><strong>Top</strong> headlines</Link>
                <Link to="/top-headlines-us"><strong>Top</strong> headlines US</Link>
                <Link to="/ign"><strong>I</strong>GN</Link>
                <Link to="/new-scientist"><strong>New</strong> scientist</Link>
                <Link to="/wired"><strong>Wi</strong>red</Link>
                <Link to="/mtv-news"><strong>MTV</strong> news</Link>
            </Navigation>
        </Header>
        <Drawer title="Live News">
            <Navigation>
                <Link to="/top-headlines"><strong>Top</strong> headlines</Link>
                <Link to="/top-headlines-us"><strong>Top</strong> headlines US</Link>
                <Link to="/ign"><strong>I</strong>GN</Link>
                <Link to="/new-scientist"><strong>New</strong> scientist</Link>
                <Link to="/wired"><strong>Wi</strong>red</Link>
                <Link to="/mtv-news"><strong>MTV</strong> news</Link>
            </Navigation>
        </Drawer>
        <Content>
          <div className='page-content' />
          <Main />
        </Content>
    </Layout>
</div>
      </div>
    );
  }
}

export default App;
