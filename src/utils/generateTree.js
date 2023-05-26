const LINE_STRINGS = require('./line-strings');

const defaultOptions = {
  charset: 'utf-8',
  trailingDirSlash: false,
  fullPath: false,
  rootDot: true,
};

export const generateTree = (node, indent = '') => {
  const isDirectory = node.children && node.children.length > 0;
  const nodeName = isDirectory ? node.name + '/' : node.name;

  const lines = [indent + LINE_STRINGS['utf-8'].LAST_CHILD + nodeName];
  
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    const isLast = i === node.children.length - 1;
    
    const newIndent = indent + (isLast ? LINE_STRINGS['utf-8'].DIRECTORY : LINE_STRINGS['utf-8'].CHILD);
    
    const childLines = generateTree(child, newIndent);
    lines.push(...childLines);
  }

  return lines.join('\n'); // join the lines by newlines before returning
};

const getAsciiLine = (structure, prefix) => {
  const isLast = isLastChild(structure);
  const linePrefix = prefix + (isLast ? LINE_STRINGS['utf-8'].LAST_CHILD : LINE_STRINGS['utf-8'].CHILD);
  const nodeName = structure.children.length > 0 ? structure.name + '/' : structure.name; // Append '/' for directories

  return linePrefix + nodeName;
};

const isLastChild = (structure) => {
  return Boolean(structure.parent && structure.parent.children.slice(-1)[0] === structure);
};

export default generateTree;
