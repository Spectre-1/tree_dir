import { generateTree } from './generateTree';

describe('generateTree', () => {
  it('should generate the correct tree for a given FileStructure', () => {
    const fileStructure = {
      name: 'Root',
      parent: null,
      children: [],
    };

    const child1 = {
      name: 'Child1',
      parent: fileStructure,
      children: [],
    };

    const child2 = {
      name: 'Child2',
      parent: fileStructure,
      children: [],
    };

    fileStructure.children = [child1, child2];

    const output = generateTree(fileStructure, { charset: 'utf-8' });
    const expectedOutput = 'Root\n├── Child1\n└── Child2';
    expect(output).toEqual(expectedOutput);
  });

  it('should generate the correct tree for a given FileStructure with no children', () => {
    const fileStructure = {
      name: 'Root',
      parent: null,
      children: [],
    };

    const output = generateTree(fileStructure, { charset: 'utf-8' });
    const expectedOutput = 'Root';
    expect(output).toEqual(expectedOutput);
  });

  it('should generate the correct tree for a given FileStructure with nested children', () => {
    const fileStructure = {
      name: 'Root',
      parent: null,
      children: [],
    };

    const child1 = {
      name: 'Child1',
      parent: fileStructure,
      children: [],
    };

    const grandchild1 = {
      name: 'Grandchild1',
      parent: child1,
      children: [],
    };

    child1.children = [grandchild1];

    const child2 = {
      name: 'Child2',
      parent: fileStructure,
      children: [],
    };

    fileStructure.children = [child1, child2];

    const output = generateTree(fileStructure, { charset: 'utf-8' });
    const expectedOutput = 'Root\n├── Child1\n│   └── Grandchild1\n└── Child2';
    expect(output).toEqual(expectedOutput);
  });
});
