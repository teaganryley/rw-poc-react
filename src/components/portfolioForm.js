import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import PortfolioSelect from './portfolioSelect';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


const portfolioOptions = ['pension', 'endowment'];
const level1Options = ['equity', 'fixed income', 'cash'];
const level2Options = ['canada', 'us', 'eafe', 'em'];

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: 160
    },
  }));


const PortfolioForm = () => {
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

    return(
        <form onSubmit={handleSubmit}>
            <Grid container direction="column" justify="center" alignItems="center" spacing={1}>
                <Grid item xs={6}>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Portfolio</InputLabel>
                        <PortfolioSelect field="portfolio" options={portfolioOptions} value={formState.portfolio} onChange={handleSelect} />
                    </FormControl>
                </Grid>
                
                <Grid item xs={6}>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Level I</InputLabel>
                        <PortfolioSelect field="level1" options={level1Options} value={formState.level1} onChange={handleSelect} />
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Level II</InputLabel>
                        <PortfolioSelect field="level2" options={level2Options} value={formState.level2} onChange={handleSelect} />
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <TextField id="standard-basic" className={classes.formControl} label="Fund" value={formState.fund} onChange={handleTyping}/>
                </Grid>

                <Grid item xs={6}>
                    <Button className={classes.formControl} variant="contained" type="submit">Submit</Button>
                </Grid>
            </Grid>
        </form>    
    );
};

export default PortfolioForm;