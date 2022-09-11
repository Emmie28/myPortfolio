import { Paper, Input, TextField, Button, InputLabel, Grid} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import {makeStyles} from '@material-ui/core/styles';
import * as  React from 'react';

const useStyles = makeStyles((theme) =>({
    
    container:{
        padding: theme.spacing(2),
        margin:'auto',
        marginTop: '40px',
        width:'40%',
        height: '20%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#ffffff',

    },

    button:{

        margin: '0 auto',
        display: 'block',
        
    }
}))



const Body = ({currency, convertCurrency, options2, isLoading, setIsloading}) => {
    const classes = useStyles();
    const opt = [];
    currency !== undefined && Object.entries(currency).map(([key,value]) =>{
        opt.push(key);
    })
    const [from, setFrom] = React.useState('');
    const [to, setTo] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [result, setResult] = React.useState('');
    const [rate, setRate] = React.useState('');

    const handleChange = (e, value) =>{
        
        // Get the ID of the event listener.
        const check = e.target.id.split('');
        
        if(check[0] === '0')
            setFrom(value);
        else if(check[0] === '1')
            setTo(value);
        else if(e.target.name === 'amt')
            setAmount(e.target.value);
        else
            setRate(e.target.value);
    };

    const handleClick = () =>{
        setIsloading(true);
        // Set the parameters for the currency to be converted.
        options2.params.from = from;
        options2.params.to = to;
        options2.params.amount = amount;
        

        convertCurrency()
            .then((data) => {
                Object.entries(data).map(([key,value]) =>{
                    setResult(value.rate_for_amount);
                    setRate(value.rate);
                    setIsloading(false);
                })
                
            });
        
    }

    return(
    <Paper className={classes.container}>
    
        <Grid container spacing={3} >

        <Grid xs={6}>
            <Autocomplete
                disablePortal
                id='0'
                options={opt}
                style={{ padding: 20}}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} label='From' />}  
            />  
            </Grid>
            <br></br>
            <Grid xs={6}>

           
            <Autocomplete
                disablePortal
                id='1'
                options={opt}
                style={{ padding: 20 }}
                onChange = {handleChange}
                renderInput={(params) => <TextField {...params} label='To' />}  
            /> </Grid>
            
            <Grid xs={6}>
            <Input 
                type='text' 
                placeholder='Amount' 
                name='amt' 
                onChange={handleChange} 
                style={{ marginLeft: 20}}>

            </Input>
            </Grid>

            <Grid xs={6}>
            <TextField 
                name='rate' 
                placeholder='Rate'
                value={rate + ' ' + to + ' to 1 ' + from} 
                style={{ marginLeft: 20}}>
            </TextField>
            </Grid>
            
            <Grid xs={12}>
            <TextField name='result' 
                placeholder={'amt in ' + to}
                value={result} 
                style={{ marginLeft: 20, paddingTop: 20, marginBottom: 20}}>
            </TextField>
            </Grid>
            <Grid xs={12}>
                <Button 
                    className={classes.button}
                    onClick={handleClick} 
                    variant="contained" 
                    color="primary">Convert
                    
                </Button>  
            </Grid>
            
        </Grid>
        
    </Paper>
    );
    

};

export default Body;