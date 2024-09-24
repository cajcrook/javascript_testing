const multiply = require('./multiply')

describe('multiply', () => {
    it('multiply 2 and 3', () => {
        expect(multiply(2, 3)).toBe(6);
    });
    
    it('multiply 6 and 13', () => {
        expect(multiply(6, 13)).toBe(78);
    });
});