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
  height: 180px;

  /* Layout */
  display: flex;
  justify-content: space-between;

  /* Color */
  background: linear-gradient(45deg, #e9e9e9, white);
  border-bottom: 1px solid #fafafa;

  /* Text */
  font-size: 1em;
  text-align: left;
`

const LogoWrapper = styled.div`
  /* Dimensions */
  height: 100%;
  max-width: 300px;

  padding: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  grid-area: Logo;
  justify-self: flex-end;

  height: 100px;
  width: auto;

  border-radius: 15%;

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
  align-items: center;

  /* Text */
  font-size: 32px;
  color: #666;

  margin-left: 8px;
`

const Back = styled.button`
  width: 30px;
  height: 30px;

  position: fixed;
  left: calc(100vw - 34px);
  top: calc(100vh - 72px);

  text-align: center;
  line-height: 30px;

  background: #fafafa;
  color: #313131;

  border: 1px solid grey;
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
    <View key={0}>
      <LogoWrapper>
        <Logo src={imageFromLocation(where)} alt="logo" />
        <Title>Strugeon Art Gallery</Title>
      </LogoWrapper>
      <Menu where={where} />
    </View>,
    <Back key={1} onClick={e => window.scrollTo(0, 0)}>⬆</Back>
  ]
}

const enhance = compose(withRouter)
export default enhance(AppMenu)
