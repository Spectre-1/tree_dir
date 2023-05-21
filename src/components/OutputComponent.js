import React, { useState } from 'react';

const OutputComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submitted input value and generate the output
    const output = generateOutput(inputValue);
    setOutputValue(output);
    // Reset the input value
    setInputValue('');
  };

  const generateOutput = (input) => {
    // Implement your logic to generate the output based on the input
    // Example: You can manipulate the input string or perform calculations
    return `Output: ${input}`;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>{outputValue}</p>
    </div>
  );
};

export default OutputComponent;
