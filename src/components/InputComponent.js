import React, { useState } from 'react';
import '../tailwind.css';

const InputComponent = ({ inputValue, setInputValue }) => {
  
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
    <div className="flex flex-col h-full w-1/2 bg-gray-800 border-2 border-green-400 m-2">
      <form className="flex flex-col h-full" onSubmit={handleSubmit}>
        <textarea
          className="flex-grow input"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={`Edit me to generate a tree!\n\u0009Use tab to indent!`}
        ></textarea>
        <button className="mt-4 notepad-button" type="submit">Save</button>
      </form>
    </div>
  );
};

export default InputComponent;
