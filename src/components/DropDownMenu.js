import React from 'react'
import styled from 'styled-components'
import { compose, withState } from 'recompact'

import Button from './Button'

const MenuContent = styled.div`
    position: absolute;
    min-width: 160px;
    

    display: flex; 
    flex-flow: column nowrap;

    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.5);
    z-index: 1;

    /* Mobile. */
    @media screen and (max-width: 664px) {
        width: 100%;
        left: 0px;
    }
`

const Menu = styled.div`

`

class DropDownMenu extends React.Component {

    render() {
        const props = this.props

        return <Menu onMouseLeave={e => props.setActive(false)}>
            <Button onClick={e => props.setActive(!props.active)}>Filters</Button>
            {props.active ? <MenuContent>
                {props.children || null}
            </MenuContent>
                : null}
        </Menu >
    }
}

const enhance = compose(withState('active', 'setActive', false))

export default enhance(DropDownMenu)