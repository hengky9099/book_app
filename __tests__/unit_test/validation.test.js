const {expect} = require('@jest/globals');
const {
  isValidPassword,
  checkEmail,
  rupiah,
  Sort,
} = require('../../src/helpers/validation');

describe('UNIT TEST', () => {
  describe('Password Should Be Valid', () => {
    test('should be > 8 char', () => {
      expect(isValidPassword('Testtes1')).toBe(true);
    });
    test('should have at least 1 capital, 1 number', () => {
      expect(isValidPassword('Hengky123')).toBe(true);
    });
  });

  describe('Password Should Not be Valid', () => {
    test('password length < 8', () => {
      expect(isValidPassword('hehe')).toBe(false);
    });
    test('no capital', () => {
      expect(isValidPassword('hengky123')).toBe(false);
    });
    test('no number', () => {
      expect(isValidPassword('HengkyHengky')).toBe(false);
    });
    test('no small char', () => {
      expect(isValidPassword('HENGKY123')).toBe(false);
    });
    test('invalid type : number', () => {
      expect(isValidPassword(123123123)).toBe(false);
    });
    test('invalid type : array', () => {
      expect(isValidPassword([])).toBe(false);
    });
    test('invalid type : object', () => {
      expect(isValidPassword({})).toBe(false);
    });
  });

  describe('Email Should Be Valid', () => {
    test('need to have @ and .', () => {
      expect(checkEmail('hengky@gmail.com')).toBe(true);
    });
    test('with 1 Capital char', () => {
      expect(checkEmail('Hengky@gmail.com')).toBe(true);
    });
    test('with 1 number', () => {
      expect(checkEmail('Hengky123@gmail.com')).toBe(true);
    });
    test('with 2 dot', () => {
      expect(checkEmail('Hengky123@gmail.co.id')).toBe(true);
    });
  });

  describe('Email Should Not Be Valid', () => {
    test('without @', () => {
      expect(checkEmail('hengkygmail.com')).toBe(false);
    });
    test('without .', () => {
      expect(checkEmail('Hengky@gmailcom')).toBe(false);
    });
    test('without @ and .', () => {
      expect(checkEmail('Hengky123gmailcom')).toBe(false);
    });
    test('with 2 @', () => {
      expect(checkEmail('Hengky123@gmail@co.id')).toBe(false);
    });
  });

  describe('Rupiah function should be return the same nominal', () => {
    test('should return Rp 500', () => {
      expect(rupiah('500')).toBe('Rp 500');
    });
    test('should return Rp 1.000', () => {
      expect(rupiah('1000')).toBe('Rp 1.000');
    });
    test('should return Rp 15.000', () => {
      expect(rupiah('15000')).toBe('Rp 15.000');
    });
    test('should return Rp 199.000', () => {
      expect(rupiah('199000')).toBe('Rp 199.000');
    });
    test('should return Rp 1.000.000', () => {
      expect(rupiah('1000000')).toBe('Rp 1.000.000');
    });
    test('should return Rp 1.000.000.234.123.456', () => {
      expect(rupiah('1000000234123456')).toBe('Rp 1.000.000.234.123.456');
    });
    test('Number', () => {
      expect(rupiah(500)).toBe('Rp 500');
    });
  });

  describe('Rupiah function should be return the Wrong nominal', () => {
    test('Object', () => {
      expect(rupiah({})).toBe('RpNaN');
    });
    test('Array', () => {
      expect(rupiah(['500'])).toBe('Rp 500');
    });
  });
});
