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
        <Header title={<span><span style={{ color: '#ddd' }}>News </span><strong>Feed</strong></span>}>
            <Navigation>
                <Link to="/latest">latest</Link>
                <Link to="/other">other</Link>
                <Link to="/about">about</Link>
            </Navigation>
        </Header>
        <Drawer title="News Feed App">
            <Navigation>
                <Link to="/latest">latest</Link>
                <Link to="/other">other</Link>
                <Link to="/about">about</Link>
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
