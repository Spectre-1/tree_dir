const LINE_STRINGS = require('./line-strings');

const defaultOptions = {
  charset: 'utf-8',
  trailingDirSlash: false,
  fullPath: false,
  rootDot: true,
};

export const generateTree = (structure, prefix = '') => {
  let result = [getAsciiLine(structure, prefix)];
  
  structure.children.forEach((child, i, arr) => {
    const isLast = i === arr.length - 1;
    const newPrefix = prefix + (isLast ? LINE_STRINGS['utf-8'].EMPTY : LINE_STRINGS['utf-8'].DIRECTORY);

    const childOutput = generateTree(child, newPrefix);
    result = result.concat(childOutput);
  });

  return result.filter(line => line !== null).join('\n');
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
