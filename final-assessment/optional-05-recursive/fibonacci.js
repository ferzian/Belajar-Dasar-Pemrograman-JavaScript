/**
 * Menghasilkan deret Fibonacci hingga elemen ke-n menggunakan rekursi.
 * @param {number} n - Indeks elemen dalam deret Fibonacci.
 * @returns {number[]} - Deret Fibonacci hingga elemen ke-n.
 */
function fibonacci(n) {
  if (n === 0) {
    return [0];
  }
  if (n === 1) {
    return [0, 1];
  }

  const sequence = fibonacci(n - 1);
  const nextElement = sequence[n - 1] + sequence[n - 2];
  sequence.push(nextElement);
  return sequence;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
