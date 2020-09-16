import React, { useState } from 'react';

const PortfolioSelect = ({ options = [], field, value, onChange }) => {
   const handleChange = ({ target }) => onChange ? onChange({ [field]: target.value }): null;
    return (
        <select value={value} onChange={handleChange} className="portfolio-select">
            {options.map(item => 
                <option value={item} key={`field_${item.toString()}`}>
                    {item}
                </option>
            )}
        </select>
    );
};

export default PortfolioSelect;