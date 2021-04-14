// package imports
import React from "react"
import styled from "styled-components"

// styles
const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
 
  @media (max-width: 1250px) {
    flex-direction: column;
  }
`

const IconBarContainer = styled.div`
  height: 100%;
  width: 5%;

  @media (max-width: 1250px) {
    flex-direction: column;
    height: 5%;
    width: 100%;
  }
`

const Window = styled.div`
  height: 100%;
  width: 70%;

  @media (max-width: 1250px) {
    flex-direction: column;
    height: 70%;
    width: 100%;
  }
`

const ChatContainer = styled.div`
  height: 100%;
  width: 25%;

  @media (max-width: 1250px) {
    flex-direction: column;
    height: 25%;
    width: 100%;
  }
`

const AppContainer = () => {
  return (
    <Container>
      <IconBarContainer>
      </IconBarContainer>
      <Window>
      </Window>
      <ChatContainer>
      </ChatContainer>
    </Container>
  )
}

export default AppContainer 
