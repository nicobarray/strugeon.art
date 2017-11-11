import React, { Component } from 'react';

import styled from 'styled-components';
import VanGogh from './img/paintings/van-gogh-0.jpg';
import VanGogh1 from './img/paintings/van-gogh-1.jpg';
import VanGogh2 from './img/paintings/van-gogh-2.jpg';

const View = styled.div`
  /* Dimensions */
  height: 100vh;

  /* Layout */
  display: flex;
  flex-flow: column nowrap;

  align-items: center;
`

const Painting = styled.div`
  width: 80%;
  height: 80%;
  margin: 32px;
  
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;

  /* Shadows */
  box-shadow: 0px 16px 32px #888888;
`
console.log(VanGogh1)
class App extends Component {
  render() {
    return (
      <View>
        <Painting src={VanGogh} alt='van-gogh-0' />
      </View>
    );
  }
}

export default App;
