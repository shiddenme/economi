// package imports
import React, { useState, useEffect } from "react"
import styled from "styled-components"

// component imports
import IconBar from "./IconBar"
import Game from "./Game"

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
  display: flex;
  align-items: center;
  width: 5%;
  height: 100%;
  background: linear-gradient(45deg, #66996622 30%, #44aa66 90%);

  @media (max-width: 1250px) {
    padding-top: 10px;
    padding-bottom: 10px;
    flex-direction: column;
    height: 5%;
    width: 100%;
  }
`

const Window = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 95%;

  @media (max-width: 1250px) {
    flex-direction: column;
    height: 95%;
    width: 100%;
  }
`

const AppContainer = () => {
  const [active, setActive] = useState(null)

  useEffect(() => setActive(3), [])

  return (
    <Container>
      <IconBarContainer>
        <IconBar active={active} setActive={setActive} />
      </IconBarContainer>
      <Window>
        { active === 0 && <Game /> }
      </Window>
    </Container>
  )
}

export default AppContainer 
