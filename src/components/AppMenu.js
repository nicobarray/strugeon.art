// Libraries.
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { compose, lifecycle } from 'recompact'

import peintureLogo from '../res/peinture.jpg'
import dessinLogo from '../res/dessin.jpg'
import sculptureLogo from '../res/sculpture.jpg'
import quiLogo from '../res/qui.jpg'

const View = styled.div`
  /* Dimensions */
  height: 200px;

  padding: 16px 32px 16px;

  /* Layout */
  display: grid;
  grid-template-areas: 'Menu Title Logo';

  /* Background */
  background: #313131;

  /* Text */
  font-size: 1em;
  text-align: left;

  /* Mobile. */
  @media screen and (max-width: 664px) {
    /* Text */
    font-size: 0.7em;
    grid-template-areas:
      'Title Title'
      'Menu Logo';
    grid-row-gap: 15px;
  }
`

const PageLinks = styled.div`
  grid-area: Menu;

  display: flex;
  flex-flow: column nowrap;

  font-size: 0.8em;
`

const PageLink = styled(Link)`
  /* Dimensions */
  margin: 8px;

  /* Text */
  text-decoration: none;
  font-size: 1.5em;
  font-weight: ${props => (props.active == 'true' ? '700' : '500')};
  color: ${props => (props.active != 'true' ? '#d29374' : 'white')};
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
  grid-area: Title;

  font-size: 32px;

  color: #acbfb4;
  text-shadow: 0 0 10px #acbfb4;
  text-align: center;
  font-weight: 700;
  font-style: italic;

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

const imageFromLocation = location => {
  if (location === 'peintures') return peintureLogo
  if (location === 'dessins') return dessinLogo
  if (location === 'sculptures') return sculptureLogo
  return peintureLogo
}

const AppMenu = props => {
  const { location: { pathname } } = props
  const where = pathname.substr(1)
  return (
    <View>
      <Title>Terre & Couleur</Title>
      <PageLinks>
        <PageLink to={'/peintures'} active={'' + (where === 'peintures')}>
          Peinture
        </PageLink>
        <PageLink to={'/dessins'} active={'' + (where === 'dessins')}>
          Dessin
        </PageLink>
        <PageLink to={'/sculptures'} active={'' + (where === 'sculptures')}>
          Sculpture
        </PageLink>
        <PageLink to={'/qui'} active={'' + (where === 'qui')}>
          Qui?
        </PageLink>
      </PageLinks>
      <Logo src={imageFromLocation(where)} alt="logo" />
      <Back onClick={e => window.scrollTo(0, 0)}>⬆</Back>
    </View>
  )
}

const enhance = compose(withRouter)
export default withRouter(AppMenu)
