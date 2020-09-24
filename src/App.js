import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import PortfolioSelect from './PortfolioSelect';
import { LibraryAdd } from '@material-ui/icons';


const portfolioOptions = ['pension', 'endowment'];
const level1Options = ['equity', 'fixed income', 'cash'];
const level2Options = ['canada', 'us', 'eafe', 'em'];

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {/*
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(16),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    marginTop: theme.spacing(6),
    //backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(2),
    width: 160
  },
  textField: {

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function App() {
  const [formState, _setFormState] = useState({
    portfolio: '',
    level1: '',
    level2: '',
    fund: '',
  });

  const setFormState = fieldAndValue => _setFormState({...formState, ...fieldAndValue }); 
  const handleSelect = val => setFormState(val);
  const handleTyping = ({ target }) => setFormState({ fund: target.value });
  const handleSubmit = () => {
    //proc alert that displays json object, for demo purposes
    console.log(formState);
  };
  
  const classes = useStyles();
  
  return (
    <Container component="main" maxWidth="xs">
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar>

      <Paper elevation={3} className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LibraryAdd />
        </Avatar>
        <Typography component="h1" variant="h5">
          Data submission
        </Typography>
        
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container 
            spacing={2}
            justify="center"
            direction="column"
            alignItems="center"
          >
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel>Portfolio</InputLabel>
                <PortfolioSelect
                  field="portfolio" 
                  options={portfolioOptions} 
                  value={formState.portfolio} 
                  onChange={handleSelect} 
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel>Level I</InputLabel>
                <PortfolioSelect 
                  field="level1" 
                  options={level1Options} 
                  value={formState.level1} 
                  onChange={handleSelect} 
                />
              </FormControl>
            </Grid>
              <FormControl className={classes.formControl}>
                <InputLabel>Level II</InputLabel>
                <PortfolioSelect 
                  field="level2"
                  options={level2Options}
                  value={formState.level2}
                  onChange={handleSelect} 
                />
              </FormControl>
            <Grid item xs={12} sm={6}>
              <TextField 
                variant="outlined"
                required
                label="Fund" 
                value={formState.fund} 
                onChange={handleTyping}
                className={classes.textField}
              />
            </Grid>
          </Grid>
          <Button 
            variant="contained" 
            type="submit"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </Paper>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

/*
TODO: 
  -TextField spacing and style
  -replace div with Paper
  -Style Paper a bit nicer
  -Investigate FormControl usage wrt Select elements
  -avatar
*/