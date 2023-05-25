import React, { useState } from 'react';
import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';

const ParentComponent = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="flex flex-row h-screen bg-gray-800">
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <OutputComponent inputValue={inputValue} />
    </div>
  )
}

export default ParentComponent;
