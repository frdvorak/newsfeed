import React, { Component } from 'react';
import './App.css';
import { Layout, Drawer, Navigation, Content, Header} from 'react-mdl';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div style={{height: '100vh', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
      </div>
    );
  }
}

export default App;
