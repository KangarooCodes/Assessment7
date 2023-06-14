const { timeWord } = require('./timeWord');

describe('Timeword Function', () => {
  test('testing if timeWord is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

describe('Check is entered time returns the correct string', ()=> {
  test('input of "00:00" should output "midnight"', () => {
    expect(timeWord("00:00")).toEqual('midnight');
  });
  test('input of "12:00" should output "noon"', () => {
    expect(timeWord("12:00")).toEqual('noon');
  });
});