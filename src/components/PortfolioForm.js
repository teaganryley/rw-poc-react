import React, { useEffect, useState } from 'react';
import PortfolioSelect from './portfolioSelect';

const PortfolioForm = () => {
    /*
    // set state here

    useEffect(() => {
        //debug
        alert("you clicked");

        //api call
    },[]); */
    
    const p = ['pension', 'endowment'];
    const l1 = ['equity', 'fixed income', 'cash'];
    const l2 = ['canada', 'us', 'eafe', 'em'];

    const [portfolio, setPortfolio] = useState();
    const [level1, setLevel1] = useState();
    const [level2, setLevel2] = useState();
    const [fund, setFund] = useState();

    return(
        <form>
            <div>
                <label>
                    Portfolio:
                    <PortfolioSelect name="portfolio" options={p}/>
                </label>
            </div>

            <div>
                <label>
                    Level I:
                    <PortfolioSelect name="level1" options={l1}/>
                </label>
            </div>

            <div>
                <label>
                    Level II:
                    <PortfolioSelect name="level2" options={l2}/>
                </label>
            </div>

            <div>
                <label>
                    Fund:
                    <input type="text" name="fund" />
                </label>
            </div>

            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
    );
};

export default PortfolioForm;