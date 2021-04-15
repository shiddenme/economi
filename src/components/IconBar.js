// package imports
import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

// icons
import SportsEsportsIcon from "@material-ui/icons/SportsEsports"
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet"
import LoyaltyIcon from "@material-ui/icons/Loyalty"
import MusicNoteIcon from "@material-ui/icons/MusicNote"
import MusicOffIcon from "@material-ui/icons/MusicOff"
import StorageIcon from "@material-ui/icons/Storage"
import InfoIcon from "@material-ui/icons/Info"
import GroupIcon from "@material-ui/icons/Group"
import HelpIcon from "@material-ui/icons/Help"
import ChatIcon from "@material-ui/icons/Chat"

// styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
 
  @media (max-width: 1250px) {
    flex-direction: row;
  }
`

const useStyles = makeStyles({
  icon: {
    width: '4rem',
    height: '5rem',
    color: '#000',
    padding: '2%',
    '@media (max-width: 1250px)': {
      width: '3rem',
      height: '4rem',
    },
    '@media (max-width: 725px)': {
      width: '2rem',
      height: '3rem',
    },
    '&:hover': {
      color: '#464'
    }
  },
  focused: {
    color: '#fff'
  }
})

const IconBar = ({ active, setActive }) => {
  const classes = useStyles()

  const handleClick = value => setActive(value)

  return (
    <Container>
      <SportsEsportsIcon 
        className={active === 0 ? `${classes.focused} ${classes.icon}`: classes.icon}
        onClick={() => handleClick(0)} 
      />
      <LoyaltyIcon
        className={active === 1 ? `${classes.focused} ${classes.icon}`: classes.icon}
        onClick={() => handleClick(1)}
      />
      <StorageIcon
        className={active === 2 ? `${classes.focused} ${classes.icon}`: classes.icon}
        onClick={() => handleClick(2)}
      />
      <AccountBalanceWalletIcon
        className={active === 3 ? `${classes.focused} ${classes.icon}`: classes.icon}
        onClick={() => handleClick(3)}
      />
      <ChatIcon
        className={active === 4 ? `${classes.focused} ${classes.icon}`: classes.icon}
        onClick={() => handleClick(4)}
      />
      <InfoIcon
        className={active === 5 ? `${classes.focused} ${classes.icon}`: classes.icon}
        onClick={() => handleClick(5)}
      />
      <GroupIcon
        className={active === 6 ? `${classes.focused} ${classes.icon}`: classes.icon}
        onClick={() => handleClick(6)}
      />
      <MusicNoteIcon
        className={active === 7 ? `${classes.focused} ${classes.icon}`: classes.icon}
        onClick={() => handleClick(7)}
      />
      <HelpIcon
        className={active === 8 ? `${classes.focused} ${classes.icon}`: classes.icon}
        onClick={() => handleClick(8)}
      />
    </Container>
  )
}

export default IconBar 
