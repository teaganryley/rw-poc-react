import React, { useState } from 'react';

const PortfolioSelect = (props) => {
    const itemList = props.options;
    const [value, setValue] = useState(itemList[0]);

    return (
        <select value={value} onChange={(e)=>setValue(e.target.value)}>
            {itemList.map((item) => 
                <option value={item} key={item.toString()}>
                    {   //change to some sort of string literal support
                    item.charAt(0).toUpperCase() + item.slice(1)}
                </option>
            )}
        </select>
    );
};

export default PortfolioSelect;