/**
 * Menghitung faktorial dari bilangan bulat positif menggunakan rekursi.
 * @param {number} n - Bilangan bulat positif.
 * @returns {number} - Faktorial dari n.
 */
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Jangan hapus kode di bawah ini!
export default factorial;
