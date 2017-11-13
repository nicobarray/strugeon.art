import React from 'react'
import styled from 'styled-components'
import { compose, withState } from 'recompact'

import Button from './Button'

const Menu = styled.div`
`

const MenuContent = styled.div`
    position: absolute;
    min-width: 160px;
    display: flex;
    flex-flow: column nowrap;

    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`

class DropDownMenu extends React.Component {
    content = null

    render() {
        const props = this.props

        return <Menu>
            <Button onClick={e => props.setActive(!props.active)}>Filters</Button>
            {
                props.active
                    ? <MenuContent ref={(elt) => this.content = elt}>
                        {props.children || null}
                    </MenuContent>
                    : null
            }
        </Menu >
    }
}

const enhance = compose(withState('active', 'setActive', false))

export default enhance(DropDownMenu)