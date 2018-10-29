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
                <Link to="/latest"><strong>Top</strong> headlines</Link>
                <Link to="/other"><strong>All</strong> news</Link>
                <Link to="/about"><strong>About</strong> website</Link>
            </Navigation>
        </Header>
        <Drawer title="Live News">
            <Navigation>
                <Link to="/latest"><strong>Top</strong> headlines</Link>
                <Link to="/other"><strong>All</strong> news</Link>
                <Link to="/about"><strong>About</strong> website</Link>
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
