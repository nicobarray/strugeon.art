// Libraries.
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const View = styled.div`
    /* Dimensions */
    height: 200px;

    margin: auto;
    padding-top: 32px;
    padding-bottom: 32px;

    /* Layout */
    display: flex;
    justify-content: center;
    align-items: center;

    /* Background */
    background-color: #313131;
`

const PageLink = styled(Link) `
    /* Dimensions */
    margin: 8px;

    /* Text */
    text-decoration: none;
    font-size: 2em;
    color: white;

    :hover {
        text-decoration: underline;
    }
`

const AppMenu = props => <View>
    <PageLink to={'/paintings'}>Peintures</PageLink>
    <PageLink to={'/sculptures'}>Sculptures</PageLink>
</View>

export default AppMenu