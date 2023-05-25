
import React, { useState, useEffect } from 'react';

const generateOutput = (input) => {
  return `Output: ${input}`;
};

const OutputComponent = ({ inputValue }) => {
  const [outputValue, setOutputValue] = useState('');

  useEffect(() => {
    const output = generateOutput(inputValue);
    setOutputValue(output);
  }, [inputValue]);

  return (
    <div className="flex flex-col h-full w-1/2 bg-gray-800 border-2 border-green-400 m-2">
      <form className="flex flex-col h-full">
        <textarea
          className="flex-grow input"
          value={inputValue}
          placeholder={`Edit me to generate a tree!\n\u0009Use tab to indent!`}
        ></textarea>
        <button className="mt-4 notepad-button" type="submit">Save</button>
      </form>
    </div>
  );
};

export default OutputComponent;
