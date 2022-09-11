import React from 'react';
import { Checkbox,Grid,TextField,FormControlLabel,Paper,Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    div:{
        minWidth: '20%',
        padding: '5px',
        marginLeft: 'auto',
        border: '1px solid black',
    }
});

const Login = () => {
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loginForm, setLoginForm] = React.useState([]);

    const handleChange = (e) =>{
        const value = e.target.name;
        if(value === 'PassWord')
            setPassword(e.target.value);
        else
            setUserName(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(userName,password);
        setLoginForm(values => ({...values, ['userName']: userName })); 
        setLoginForm(values => ({...values, ['password']: password })); 
        console.log(loginForm);
    }  

    return (
    <div style={{ padding: 30, width: 600}}>
      <Paper style={{ padding: 30, width: 600}}>
        <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <TextField onChange={handleChange} label="Username" fullWidth name='Username'></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField onChange = {handleChange} label="Password" type={'password'} name='PassWord' fullWidth></TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  label={'Keep me logged in'}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              }
              label="Keep me logged in"
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth onClick={handleSubmit}> Login </Button>
          </Grid>
        </Grid>
        </form>
      </Paper>
    </div>

    )
}

export default Login; 