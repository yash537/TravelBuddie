import React from 'react'
import {Autocomplete} from '@react-google-maps/api'
import {AppBar,Typography,Toolbar,InputBase,Box,makeStyles} from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search";

import useStyles from './style.js'

const Header = () => {
    const classes=useStyles();


  return (
    <AppBar position="static">
        <Toolbar className={classes.toolbar}>
            <Typography variant="h4" classsName={classes.title}>
                Travel Buddie
            </Typography>
            <Box display="flex">
                <Typography variant="h6" className={classes.title}>
                    Explore new Places with your Buddie!.
                </Typography>
                {/* <Autocomplete> */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase placeholder="Serach ..." classes={{root:classes.inputRoot,input:classes.inputInput}}/>
                    </div>
                {/* </Autocomplete> */}

            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header