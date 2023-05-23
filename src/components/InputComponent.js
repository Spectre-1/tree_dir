import React, { useState } from 'react';
import '../tailwind.css';

const InputComponent = () => {
  const [inputValue, setInputValue] = useState('');

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
    // Handle the submitted input value
    // You can perform any necessary actions or validations here
    // For example, you can pass the input value to a function or make an API call
    console.log(inputValue);
    // Reset the input value
    setInputValue('');
  };

  return (
    <div className="Input-container">
      <form onSubmit={handleSubmit}>
        <textarea
          className="input"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={`Edit me to generate a tree!\n\u0009Use tab to indent!`}
          rows={10}
        ></textarea>
        <button className="notepad-button" type="submit">Save</button>
      </form>
    </div>
  );
};

export default InputComponent;
