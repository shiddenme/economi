import React, { useState, useEffect, Fragment } from "react"

import styled from "styled-components"

import NoteWhite from "./../assets/note_white.png"
import NoteRed from "./../assets/note_red.png"
import NoteGreen from "./../assets/note_green.png"
import NoteGold from "./../assets/note_gold.png"

const Container = styled.div`
  width: 90%;
  min-height: 90%;
  user-select: none;
`

const Title = styled.h1`
  color: #fff;
  text-align: center;
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
  font-size: 1.75rem;

  @media (max-width: 1250px) {
    font-size: 1.5rem;
  }
`

const Supp = styled.div`
  padding: 2%;
  position: absolute;
  color: #fff;
  left: 0;
  bottom: 0;
  font-size: 1.20rem;

  @media (max-width: 1250px) {
    font-size: 0.85rem;
  }
`

const NoteData = styled.div`
  position: absolute;
  background: #4445;
  color: #000;
`

const Own = styled.div`
  padding: 2%;
  position: absolute;
  color: #fff;
  right: 0;
  bottom: 0;
  font-size: 1.00rem;
  font-style: italic;

  @media (max-width: 1250px) {
    font-size: 0.70rem;
  }
`

const Marketplace = ({ state }) => {
  const [hover, setHover] = useState(null)

  useEffect(() => {
    const hover = {}

    if (!state.mintableNotes)
      return

    for (let i=0; i < state.mintableNotes.length; i++) {
      hover[i] = false
    }

    setHover(hover)
  }, [])

  if (!hover || !state)
    return <div></div>

  const handleHover = (id, bool) => setHover(prev => ({...prev, [id]: bool}))
  
  return (
    <Container>
      <Title>Marketplace</Title>
      <A>
        { state.mintableNotes.map((note, idx) => {
          return (
            <Fragment key={idx}>
            { !hover[idx] && ( 
              <P onMouseEnter={() => handleHover(idx, true)} onMouseLeave={() => handleHover(idx, false)}>
                <Note src={NoteRed} />
                <Num>{ note.value }</Num>
              </P>
            )}
            { hover[idx] && (
              <P onMouseEnter={() => handleHover(idx, true)} onMouseLeave={() => handleHover(idx, false)}>
                <Note src={NoteWhite} />
                <NoteData>
                  { state.noteSupply[note.value] }
                </NoteData>
              </P>
            )}
            </Fragment>
          )
        })}
      </A>
    </Container>
  )
}

export default Marketplace 
