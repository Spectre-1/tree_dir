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

    const output = generateTree(fileStructure);
    const expectedOutput = 'Root\n|-- Child1\n`-- Child2';
    expect(output).toEqual(expectedOutput);
  });
});
