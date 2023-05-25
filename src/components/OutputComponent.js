
import React, { useState, useEffect } from 'react';

const generateOutput = (input) => {
  // Implement your logic to generate the output based on the input
  return `Output: ${input}`;
};

const OutputComponent = ({ inputValue }) => {
  const [outputValue, setOutputValue] = useState('');

  useEffect(() => {
    const output = generateOutput(inputValue);
    setOutputValue(output);
  }, [inputValue]);

  return (
    <div className="Output-container">
      <textarea
        className="input"
        value={outputValue}
        rows={10}
        readOnly
      ></textarea>
    </div>
  );
};

export default OutputComponent;
