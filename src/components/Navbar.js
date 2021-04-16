import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    userSelect: 'none'
  },
  background: {
    background: 'linear-gradient(45deg, #44aa66 30%, #66996622 90%)'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    textAlign: 'center',
    fontSize: '3rem', 
    '@media (max-width: 725px)': {
      fontSize: '2rem'
    },
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  icon: {
    color: '#4f3',
    fontSize: '0.65rem'
  },
  iconDisabled: {
    color: '#0000',
    fontSize: '0.65rem'
  }
}))

const Navbar = ({ account, setAccount, web3 }) => {
  const classes = useStyles()
  const [state, setState] = React.useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open)
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )

  let formattedAddress
  if (account) 
    formattedAddress = account.slice(0,5) + '...' + account.slice(account.length - 5, account.length)

  return (
    <div className={classes.root}>
      <AppBar className={classes.background} position="static">
        <Toolbar>
          { account && (
            <>
              <FiberManualRecordIcon className={classes.iconDisabled} />
              <Button disabled={true} style={{"color":"#0000"}}>{ formattedAddress }</Button>
            </>
          )}
          <Typography variant="h3" className={classes.title}>
            ECONOMI
          </Typography>
          { account && (
            <>
              <FiberManualRecordIcon className={classes.icon} />
              <Button color="inherit">{ formattedAddress }</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
