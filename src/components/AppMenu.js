// Libraries.
import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { compose } from 'recompact'

import peintureLogo from '../res/peinture.jpg'
import dessinLogo from '../res/dessin.jpg'
import sculptureLogo from '../res/sculpture.jpg'
import quiLogo from '../res/who.jpg'

import Menu from './Menu'

const View = styled.div`
  /* Dimensions */
  height: 200px;

  /* Layout */
  display: flex;
  justify-content: space-between;

  /* Color */
  background: white;
  border-bottom: 1px solid #f1f1f1;

  /* Text */
  font-size: 1em;
  text-align: left;

  /* Mobile. */
  @media screen and (max-width: 664px) {
    /* Text */
    font-size: 0.7em;
    grid-row-gap: 15px;
  }
`

const LogoWrapper = styled.div`
  grid-area: Logo;

  /* Dimensions */
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  grid-area: Logo;
  justify-self: flex-end;

  height: 130px;

  border-radius: 50%;

  /* Mobile. */
  @media screen and (max-width: 664px) {
    height: 100px;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadein 2s;
`

const Title = styled.div`
  /* Layout */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Text */
  font-size: 32px;
  color: #acbfb4;
  //text-shadow: 0 0 10px #acbfb4;
  //text-align: center;

  /* Mobile. */
  @media screen and (max-width: 664px) {
    font-size: 24px;
  }
`

const Back = styled.button`
  width: 30px;
  height: 30px;

  position: fixed;
  left: calc(100vw - 40px);
  top: calc(100vh - 40px);

  text-align: center;
  line-height: 30px;

  background: #313131;
  color: white;

  border: 1px solid #aaa;
  border-radius: 50%;
`

const imageFromLocation = where => {
  if (where === 'peintures') return peintureLogo
  if (where === 'dessins') return dessinLogo
  if (where === 'sculptures') return sculptureLogo
  if (where === 'qui') return quiLogo
  return peintureLogo
}

const AppMenu = props => {
  const { location: { pathname } } = props
  const where = pathname.substr(1)
  return [
    <View>
      <LogoWrapper>
        <Logo src={imageFromLocation(where)} alt="logo" />
      </LogoWrapper>
      <Title>Strugeon Art Gallery</Title>
      <Menu where={where} />
    </View>,
    <Back onClick={e => window.scrollTo(0, 0)}>⬆</Back>
  ]
}

const enhance = compose(withRouter)
export default enhance(AppMenu)
