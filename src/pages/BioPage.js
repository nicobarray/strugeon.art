import React from 'react'
import styled from 'styled-components'

const View = styled.div`
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`

const Description = styled.div`
  margin: 32px;

  font-size: 1em;

  text-align: justify;
  line-height: 1.6em;
`

const Email = styled.div`
  margin: 64px;

  font-size: 1.5em;
`

const Who = props => {
  return (
    <View>
      <Description>{props.description}</Description>
      <Email>{props.email}</Email>
    </View>
  )
}

export default Who
