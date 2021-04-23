import React, { useState, useEffect, Fragment } from "react"

import styled from "styled-components"
import { Button, withStyles, createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core"
import { green, purple } from "@material-ui/core/colors"

import MoneyIcon from "@material-ui/icons/Money"

import NoteWhite from "./../assets/note_white.png"
import NoteBronze from "./../assets/note_bronze.png"
import NoteSilver from "./../assets/note_silver.png"
import NoteGold from "./../assets/note_gold.png"

const Container = styled.div`
  width: 90%;
  min-height: 90%;
  user-select: none;
`

const Title = styled.h1`
  color: #fff;
  text-align: center;
  text-shadow: 1px 1px #000;
`

const Note = styled.img`
  width: 100%;
`

const A = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const P = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 25%;
  margin: 2%;
  
  @media (max-width: 1250px) {
    width: 45%;
  }

  @media (max-width: 725px) {
    width: 55%;
  }
`

const Num = styled.div`
  position: absolute;
  color: #fff;
  font-weight: bold;
  font-size: 2rem;
`

const NoteData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #0f03;
  position: absolute;
  color: #000;
  width: 100%;
  height: 100%;
`
const muiTheme = createMuiTheme({ palette: { primary: green, secondary: purple } })

const ButtonColored = withStyles((theme) => ({
  root: {
    width: '50%',
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: green[400],
    '&:hover': {
      backgroundColor: green[500],
    },
  }
}))(Button)

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  }
}))


const Marketplace = ({ state }) => {
  const [hover, setHover] = useState({})
  const [minting, setMinting] = useState({})

  const classes = useStyles()

  useEffect(() => {
    const hover = {}
    const minting = {}

    if (!state.mintableNotes)
      return

    for (let i=0; i < state.mintableNotes.length; i++) {
      hover[i] = false
      minting[i] = false
    }

    setHover(hover)

    return () => {}
  }, [])

  const handleHover = (id, bool) => setHover(prev => ({...prev, [id]: bool}))

  const handleMint = async (id, value) => {
    let price = await state.contract.methods.basicNote(value).call()

    await state.contract.methods.mintNote(value).send({ from: state.account, value: price }, () => {
      setMinting(prev => ({ ...prev, [id]: true }))
    })
      .on('receipt', () => setMinting(prev => ({ ...prev, [id]: false })))
      .on('error', () => console.log("error"))
  }

  const formatter = new Intl.NumberFormat()

  return (
    <Container>
      <Title>Marketplace</Title>
      <A>
        { state.mintableNotes && state.mintableNotes.map((note, idx) => {
          return (
            <P key={idx} onMouseEnter={() => handleHover(idx, true)} onMouseLeave={() => handleHover(idx, false)}>
            { (!hover[idx] && !minting[idx]) && ( 
              <>
                { note.value < 10000 && <Note src={NoteBronze} /> }
                { note.value >= 10000 && note.value < 100000 && <Note src={NoteSilver} /> }
                { note.value >= 100000 && note.value < 1000000 && <Note src={NoteGold} /> }
                <Num>{ formatter.format(note.value) }</Num>
              </>
            )}
            { (hover[idx] || minting[idx]) && (
              <>
                <Note src={NoteWhite} />
                <NoteData>
                  Note Value: { formatter.format(note.value) } <br />
                  Circulating Supply: { state.noteSupply[note.value] } <br />
                  Minting Price: { state.mintableNotes[idx].price } ETH
                  <ThemeProvider theme={muiTheme}>
                    <ButtonColored onClick={() => handleMint(idx, note.value)}className={classes.margin} variant="contained" endIcon={<MoneyIcon />}>
                    { !minting[idx] && <span>Mint</span> }
                    { minting[idx] && <span>Minting...</span> }
                    </ButtonColored>
                  </ThemeProvider>
                </NoteData>
              </>
            )}
            </P>
          )
        })}
        { !state.mintableNotes && <div>Loading Data...</div> }
      </A>
    </Container>
  )
}

export default Marketplace 
