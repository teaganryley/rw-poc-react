import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { LibraryAdd } from '@material-ui/icons';
import PortfolioSelect from './components/PortfolioSelect';
import useObjectState from './hooks/useObjectState';

const portfolioOptions = ['pension', 'endowment'];
const level1Options = ['equity', 'fixed income', 'cash'];
const level2Options = ['canada', 'us', 'eafe', 'em'];

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(15),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    marginTop: theme.spacing(2),
    //backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    margin: theme.spacing(1),
  },
  formControl: {
    width: '200px',
    margin: theme.spacing(1),
  },
  textField: {
    width: '200px',
    margin: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
}));

export default function App() {
  const [formState, setFormState] = useObjectState({
    portfolio: '',
    level1: '',
    level2: '',
    fund: '',
  });

  const handleSelect = val => setFormState(val);
  const handleTyping = ({ target }) => setFormState({ fund: target.value });
  const handleSubmit = (e) => {
    window.alert(JSON.stringify({
      portfolio: formState.portfolio,
      level1: formState.level1,
      level2: formState.level2,
      fund: formState.fund,
    }));
    e.preventDefault();
  };
  
  const classes = useStyles();
  
  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
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
            spacing={1}
            justify="center"
            direction="column"
            alignItems="center"
          >
            
            <Grid item>
              <FormControl variant="outlined" className={classes.formControl}>
                <PortfolioSelect
                  field="portfolio" 
                  options={portfolioOptions} 
                  value={formState.portfolio} 
                  label="Portfolio"
                  onChange={handleSelect}
                />
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl variant="outlined" className={classes.formControl}>
                <PortfolioSelect 
                  field="level1" 
                  options={level1Options} 
                  value={formState.level1}
                  label="Level I" 
                  onChange={handleSelect}
                />
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl variant="outlined" className={classes.formControl}>
                <PortfolioSelect 
                  field="level2"
                  options={level2Options}
                  value={formState.level2}
                  label="Level II"
                  onChange={handleSelect} 
                />
              </FormControl>
            </Grid>

            <Grid item>
              <TextField 
                variant="outlined"
                required
                label="Fund" 
                value={formState.fund} 
                onChange={handleTyping}
                className={classes.textField}
              />
            </Grid>

            <Grid item>
              <Button 
                variant="contained" 
                type="submit"
                color="primary"
                className={classes.submit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}