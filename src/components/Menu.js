import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MenuRoot = styled.div`
  width: 200px;

  display: flex;
  justify-content: flex-end;
`

const PageLinks = styled.div`
  /* Dimensions */
  height: 100%;
  //width: ${props => props.open ? '140px' : '0'};

  padding: ${props => props.open ? '15px 15px' : '0'};

  overflow: hidden;

  /* Layout */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  /* Text */
  font-size: 0.8em;

  /* Color */
  border-left: 1px solid #f1f1f1; //${props => props.open ? '1px solid #f1f1f1' : '0'};

  /* Animation */
    animation: ${props => props.open ? '.5s slide-in' : '.5s slide-out'};

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
  font-weight: ${props => (props.active === 'true' ? '700' : '500')};
  color: ${props => (props.active !== 'true' ? '#d29374' : 'blue')};
`

const MenuButton = styled.button`
  height: 32px;
  width: 32px;

  margin: 8px;
`

class Menu extends React.Component {
    state = {
        open: false,
        renderLinks: false,
        timeoutId: undefined
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.open && !prevState.open) {
            // Open transition.
            this.setState(prevState => ({ renderLinks: true }))
        } else if (!this.state.open && prevState.open) {
            // Closing transition.
            clearTimeout(this.state.timeoutId)
            let timeoutId = setTimeout(() => {
                this.setState(prevState => ({ renderLinks: false }))
            }, 500)
            this.setState(prevState => ({ timeoutId }))
        }
    }

    renderLinks() {
        const { where } = this.props

        if (!this.state.renderLinks) {
            return null
        }

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

    render() {
        return (
            <MenuRoot className={this.props.className} open={this.state.open}>
                <PageLinks open={this.state.open}>
                    {this.renderLinks()}
                </PageLinks>
                <MenuButton onClick={e => this.setState(prevState => ({ open: !prevState.open }))}>{this.state.open ? 'X' : 'O'}</MenuButton>
            </MenuRoot>
        )
    }
}

export default Menu