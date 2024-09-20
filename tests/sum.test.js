const sum = require('./sum');

test('suma 1 + 2 es igual a 3', () => {
  expects(sum(1,2)).toBe(3);
});
