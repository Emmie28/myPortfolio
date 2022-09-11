import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';



const Header = () => {
    return(
    <div>
        <AppBar position='static'>
            <Toolbar>
                <IconButton edge='start' color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    
                </IconButton>
                <Typography variant='h5' style={{ alignContent: 'center'}}>
                    A Simple Currency Converter Using Rapid API
                </Typography>
            </Toolbar>
        </AppBar>
        
    </div>
    );
    

};

export default Header;