const printName = require('../name');

test('testing with different names', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  let randomName = (Math.random() + 1).toString(36).substring(7);

  printName(randomName);

  expect(consoleSpy).toHaveBeenCalledWith(`Hallo, mein Name ist ${randomName}`);
});