const fizzbuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
    it('divisible by 3', () => {
        expect(fizzbuzz(3)).toBe('Fizz');
    });

    it('divisible by 5', () => {
        expect(fizzbuzz(5)).toBe('Buzz');
    });
    
    it('divisible by 5 and 3', () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz');
    });

    it('not divisible by 5 or 3', () => {
        expect(fizzbuzz(8)).toBe(8);
    });

    it('divisible by 3', () => {
        expect(fizzbuzz(18)).toBe('Fizz');
    }); 

    it('divisible by 5', () => {
        expect(fizzbuzz(20)).toBe('Buzz');
    }); 

});