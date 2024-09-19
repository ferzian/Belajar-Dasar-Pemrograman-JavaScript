import { describe, it, expect } from 'bun:test';
import sum from './index.js';

describe('sum', () => {
  it('harus mengembalikan jumlah dari dua bilangan positif', () => {
    expect(sum(3, 4)).toBe(7);
  });

  it('harus mengembalikan 0 jika salah satu argumennya bukan number', () => {
    expect(sum(3, '4')).toBe(0);
    expect(sum('3', 4)).toBe(0);
    expect(sum('3', '4')).toBe(0);
  });

  it('harus mengembalikan 0 jika ada argumen yang bernilai negatif', () => {
    expect(sum(-1, 4)).toBe(0);
    expect(sum(3, -4)).toBe(0);
    expect(sum(-1, -4)).toBe(0);
  });

  it('harus mengembalikan 0 jika kedua argumen bukan number', () => {
    expect(sum('a', 'b')).toBe(0);
  });

  it('harus mengembalikan 0 saat undefined atau null', () => {
    expect(sum(undefined, 5)).toBe(0);
    expect(sum(null, 5)).toBe(0);
    expect(sum(5, undefined)).toBe(0);
    expect(sum(5, null)).toBe(0);
  });
});
