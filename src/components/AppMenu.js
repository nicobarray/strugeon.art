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

const imageFromLocation = where => {
  if (where === 'peintures') return peintureLogo
  if (where === 'dessins') return dessinLogo
  if (where === 'sculptures') return sculptureLogo
  if (where === 'qui') return quiLogo
  return peintureLogo
}

const AppMenu = props => {
  const {
    location: { pathname }
  } = props
  const where = pathname.substr(1)
  return (
    <View>
      <LogoWrapper>
        <Logo src={imageFromLocation(where)} alt="logo" />
        <Title>Strugeon Art Gallery</Title>
      </LogoWrapper>
      <Menu where={where} />
    </View>
  )
}

const enhance = compose(withRouter)
export default enhance(AppMenu)
