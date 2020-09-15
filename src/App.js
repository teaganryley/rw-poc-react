import React from 'react';

const Select = (props) => {
  const options = props.options;
  const optionList = options.map((element) => 
    <option value={element} key={element.toString()}>{element}</option>
  );

  return (
    <div>
      <label>{props.name}:</label>
      <select>
        {optionList}
      </select>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Select name="Portfolio" options={["Pension", "Endowment"]}></Select>
      <Select name="Level1" options={["Equity", "Fixed Income", "Cash"]}></Select>
      <Select name="Level2" options={["Canada", "US", "EAFE", "EM"]}></Select>
    </div>
  );
}

export default App;
