import { last } from 'lodash';
import { LINE_STRINGS } from './line-strings';

/** The default options if no options are provided */
const defaultOptions = {
  charset: 'ascii',
  trailingDirSlash: false,
  fullPath: false,
  rootDot: true,
};

/**
 * Generates an ASCII tree diagram, given a FileStructure
 * @param structure The FileStructure object to convert into ASCII
 * @param options The rendering options
 */
export const generateTree = (structure, options = defaultOptions) => {
    const flattenDeep = (arr) => arr.flat(Infinity);
  
    return flattenDeep([
      getAsciiLine(structure, { ...defaultOptions, ...options }, ''),
      structure.children.map(c => generateTree(c, { ...defaultOptions, ...options }, '  ')),
    ])
      .filter(line => line != null)
      .join('\n');
  };
  
  /**
   * Returns a line of ASCII that represents
   * a single FileStructure object
   * @param structure The file to render
   * @param options The rendering options
   * @param prefix The prefix to be used for rendering the current level of the tree
   */
  const getAsciiLine = (structure, options, prefix) => {
    const lines = LINE_STRINGS[options.charset];
  
    if (!structure.parent) {
      return structure.name;
    }
  
    let linePrefix = prefix;
    if (structure.parent.parent) {
      linePrefix += isLastChild(structure.parent) ? lines.EMPTY : lines.DIRECTORY;
    }
  
    return linePrefix + (isLastChild(structure) ? lines.LAST_CHILD : lines.CHILD) + structure.name;
  };
  

/**
 * Returns the name of a file or folder according to the
 * rules specified by the rendering rules
 * @param structure The file or folder to get the name of
 * @param options The rendering options
 */
const getName = (structure, options) => {
  const nameChunks = [structure.name];

  if (
    options.trailingDirSlash &&
    structure.children.length > 0 &&
    !/\/\s*$/.test(structure.name)
  ) {
    nameChunks.push('/');
  }

  if (options.fullPath && structure.parent && structure.parent) {
    nameChunks.unshift(
      getName({
        ...structure.parent,
        trailingDirSlash: true,
      }, options),
    );
  }

  return nameChunks.join('');
};

/**
 * A utility function do determine if a file or folder
 * is the last child of its parent
 * @param structure The file or folder to test
 */
const isLastChild = (structure) => {
  return Boolean(structure.parent && last(structure.parent.children) === structure);
};
