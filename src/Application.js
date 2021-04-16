// package imports
import React, { useState, useEffect } from "react"
import styled from "styled-components"

// components imports
import useApplicationData from "./hooks/useApplicationData"
import Navbar from "./components/Navbar"
import IconBar from "./components/IconBar"
import AppContainer from "./components/AppContainer"

// styles
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(270deg, #000, #88aa77 50%, #000 100%);

  @media (max-width: 1250px) {
    flex-direction: column;
  }
`

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100%;
`

const Application = () => {
  const { state, dispatch } = useApplicationData()
  const [active, setActive] = useState(0)
  const [width, setWidth] = useState(window.innerWidth)

  const handleResize = () => setWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return _ => {
      window.removeEventListener('resize', handleResize)
    }

  }, [])

  if (!state.account)
    return <div></div>

  return (
    <Container>
      { width > 1250 && (
          <>
            <IconBar active={active} setActive={setActive} />
            <Container2>
              <Navbar account={state.account} web3={state.web3} setAccount={state.setAccount} />
              <AppContainer state={state} active={active} />
            </Container2>
          </>
      )}
      { width <= 1250 && (
          <>
            <IconBar active={active} setActive={setActive} />
            <Navbar account={state.account} web3={state.web3} setAccount={state.setAccount} />
            <AppContainer state={state} active={active} />
          </>
      )}
    </Container>
  )
}

export default Application
