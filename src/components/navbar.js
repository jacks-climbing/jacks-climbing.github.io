import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faCampground, faClipboard, faListUl, faSmile, faDirections, faQuestionCircle, faHome } from '@fortawesome/free-solid-svg-icons'
import { HashLink as Link } from 'react-router-hash-link';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
     <List>
          {['Home', 'About', 'Sign Up', 'Comp Rules', 'Route List', 'Directions', 'Camping Info', 'Sponsors'].map((text, index) => (
            <Link smooth to={"/#" + text.toLowerCase().replace(/\s/g, "_")}
                    style={{
                      textDecoration:"none",
                      color: 'black' }} 
                    >
            <ListItem button key={text} id={index}>  
            <ListItemIcon>{ index === 0 ? <FontAwesomeIcon icon={faHome}                      size="2x" aria-labelledby={"#" + index} /> :
                          index === 1 ? <FontAwesomeIcon icon={faQuestionCircle}      size="2x" aria-labelledby={"#" + index} /> :
                          index === 2 ? <FontAwesomeIcon icon={faSignInAlt} size="2x" aria-labelledby={"#" + index} /> : 
                          index === 3 ? <FontAwesomeIcon icon={faClipboard} size="2x" aria-labelledby={"#" + index}/> : 
                          index === 4 ? <FontAwesomeIcon icon={faListUl} size="2x" aria-labelledby={"#" + index}/> :
                          index === 5 ? <FontAwesomeIcon icon={faDirections} size="2x" aria-labelledby={"#" + index}/> :
                          index === 6 ? <FontAwesomeIcon icon={faCampground} size="2x" aria-labelledby={"#" + index}/> :
                          index === 7 ? <FontAwesomeIcon icon={faSmile} size="2x" aria-labelledby={"#" + index}/> :
                          null}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            </Link>
          ))}
      </List>
    </div>
  );

  return (
    <div>
      <CssBaseline />
      <Button onClick={toggleDrawer('left', true)}>Open Left</Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          //eslint-disable-next-line
          [classes.appBarShift]: open
        })}
      >
      <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={toggleDrawer('left', true)}
            edge="start"
            //eslint-disable-next-line
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          //eslint-disable-next-line
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />  
      </main>
    </div>
  );
}