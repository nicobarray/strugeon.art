// Libraries.
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const View = styled.div`
    /* Dimensions. */
    width: 300px;
    margin: auto;
    padding-top: 32px;

    /* Layout */
    display: flex;
    justify-content: space-around;
`

const PageLink = styled(Link) `
    /* Text */
    text-decoration: none;
    font-size: 1em;
    color: #313131;

    :hover {
        text-decoration: underline;
    }
`

const AppMenu = props => <View>
    <PageLink to={'/paintings'}>Peintures</PageLink>
    <PageLink to={'/sculptures'}>Sculptures</PageLink>
</View>

export default AppMenu