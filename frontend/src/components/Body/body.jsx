import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Card, CardContent} from '@material-ui/core';
import background from './static/img/backgroundImage.jpg';
import calculator from './static/img/calculator.png';
import counter from './static/img/counter.png';
import currency from './static/img/currency.png';
import ToDo from './static/img/toDo.png';
import tictactoe from './static/img/tictactoe.png';
import calc from './static/img/calc.png';

import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      maxWidth: 350,
      height: 250,
      margin: '20px',
      padding: '2px',
      display: 'inline-block',
      color: 'white',
      backgroundColor: '#1F2124',
      '&:hover': {
        backgroundColor: "#383A3F",
        transform: "scale3d(1.2, 1.2, 1)",
        transition: "transform 0.5s ease-in-out",
        
        
     }, 
    }});

const Body = () =>{
    const classes = useStyles();
    return(
        <div>
        <h1>My Portfolio</h1>
        <Link to='/Calculator'>
        <Card className={classes.root}>

            <CardContent >
                <img style={{ paddingBottom: 5, width: 300, height: 150 }} src={calculator}></img>
                <Typography >
                    <div>Simple Calculator in React. This calculator does not allow complex computation.</div>
                </Typography>
            </CardContent>

        </Card>
        </Link>
        <Link to='/CountDown'>
        <Card className={classes.root}>

            <CardContent >
            <img style={{ paddingBottom: 5, width: 300, height: 150 }} src={counter}></img>
                <Typography >
                    <div>Count down timer program</div>
                </Typography>
            </CardContent>
            
        </Card>
        </Link>
        <Link to='/ToDoList'>
        
        <Card className={classes.root}>
        <img style={{ paddingBottom: 5, width: 300, height: 150 }} src={ToDo}></img>
            <CardContent >
                <Typography >
                    <div>To do list</div>
                </Typography>
            </CardContent>
            
        </Card>
        </Link>
        <Link to='/Currency'>
        
        <Card className={classes.root}>
        <img style={{ paddingBottom: 5, width: 300, height: 150 }} src={currency}></img>
            <CardContent >
                <Typography >
                    <div>Currency converter program</div>
                </Typography>
            </CardContent>
            
        </Card>
        </Link>
        <Card className={classes.root}>
        <img style={{ paddingBottom: 5, width: 300, height: 150 }} src={calc}></img>
            <CardContent >
                <Typography >
                    <div>Calculator Program in JavaScript</div>
                </Typography>
            </CardContent>
            
        </Card>

        <Card className={classes.root}>
        <img style={{ paddingBottom: 5, width: 300, height: 150 }} src={tictactoe}></img>
            <CardContent >
                <Typography >
                    <div>TicTacToe in JavaScript</div>
                </Typography>
            </CardContent>
            
        </Card>
        <Card className={classes.root}>

            <CardContent >
                <Typography >
                    <div>This is main part of the program</div>
                </Typography>
            </CardContent>
            
        </Card>
        
        
        </div>
    )
};

export default Body;