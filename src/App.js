import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Portfolio from './portfolio.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {menu: false};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick (){
    this.setState(prevState => ({
      menu: !prevState.menu
    }));
  }
  returnMenu (){
    return(
        <div>
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
    )
  }
  returnNull(){
    return(<div></div>)
  }
  render() {
    let menuBlock;
    if(this.state.menu){
      menuBlock = this.returnMenu();
    }else{
      menuBlock = this.returnNull();
    }
    return (
      <div className="App" >
        <div className="mobileMenu">
          {menuBlock}
        </div>
        <div className="main container">
          <header className="App-header">
            <div className="inside" id="menu" onClick={this.handleClick}>&#9776;</div>
            <div className="title">Tiny utopias</div>
            <div className="inside"></div>
          </header>
          <section>
            <Portfolio/>
          </section>
        </div>
      </div>

    );
  }
}

export default App;
