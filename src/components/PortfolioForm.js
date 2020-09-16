import React, { useEffect, useState } from 'react';
import PortfolioSelect from './portfolioSelect';

const portfolioOptions = ['pension', 'endowment'];
const level1Options = ['equity', 'fixed income', 'cash'];
const level2Options = ['canada', 'us', 'eafe', 'em'];

const PortfolioForm = () => {
    const [formState, _setFormState] = useState({});
    const setFormState = fieldAndValue => _setFormState({...formState, ...fieldAndValue }); 
    const handleSelect = val => setFormState(val);

    return(
        <form>
            <div>
                <label>
                    Portfolio:
                    <PortfolioSelect field="portfolio" options={portfolioOptions} value={formState.portfolio} onChange={handleSelect }/>
                </label>
            </div>

            <div>
                <label>
                    Level I:
                    <PortfolioSelect field="level1" options={level1Options} value={formState.level1} onChange={handleSelect }/>
                </label>
            </div>

            <div>
                <label>
                    Level II:
                    <PortfolioSelect field="level2" options={level2Options} value={formState.level2} onChange={handleSelect }/>
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