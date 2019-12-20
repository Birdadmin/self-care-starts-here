import React from 'react';
import Header from './Header'
import First from './First'
import Second from './Second'

import './App.css';

class App extends React.Component {
    redirect(){
      window.location.href="https://bluebirdbotanicals.com";
    }
    render(){
    return (
      <div className="App">
        <Header />
        <First redirect={this.redirect}/>
        <Second redirect={this.redirect}/>
      </div>
    );
  }
}
export default App;