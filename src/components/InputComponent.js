import React, {  } from 'react';
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
    <div className="flex flex-col bg-gray-800 w-full md:w-1/2 border-4 border-green-400 mx-5 overflow-auto">
      <form className="h-full" onSubmit={handleSubmit}>
        <textarea
          className="w-full h-full text-3xl outline-none resize-none p-0 m-0 min-h-[500px]" // Set width and height to 100%, remove outline, resize, padding, and margin
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
