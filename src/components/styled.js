import styled from 'styled-components'

export const View = styled.div`
    /* Dimensions */
    height: 100vh;

    /* Layout */
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`

export const Image = styled.img`
    /* Dimensions */
    max-width: 300px;
    max-height: ${props => props.height ? props.height + 'px' : 'auto'};

    /* Shadows */
    box-shadow: 0px 16px 32px #888888;
`