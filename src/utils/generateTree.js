import { last } from 'lodash';
import { LINE_STRINGS } from './line-strings';

/** The default options if no options are provided */
const defaultOptions = {
  charset: 'ascii',
  trailingDirSlash: false,
  fullPath: false,
  rootDot: true,
};

export const generateTree = (structure, options = defaultOptions, prefix = '') => {
    const lines = LINE_STRINGS[options.charset];
  
    const result = [getAsciiLine(structure, options, prefix)];
  
    structure.children.forEach((child, i, arr) => {
      const isLast = i === arr.length - 1;
      const newPrefix = prefix + (isLast ? lines.EMPTY : lines.DIRECTORY);
      const childTree = generateTree(child, options, newPrefix);
      result.push(childTree);
    });
  
    return result.filter(line => line != null).join('\n');
  };
  
  
  const getAsciiLine = (structure, options, prefix = '') => {
    const lines = LINE_STRINGS[options.charset];
    const linePrefix = prefix;
    const lineChild = isLastChild(structure) ? lines.LAST_CHILD : lines.CHILD;
  
    if (structure.parent) {
      return linePrefix + lineChild + structure.name;
    }
  
    return structure.name;
  };

const getName = (structure, options) => {
  const nameChunks = [structure.name];

  if (
    options.trailingDirSlash &&
    structure.children.length > 0 &&
    !/\/\s*$/.test(structure.name)
  ) {
    nameChunks.push('/');
  }

  if (options.fullPath && structure.parent) {
    nameChunks.unshift(
      getName({
        ...structure.parent,
        trailingDirSlash: true,
      }, options),
    );
  }

  return nameChunks.join('');
};

const isLastChild = (structure) => {
  return Boolean(structure.parent && last(structure.parent.children) === structure);
};
