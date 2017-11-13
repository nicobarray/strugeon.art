import styled from 'styled-components'

const Button = styled.button`
    min-width: 100px;
    height: 32px;

    border: 0;
    color: white;

    font-size: 1.2em;

    background-color: #313181;
    :hover {
        background-color: #313141;
    }
    :disabled {
        background-color: #A1A1A1;
    }
`

export default Button