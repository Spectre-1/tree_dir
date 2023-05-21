const LINE_STRINGS = require('./line-strings');

const defaultOptions = {
  charset: 'utf-8',
  trailingDirSlash: false,
  fullPath: false,
  rootDot: true,
};

export const generateTree = (structure, options = defaultOptions, prefix = '') => {
  const lines = LINE_STRINGS[options.charset];

  let result = [getAsciiLine(structure, options, prefix)];

  structure.children.forEach((child, i, arr) => {
    // Determine if this node is the last child of its parent
    const isLast = i === arr.length - 1;

    // The new prefix for children should include the DIRECTORY character,
    // unless this node is the last child of its parent, in which case it should include the EMPTY character.
    const newPrefix = prefix + (isLast ? lines.EMPTY : lines.DIRECTORY);

    const childOutput = generateTree(child, options, newPrefix);
    result = result.concat(childOutput);
  });

  return result.filter(line => line != null).join('\n');
};

const getAsciiLine = (structure, options, prefix = '') => {
  const lines = LINE_STRINGS[options.charset];
  let linePrefix = prefix;

  // If the node has a parent, it's not the root
  if (structure.parent) {
    // Determine if this node is the last child of its parent
    const isLast = isLastChild(structure);

    // The line prefix for children should include the CHILD or LAST_CHILD character,
    // depending on whether this node is the last child of its parent.
    linePrefix += isLast ? lines.LAST_CHILD : lines.CHILD;
  }

  // Node name is just the structure's name
  const nodeName = structure.name;

  return linePrefix + nodeName;
};

const isLastChild = (structure) => {
  return Boolean(structure.parent && structure.parent.children.slice(-1)[0] === structure);
};

export default generateTree;
