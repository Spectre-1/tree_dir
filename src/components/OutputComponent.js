import React, { useState, useRef, useEffect } from 'react';
import '../tailwind.css';

const OutputComponent = ({ inputValue }) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef(null);
  const [outputValue, setOutputValue] = useState('');

  useEffect(() => {
    if (containerRef.current) {
      const { height } = containerRef.current.parentElement.getBoundingClientRect();
      setContainerHeight(height);
    }
  }, []);

  useEffect(() => {
    const output = generateOutput(inputValue);
    setOutputValue(output);
  }, [inputValue]);

  const generateOutput = (input) => {
    return `${input}`;
  };

  return (
    <div className="flex flex-col bg-gray-800 w-full md:w-1/2 border-2 border-green-400 mx-5 overflow-auto">
      <form className="flex flex-col h-full">
        <textarea
          className="flex-grow input text-3xl" // Increase the font size here
          value={outputValue}
          readOnly
        ></textarea>
      </form>
    </div>
  );
};

export default OutputComponent;
