// file: add.test.js
const add = require('./add');

describe('add', () => {
  it('adds 2 and 2', () => {
    expect(add(2, 2)).toBe(4);
  });
  
  it('adds 6 and 4', () => {
    expect(add(6, 4)).toBe(10);
  });
});

  