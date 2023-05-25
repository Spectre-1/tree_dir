import React, { useState, useRef, useEffect } from 'react';
import '../tailwind.css';

const InputComponent = ({ inputValue, setInputValue }) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const { height } = containerRef.current.parentElement.getBoundingClientRect();
      setContainerHeight(height);
    }
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const { selectionStart, selectionEnd } = e.target;
      const newValue =
        inputValue.substring(0, selectionStart) +
        '\t' +
        inputValue.substring(selectionEnd);
      setInputValue(newValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setInputValue('');
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-col bg-gray-800 w-full md:w-1/2 border-2 border-green-400 m-auto mx-5"
      style={{ height: containerHeight }}
    >
      <form className="flex flex-col h-full" onSubmit={handleSubmit}>
        <textarea
          className="flex-grow input text-3xl" // Increase the font size here
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={` Edit me to generate a tree!\n\u0009Use tab to indent!`}
        ></textarea>
      </form>
    </div>
  );
};

export default InputComponent;
