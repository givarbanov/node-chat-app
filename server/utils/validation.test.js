const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string value', () => {
    expect(isRealString(1234)).toBe(false);
  });
  it('should reject string value with only spaces', () => {
    expect(isRealString('      ')).toBe(false);
  });
  it('should allow string with non-space characters', () => {
    expect(isRealString('  as  df  ')).toBe(true);
  });
});
