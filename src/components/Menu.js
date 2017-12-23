import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MenuRoot = styled.div`
  width: 200px;
  
  display: flex;
  justify-content: flex-end;

  border-bottom: 1px solid #f1f1f1;

  /* Mobile. */
  @media screen and (max-width: 664px) {
    position: absolute;
    top: 0;
    left: calc(100vw - 200px);
    height: 180px;
  }
`

const PageLinks = styled.div`
  /* Dimensions */
  height: 100%;
  width: ${props => props.open ? '140px' : '0'};

  padding: ${props => props.open ? '15px 15px' : '0'};

  overflow: hidden;

  /* Layout */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  /* Text */
  font-size: 0.8em;

  /* Color */
  border-left: 1px solid #f1f1f1;
  background: white;
`

const AnimatedPageLinks = PageLinks.extend`
    /* Animation */
    animation: ${props => props.open ? '.5s slide-in' : (props.once ? '.5s slide-out' : '')};

    @keyframes slide-in {
        from {
            width: 0px;
        }
        to {
            width: 140px;
        }
    }

    @keyframes slide-out {
        from {
            width: 140px;
        }
        to {
            width: 0px;
        }
    }
`

const PageLink = styled(Link) `
    /* Dimensions */
    margin: 8px;

    /* Text */
    text-decoration: none;
    font-size: 1.5em;
    font-weight: ${ props => (props.active === 'true' ? '700' : '500')};
    color: ${ props => (props.active !== 'true' ? '#d29374' : 'blue')};
`

const MenuButton = styled.button`
    height: 32px;
    width: 32px;

    padding: 0px;

    border: 1px solid grey;
    border-radius: 15%;

    background: transparent;

    /* Text */
    font-size: 24px;
    line-height: 36px;
`

const ButtonWrapper = styled.div`
    width: 40px;
    hegiht: 200px;
    background: white;
    padding: 4px;
`


class Menu extends React.Component {
    state = {
        open: false,
        // Set the ease-out animation only if the button was clicked once before..
        once: false
    }

    componentDidMount() {
        if (document.body.clientWidth > 662) {
            this.setState(prevState => ({ open: true }))
        }
    }

    renderLinks() {
        const { where } = this.props

        return [
            <PageLink key={0} to={'/peintures'} active={'' + (where === 'peintures')}>
                Peinture
            </PageLink>,
            <PageLink key={1} to={'/dessins'} active={'' + (where === 'dessins')}>
                Dessin
            </PageLink>,
            <PageLink key={2} to={'/sculptures'} active={'' + (where === 'sculptures')}>
                Sculpture
            </PageLink>,
            <PageLink key={3} to={'/qui'} active={'' + (where === 'qui')}>
                Contact
            </PageLink>
        ]
    }

    handleClick = (e) => {
        this.setState(prevState => ({ open: !prevState.open, once: true }))
    }

    render() {
        const Links = AnimatedPageLinks
        return (
            <MenuRoot className={this.props.className} open={this.state.open}>
                <Links open={this.state.open} once={this.state.once}>
                    {this.renderLinks()}
                </Links>
                <ButtonWrapper>
                    <MenuButton onClick={this.handleClick}>{this.state.open ? '-' : '+'}</MenuButton>
                </ButtonWrapper>
            </MenuRoot>
        )
    }
}

export default Menu