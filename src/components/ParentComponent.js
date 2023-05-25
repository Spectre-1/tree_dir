import React, { useState } from 'react';
import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';

const ParentComponent = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="flex flex-col md:flex-row bg-gray-800 m-auto">
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <OutputComponent inputValue={inputValue} />
    </div>
  )
}

export default ParentComponent;
