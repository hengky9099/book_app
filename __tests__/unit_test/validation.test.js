const {expect} = require('@jest/globals');
const {isValidPassword, checkEmail} = require('../../src/helpers/validation');
const {topRatedBook} = require('../../src/screens/home/index');

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

  describe('Sort Should be working', () => {
    test('test', () => {
      expect(topRatedBook([5, 6, 3, 4, 1, 7])).toEqual(7);
    });
  });
});
