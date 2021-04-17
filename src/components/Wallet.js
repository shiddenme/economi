import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  user-select: none;
`

const Title = styled.h1`
  width: 100%;
  color: #fff;
  text-align: center;
  text-shadow: 1px 1px #000;
`

const Table = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid #000;
  border-right: none;
`

const Entry = styled.div`
  flex-basis: 33.33333%;
  text-align: center;
  border-right: 1px solid #000;
  background: ${props => props.color};
`

const Summary = styled.div`
  flex-basis: 33.33333%;
  text-align: center;
  color: #eee;
  background: ${props => props.color};
  border-right: 1px solid #000;
  font-weight: bold;
  padding: 0.5%;
`

const Header = styled.div`
  background: ${props => props.color};
  padding: 1%;
  flex-basis: 33.33333%;
  text-align: center;
  font-weight: bold;
  border-right: 1px solid #000;
`

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
    padding: '2%',
    background: '#0002',
    '@media (max-width: 1250px)': {
      width: '75%'
    },
    '@media (max-width: 725px)': {
      width: '90%'
    }
  }
})

const Wallet = ({ notes }) => {
  const classes = useStyles()

  const formatter = new Intl.NumberFormat()

  const total = notes.map(note => Number(note.value)).reduce((x, y) => x + y, 0)
  const totalForSale = notes.filter(note => note.forSale)

  return (
    <Container>
      <Title>Wallet</Title>
      <Card className={classes.root}>
        <Table>
          <Header color="#4a4">Note Value</Header>
          <Header color="#696">Note Id</Header>
          <Header color="#5b5">Sale Status</Header>
        </Table>
        { notes.map(note => {
          let color, grain, sale

          if (note.value <= 9999) {
            grain = Math.ceil(note.value / 1000)
            color = "#8C7853" + (4 + grain) + (4 + grain)
          } else if (note.value <= 99999) {
            grain = Math.ceil(note.value / 10000)
            color = "#E6E8FA" + (4 + grain) + (4 + grain)
          } else if (note.value <= 999999) {
            grain = Math.ceil(note.value / 100000)
            color = "#CD7F32" + (4 + grain) + (4 + grain)
          } else {
            color = "#B9F2FFe"
          }

          if (note.forSale)
            sale = "#4f49"
          else 
            sale = "#f449"

          return (
            <Table>
              <Entry color={color}>{formatter.format(note.value)}</Entry>
              <Entry color="#ddd">{note.id}</Entry>
              <Entry color={sale}>{note.forSale ? "For Sale" : "Not For Sale"}</Entry>
            </Table>
          )
        })}
        <Table>
          <Summary color="#222a">{ formatter.format(total) }</Summary>
          <Summary color="#111a">{ notes.length} Notes</Summary>
          <Summary color="#333a">{ totalForSale.length } Notes For Sale</Summary>
        </Table>
      </Card>
    </Container>
  )
}

export default Wallet
