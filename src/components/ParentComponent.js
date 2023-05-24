import React, { useState } from 'react';
import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';

const ParentComponent = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <OutputComponent inputValue={inputValue} />
    </>
  )
}

export default ParentComponent;
