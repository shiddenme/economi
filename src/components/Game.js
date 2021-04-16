import React from "react"

import styled from "styled-components"

import NoteRed from "./../assets/note_red.png"
import NoteGreen from "./../assets/note_green.png"
import NoteGold from "./../assets/note_gold.png"

const Container = styled.div`
  width: 90%;
  min-height: 90%;
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
  user-select: none;
  
  @media (max-width: 1250px) {
    width: 35%;
  }

  @media (max-width: 725px) {
    width: 50%;
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

const Game = () => {
  return (
    <Container>
      <A>
        <P>
          <Note src={NoteRed} />
          <Num>1,000</Num>
          <Supp>No. 1</Supp>
          <Own>0x7a2...0eF</Own>
        </P>
        <P>
          <Note src={NoteRed} />
          <Num>1,500</Num>
          <Supp>No. 2</Supp>
          <Own>0x7a2...0eF</Own>
        </P>
        <P>
          <Note src={NoteGreen} />
          <Num>10,000</Num>
          <Supp>No. 3</Supp>
          <Own>0x7a2...0eF</Own>
        </P>
        <P>
          <Note src={NoteGreen} />
          <Num>15,000</Num>
          <Supp>No. 4</Supp>
          <Own>0x7a2...0eF</Own>
        </P>
        <P>
          <Note src={NoteGold} />
          <Num>100,000</Num>
          <Supp>No. 5</Supp>
          <Own>0x7a2...0eF</Own>
        </P>
        <P>
          <Note src={NoteGold} />
          <Num>150,000</Num>
          <Supp>No. 6</Supp>
          <Own>0x7a2...0eF</Own>
        </P>
        <P>
          <Note src={NoteGold} />
          <Num>200,000</Num>
          <Supp>No. 7</Supp>
          <Own>0x7a2...0eF</Own>
        </P>
        <P>
          <Note src={NoteGold} />
          <Num>315,000</Num>
          <Supp>No. 8</Supp>
          <Own>0x7a2...0eF</Own>
        </P>
      </A>
    </Container>
  )
}

export default Game
