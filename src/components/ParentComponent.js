import React, { useState } from 'react';
import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';

// ParentComponent.js
const ParentComponent = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="flex flex-col md:flex-row bg-gray-800 items-center justify-center h-[calc(100vh-4rem)]">
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <OutputComponent inputValue={inputValue} />
    </div>
  )
}

export default ParentComponent;

