import { describe, it, expect } from 'bun:test';
import { sum } from './index.js';

describe('sum', () => {
  it('should return 3 for sum(1, 2)', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should return -2 for sum(-1, -1)', () => {
    expect(sum(-1, -1)).toBe(-2);
  });

  it('should return 0 for sum(0, 0)', () => {
    expect(sum(0, 0)).toBe(0);
  });
});
