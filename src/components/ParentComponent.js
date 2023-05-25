import React, { useState, useEffect } from 'react';
import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';
import { generateTree } from '../utils/generateTree'; // Corrected path

const parseInputToStructure = (input) => {
  // Replace with your real implementation
  return {
    name: input,
    parent: null,
    children: []
  };
};

const ParentComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [parsedTree, setParsedTree] = useState('');

  useEffect(() => {
    const structure = parseInputToStructure(inputValue);
    const tree = generateTree(structure);
    setParsedTree(tree);
  }, [inputValue]);

  return (
    <div className="flex flex-col md:flex-row bg-gray-800 items-center justify-center h-[calc(100vh-4rem)]">
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <OutputComponent inputValue={parsedTree} /> {/* pass parsedTree here instead of inputValue */}
    </div>
  )
}

export default ParentComponent;
