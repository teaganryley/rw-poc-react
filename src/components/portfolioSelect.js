import React from 'react';
import PropTypes from 'prop-types';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';


const PortfolioSelect = ({ options = [], field, value, onChange }) => {
   const handleChange = ({ target }) => onChange ? onChange({ [field]: target.value }): null;
    return (
        <Select value={value} onChange={handleChange} className="portfolio-select">
            {options.map(item => 
                <MenuItem value={item} key={`field_${item.toString()}`}>
                    {item}
                </MenuItem>
            )}
        </Select>
    );
};

PortfolioSelect.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    field: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired
};

export default PortfolioSelect;
