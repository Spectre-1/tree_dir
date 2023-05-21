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
  describe('generateTree', () => {
    it('should generate the correct tree for a given FileStructure with no children', () => {
      const fileStructure = {
        name: 'Root',
        parent: null,
        children: [],
      };
  
      const output = generateTree(fileStructure, { charset: 'ascii' });
      const expectedOutput = 'Root';
      expect(output).toEqual(expectedOutput);
    });
  
    it('should generate the correct tree for a given FileStructure with nested children', () => {
      const fileStructure = {
        name: 'Root',
        parent: null,
        children: [
          {
            name: 'Child1',
            parent: this,
            children: [
              {
                name: 'Grandchild1',
                parent: this,
                children: [],
              }
            ],
          },
          {
            name: 'Child2',
            parent: this,
            children: [],
          }
        ],
      };
  
      const output = generateTree(fileStructure, { charset: 'ascii' });
      const expectedOutput = 'Root\n|-- Child1\n|   `-- Grandchild1\n`-- Child2';
      expect(output).toEqual(expectedOutput);
    });
  
    it('should generate the correct tree for a given FileStructure with utf-8 charset', () => {
      const fileStructure = {
        name: 'Root',
        parent: null,
        children: [
          {
            name: 'Child1',
            parent: this,
            children: [],
          },
          {
            name: 'Child2',
            parent: this,
            children: [],
          }
        ],
      };
  
      const output = generateTree(fileStructure, { charset: 'utf-8' });
      const expectedOutput = 'Root\n├── Child1\n└── Child2';
      expect(output).toEqual(expectedOutput);
    });
  });
  
});
