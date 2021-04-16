// package imports
import React, { useState, useEffect } from "react"
import styled from "styled-components"

// component imports
import Game from "./Game"
import Marketplace from "./Marketplace"

// styles
const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
 
  @media (max-width: 1250px) {
    order: 3;
    flex-direction: column;
  }
`

const Window = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  @media (max-width: 1250px) {
    flex-direction: column;
    height: 95%;
    width: 100%;
  }
`

const AppContainer = ({ state, active }) => {
  return (
    <Container>
      <Window>
        { active === 0 && <Game /> }
        { active === 1 && <Marketplace state={state} /> }
      </Window>
    </Container>
  )
}

export default AppContainer 
