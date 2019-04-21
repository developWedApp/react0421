import React, { Component, Fragment } from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import './App.css';


class App extends Component {

  render(){
    return(
      <Fragment>
         <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" >
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Button variant="contained" color="secondary">이것은 버튼입니다.</Button>
      </Fragment>

    )

  }
  
}


export default App;
