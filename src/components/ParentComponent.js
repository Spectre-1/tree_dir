import React, { useState, useEffect } from 'react';
import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';
import { generateTree } from '../utils/generateTree'; // Corrected path

function stringToStructure(input) {
  let lines = input.split('\n');
  let root = { name: '.', children: [] };
  let currentNodes = {0: root}; // Root node at depth 0

  for (let line of lines) {
    let depth = line.search(/\S|$/) / 2; // Find the first non-space character and divide by 2, for 0-based index
    let name = line.trim();

    if (name.length > 0) { // Ignore blank lines
      let node = { name: name, children: [] };
      currentNodes[depth].children.push(node); // Add as child to current node at this depth
      currentNodes[depth + 1] = node; // This node becomes the current node at the next depth
    }
  }

  return root;
}

const input = `
src
  assets
  components
  Layout
    Header
    Footer
    Mainbody
  UI
    Data_Container
`;

let structure = stringToStructure(input);
let tree = generateTree(structure);
console.log(tree);


const ParentComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [parsedTree, setParsedTree] = useState('');

  useEffect(() => {
    const structure = stringToStructure(inputValue);
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
