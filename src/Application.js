// package imports
import React from "react"
import styled from "styled-components"

// components imports
import useApplicationData from "./hooks/useApplicationData"
import Navbar from "./components/Navbar"
import AppContainer from "./components/AppContainer"

// styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(270deg, #000, #88aa77 50%, #000 100%);
`

const Application = () => {
  const { state, dispatch } = useApplicationData()

  if (!state)
    return <div></div>

  return (
    <Container>
      <Navbar account={state.account} web3={state.web3} setAccount={state.setAccount} />
      <AppContainer state={state} />
    </Container>
  )
}

export default Application
