import React, { Component } from 'react';
import styled from 'styled-components'

const Hero = styled.div`
  background: lightgreen;
  width: 100%;
  height: 55vw;
  position: relative;
`
const HeroTitle = styled.h1`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  text-transform: uppercase;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero>
          <HeroTitle>Hier Bin ich</HeroTitle>
        </Hero>
        <div className="App-header">
          <h2>Welcome to my portfolio</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
