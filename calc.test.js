const calculator = require('./calc');

test('addition', () => {
  expect(calculator('2 + 4')).toBe('6');
  expect(calculator('4 + 3')).toBe('7');
  expect(calculator('10 + 9')).toBe('19');
});

test('subtraction', () => {
  expect(calculator('8 - 1')).toBe('7');
  expect(calculator('7 - 4')).toBe('3');
});


test('multiplication', () => {
  expect(calculator('10 * 9')).toBe('90');
  expect(calculator('3 * 7')).toBe('21');
  expect(calculator('5 * 2')).toBe('10');
});


test('division', () => {
  expect(calculator('10 / 2')).toBe('5');
  expect(calculator('4 / 3')).toBe('1');
  expect(calculator('1 / 3')).toBe('0');
});

test('addition (Rome)', () => {
  expect(calculator('I + I')).toBe('II');
  expect(calculator('I + II')).toBe('III');
  expect(calculator('X + IX')).toBe('XIX');
});

test('subtraction (Rome)', () => {
  expect(calculator('V - IV')).toBe('I');
  expect(calculator('IV - IV')).toBe('');
  expect(calculator('I - X')).toBe('');
});

test('multiplication (Rome)', () => {
  expect(calculator('IV * X')).toBe('XL');
  expect(calculator('V * I')).toBe('V');
  expect(calculator('V * V')).toBe('XXV');
});

test('division (Rome)', () => {
  expect(calculator('X / I')).toBe('X');
  expect(calculator('V / IV')).toBe('I');
  expect(calculator('II / IV')).toBe('');
});

test('other errors', () => {
  expect(() => calculator('')).toThrowError();
  expect(() => calculator(' ')).toThrowError();
  expect(() => calculator('     ')).toThrowError();
  expect(() => calculator('4')).toThrowError();
  expect(() => calculator('+')).toThrowError();
  expect(() => calculator('++1')).toThrowError();
  expect(() => calculator('V')).toThrowError();
  expect(() => calculator('3 % 4')).toThrowError();
  expect(() => calculator('1 + 1 + 1')).toThrowError();
  expect(() => calculator('11 + 1')).toThrowError();
  expect(() => calculator('1 + 11')).toThrowError();
  expect(() => calculator('XI + I')).toThrowError();
  expect(() => calculator('I + XI')).toThrowError();
  expect(() => calculator('1 + V')).toThrowError();
  expect(() => calculator('I + 1')).toThrowError();
  expect(() => calculator('5 / 0')).toThrowError();
  expect(() => calculator('0 + 1')).toThrowError();
  expect(() => calculator('1 + 0')).toThrowError();
});