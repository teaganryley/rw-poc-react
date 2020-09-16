import React from 'react';
import PortfolioForm from './components/PortfolioForm';

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
      <PortfolioForm></PortfolioForm>
    </div>
  );
}

export default App;
