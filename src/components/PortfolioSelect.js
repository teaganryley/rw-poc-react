import React from "react";
import PropTypes from "prop-types";
import { Select } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const PortfolioSelect = ({ options = [], field, value, label, onChange = () => null }) => {
  const handleChange = ({ target }) => onChange({ [field]: target.value });

  return (
    <React.Fragment>
      <InputLabel>{label}</InputLabel>
      <Select 
        value={value} 
        onChange={handleChange} 
        className="portfolio-select"
        label={label}
      >
        {options.map((item) => (
          <MenuItem value={item} key={`field_${item.toString()}`}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </React.Fragment>
  );
};

PortfolioSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  field: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default PortfolioSelect;